// Short professional link: /p/1015  or  /api/p?id=1015
const PROJECT_ID = 'bsp-fashion-kol';

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cleanImg(url) {
  if (!url) return '';
  try {
    const u = new URL(url);
    return u.origin + u.pathname;
  } catch (e) {
    return String(url).split('?')[0];
  }
}

function fromFirestoreValue(v) {
  if (v == null) return null;
  if (v.stringValue !== undefined) return v.stringValue;
  if (v.integerValue !== undefined) return Number(v.integerValue);
  if (v.doubleValue !== undefined) return Number(v.doubleValue);
  if (v.booleanValue !== undefined) return v.booleanValue;
  if (v.arrayValue && v.arrayValue.values) return v.arrayValue.values.map(fromFirestoreValue);
  if (v.mapValue && v.mapValue.fields) {
    const o = {};
    for (const [k, val] of Object.entries(v.mapValue.fields)) o[k] = fromFirestoreValue(val);
    return o;
  }
  return null;
}

function parseDoc(doc) {
  const f = doc.fields || {};
  const name = fromFirestoreValue(f.name) || 'BSP Fashion Product';
  const moq = fromFirestoreValue(f.moq) || 12;
  const category = fromFirestoreValue(f.category) || '';
  let images = fromFirestoreValue(f.images) || [];
  if (!Array.isArray(images)) images = [];
  let sizes = fromFirestoreValue(f.sizes) || [];
  if (!Array.isArray(sizes)) sizes = [];
  const prices = sizes.map((s) => (s && s.price != null ? Number(s.price) : NaN)).filter((n) => !isNaN(n));
  const minPrice = prices.length ? Math.min(...prices) : 0;
  return {
    name,
    img: cleanImg(images[0] || ''),
    desc: `MOQ ${moq} • From ₹${minPrice}${category ? ' • ' + category : ''}`
  };
}

async function findByLocalId(id) {
  const sid = String(id || '').trim();
  if (!sid) return null;

  const values = /^\d+$/.test(sid)
    ? [{ integerValue: sid }, { stringValue: sid }]
    : [{ stringValue: sid }];

  for (const value of values) {
    try {
      const body = {
        structuredQuery: {
          from: [{ collectionId: 'products' }],
          where: {
            fieldFilter: {
              field: { fieldPath: 'localId' },
              op: 'EQUAL',
              value
            }
          },
          limit: 1
        }
      };
      const r = await fetch(
        `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      if (!r.ok) continue;
      const rows = await r.json();
      const hit = (rows || []).find((x) => x.document);
      if (hit) return parseDoc(hit.document);
    } catch (e) {}
  }

  try {
    const r = await fetch(
      `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/products/${encodeURIComponent(sid)}`
    );
    if (r.ok) {
      const doc = await r.json();
      if (doc.fields) return parseDoc(doc);
    }
  } catch (e) {}

  return null;
}

module.exports = async (req, res) => {
  try {
    const q = req.query || {};
    const id = String(q.id || '').trim();
    let title = q.t ? String(q.t) : '';
    let image = q.img ? cleanImg(String(q.img)) : '';
    let desc = q.d ? String(q.d) : '';

    if (id) {
      const prod = await findByLocalId(id);
      if (prod) {
        // Firestore is source of truth for short links
        title = prod.name;
        image = prod.img || image;
        desc = prod.desc || desc;
      }
    }

    // Optional overrides from query (if someone passes them)
    if (q.t) title = String(q.t).slice(0, 100);
    if (q.img) image = cleanImg(String(q.img));
    if (q.d) desc = String(q.d).slice(0, 160);

    title = (title || 'BSP Fashion Product').slice(0, 100);
    image = image || 'https://ik.imagekit.io/bsp/1788066275504-clean.png';
    desc = (desc || 'Wholesale clothing • BSP Fashion Kolkata').slice(0, 160);
    const dest = 'https://bspfashion.vercel.app/?product=' + encodeURIComponent(id);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)} | BSP Fashion</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="${esc(desc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="BSP Fashion" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:secure_url" content="${esc(image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:url" content="${esc(dest)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <link rel="canonical" href="${esc(dest)}" />
  <meta http-equiv="refresh" content="0;url=${esc(dest)}" />
</head>
<body style="font-family:system-ui;background:#111;color:#eee;text-align:center;padding:40px">
  <p>Opening <strong>${esc(title)}</strong>…</p>
  <p><a href="${esc(dest)}" style="color:#d4af37">Open product</a></p>
  <script>location.replace(${JSON.stringify(dest)});</script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=600');
    res.statusCode = 200;
    res.end(html);
  } catch (e) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<html><body>BSP Fashion</body></html>');
  }
};
