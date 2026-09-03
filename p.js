// Product share Open Graph — WhatsApp / Facebook preview
function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = (req, res) => {
  const q = req.query || {};
  const id = q.id || '';
  const title = (q.t || 'BSP Fashion Product').slice(0, 100);
  const image = q.img || 'https://i.ibb.co/0RqxsYmT/1777788000451.jpg';
  const desc = (q.d || 'Wholesale clothing • BSP Fashion Kolkata').slice(0, 160);
  const site = 'https://bspfashion.vercel.app';
  const dest = site + '/?product=' + encodeURIComponent(id);

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
  <meta property="og:image:type" content="image/jpeg" />
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
  <p><a href="${esc(dest)}" style="color:#d4af37">Open on BSP Fashion</a></p>
  <script>location.replace(${JSON.stringify(dest)});</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.statusCode = 200;
  res.end(html);
};
