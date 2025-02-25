
import BigCode from '@/components/landingpage/BigCode'
import type { MDXComponents } from 'mdx/types'



export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        p: ({ children }) => <p className='text-sm mt-4'>{children}</p>,
        h1: ({ children }) => <h1 className='text-md font-bold mt-4'>{children}</h1>,
        h2: ({ children }) => <h2 className='text-sm font-semibold mt-4'>{children}</h2>,
        code: ({ children }) => <BigCode>{children}</BigCode>,
        a: ({ children, href }) => <a href={href} className='underline text-blue-700'>{children}</a>,
        ...components,
    }
}