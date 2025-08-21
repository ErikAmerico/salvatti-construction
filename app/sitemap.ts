export default async function sitemap() {
  const base = "https://www.salvatihome.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/reviews`, lastModified: new Date() },
    { url: `${base}/quote`, lastModified: new Date() },
  ];
}
