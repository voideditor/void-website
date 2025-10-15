import LandingPage from "@/components/landingpage/LandingPage";
import { baseUrl } from "./sitemap";

const title = 'CorteXIDE'
const shortTitle = 'CorteXIDE'
const description = 'CorteXIDE is an open source Cursor alternative, forked from Void IDE. Full privacy. Fully-featured.'
const ogImage = `${baseUrl}/og?title=${encodeURIComponent(shortTitle)}&description=${encodeURIComponent(description)}`


// returns params
export const metadata = {
  title,
  description,
  openGraph: {
    title: shortTitle,
    description,
    type: 'article',
    url: `${baseUrl}`,
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: shortTitle,
    description,
    images: [ogImage],
  },
}





export default function Home() {
  return (
    <main className='min-h-screen'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: shortTitle,
            description: description,
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Any',
            url: baseUrl,
            image: ogImage,
            author: {
              '@type': 'Organization',
              name: 'CorteXIDE Editor',
              url: baseUrl
            }
          }),
        }}
      />
      <LandingPage />
    </main>
  );
}
