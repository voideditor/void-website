import { readPublicBlogPosts } from "./blog/utils"

export const baseUrl = process.env.BASE_URL ?? ''

export default async function sitemap() {
  // blog posts
  let blogs = readPublicBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  // actual routes
  let routes = ['', '/blog', '/changelog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...blogs, ...routes]
}
