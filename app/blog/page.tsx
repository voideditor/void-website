import Link from "next/link"
import { readPublicBlogPosts, formatDate } from "./utils"


export const metadata = {
  title: 'Blog',
  description: `Void's official blog page.`,
}


export default function Page() {
  let allBlogs = readPublicBlogPosts()

  return (
    <main>
      <section className='mx-auto px-2 mt-20 max-w-5xl w-full min-h-screen'>

        {/* <h1 className="font-semibold text-2xl tracking-tighter mb-8">The void Blog</h1> */}

        <div>
          {allBlogs
            .sort((a, b) => new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1)
            .map((post) => (
              // <BlogLink slug={post.slug} name={post.metadata.title} date={post.metadata.publishedAt} />
              <Link
                key={post.slug}
                className={`flex flex-col space-y-1 mb-4 ${post.isDevOnly ? 'opacity-50' : ''}`}
                href={`/blog/${post.slug}`}
              >
                <div className=" flex flex-col w-full md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 w-[180px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 tracking-tight font-bold">
                    {post.metadata.title}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  )
}
