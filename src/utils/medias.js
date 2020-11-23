export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    const strapiUrl = process.env.GRIDSOME_STRAPI_URL || 'https://nagima-site.herokuapp.com'
    return strapiUrl + url
  }
  // Otherwise return full URL
  return url
}
