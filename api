// Vercel Serverless — Product OG for WhatsApp
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
  const title = q.t || 'BSP Fashion Product';
  const image = q.img || 'https://i.ibb.co/0RqxsYmT/1777788000451.jpg';
  const desc = q.d || 'Premium wholesale clothing • BSP Fashion Kolkata';
  const site = 'https://bspfashion.vercel.app';
  const dest = site + '/?product=' + encodeURIComponent(id);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)} | BSP Fashion</title>
  <meta name="description" content="${esc(desc)}" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="BSP Fashion" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:secure_url" content="${esc(image)}" />
  <meta property="og:url" content="${esc(dest)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <meta http-equiv="refresh" content="0;url=${esc(dest)}" />
  <link rel="canonical" href="${esc(dest)}" />
</head>
<body>
  <p>Opening product…</p>
  <p><a href="${esc(dest)}">View on BSP Fashion</a></p>
  <script>location.replace(${JSON.stringify(dest)});</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.statusCode = 200;
  res.end(html);
};
