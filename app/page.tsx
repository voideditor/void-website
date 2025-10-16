import LandingPage from "@/components/landingpage/LandingPage";
import { baseUrl } from "./sitemap";

const title = 'CorteXIDE - Open-source AI IDE for Privacy-First Development'
const shortTitle = 'CorteXIDE'
const description = 'Open-source AI IDE for privacy-first development. CorteXIDE is a Cursor alternative that gives you full control over your data while providing powerful AI coding features.'
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
