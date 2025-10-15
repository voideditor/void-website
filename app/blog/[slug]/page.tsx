import { notFound } from 'next/navigation'
import { formatDate, readPublicBlogPosts, postType } from '../utils'
import { baseUrl } from '../../sitemap'
import { Metadata } from 'next'
import { CustomMDX } from '../CustomMDX'


const ogImageUrlOfPost = (post: postType) => {
    return post.metadata.ogimage ? `${baseUrl}${post.metadata.ogimage}`
        : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}&description=${encodeURIComponent(post.metadata.description)}`
}

// metadata for this page
export function generateMetadata({ params }): Metadata {
    let post = readPublicBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return {}
    }

    let { title, publishedAt: publishedTime, description, } = post.metadata
    let ogImageUrl = ogImageUrlOfPost(post)

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImageUrl,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
        },
    }
}



// read the files and pass them to BlogPost
export async function generateStaticParams() {
    let posts = readPublicBlogPosts()
    return posts.map((post) => ({ slug: post.slug, }))
}


export default function BlogPost({ params }) {
    let post = readPublicBlogPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }


    const ogImageUrl = ogImageUrlOfPost(post)

    return (
        <section className='mx-auto px-2 my-20 max-w-2xl w-full min-h-screen'>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        description: post.metadata.description,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.modifiedAt,
                        image: ogImageUrl,
                        url: `${baseUrl}/blog/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'CorteXIDE Editor',
                        },
                    }),
                }}
            />

            <div>
                <h1 className="title font-semibold text-2xl tracking-tighter">
                    {post.metadata.title}
                </h1>
                <p className="text-sm text-neutral-600">
                    {formatDate(post.metadata.publishedAt)}
                </p>
            </div>

            <main>
                <article className='prose max-w-3xl mx-auto'>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                    </div>
                    <CustomMDX source={post.content} />
                </article>
            </main>

        </section>
    )
}
