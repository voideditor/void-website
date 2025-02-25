import GlassProvider from "glass-js";
// import GlassPromptBar from "glass-js-test";
// import GlassPromptBar from "@/_src";

// import { Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/landingpage/Footer";
import { Header } from "@/components/landingpage/Header";
import { CSPostHogProvider } from '../components/providers'


// const inter = Inter({ subsets: ["latin"] });

// // I guess this is the default if a page doesn't specify metadata?
// export const metadata: Metadata = {
//     title: "Glass",
//     description: "Glass is an AI copilot for React and Next.js developers that makes frontend development fast. Stop wasting time switching between the browser and your code, and make visual changes from the browser in realtime.  ",
//     // icons: [{ url: process.env.BASE_URL + '/glass.svg' }], // no idea what this is for, icon.svg just existing should be fine 
// };



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const bg1 = 'rgba(255, 255, 255, 1)';
    const bg2 = 'rgba(228, 229, 231, 0.85)';

    return (<>

        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />

            </head>

            {/* <body className='text-black bg-gray-100 ' style={{ background: `url('/noise.png')` }}> */}
            <CSPostHogProvider>
                <body className='text-black bg-gray-100' style={{ background: `linear-gradient(90deg, ${bg2} 0%, ${bg1} 25%, ${bg1} 75%, ${bg2} 100%)` }}>
                    <div className='overflow-hidden rounded-sm'>
                        {/* in dark mode, text-black is not the default */}
                        <GlassProvider>
                            <Header />
                            {children}
                            <Footer />
                        </GlassProvider>
                    </div>
                </body>
            </CSPostHogProvider>
        </html>
    </>
    );
}
