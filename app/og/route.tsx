import { ImageResponse } from 'next/og'
import { baseUrl } from '../sitemap'
process
export function GET(request: Request) {
  let url = new URL(request.url)
  // console.log(url)
  let title = url.searchParams.get('title') ?? ''
  let description = url.searchParams.get('description') ?? ''


  // i think all the width math is right
  return new ImageResponse(
    (
      <div tw="flex flex-row w-full h-full items-center justify-start px-[120px] bg-white">
        <img tw=' h-[300px] w-[300px] mr-[80px]' src={`${baseUrl}${process.env.NEXT_PUBLIC_LOGO_URL!}`} />

        <div tw="flex flex-col w-[620px]">
          <h2 tw="text-8xl font-bold tracking-tight text-left ">{title}</h2>
          <p tw='text-gray-500 text-5xl'>{description}</p>
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
