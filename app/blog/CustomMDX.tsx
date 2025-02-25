import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
// import { highlight } from 'sugar-high'
import React from 'react'

// if these dont work, downgrade them
import remarkGfm from 'remark-gfm'

import { GiInvertedDice1, GiInvertedDice2, GiInvertedDice3, GiInvertedDice4, GiInvertedDice5, GiInvertedDice6 } from "react-icons/gi";
import ModelGuide from './blog-components/ModelGuide'


function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href
  if (href.startsWith('/'))
    return (<Link href={href} {...props}>{props.children}</Link>)
  if (href.startsWith('#'))
    return <a {...props} />
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: ImageProps) {
  // this has an alt even if linter says it doesnt. The ...props part adds it in.
  return <Image className="mx-auto rounded-lg" {...props} />
}

function Code({ ...props }) {
  // let codeHTML = highlight(children)
  return <code {...props} />
}

function LabeledImage(props: ImageProps) {
  const { src, children, width, height, alt } = props
  if (!children || !alt)
    return <>{`one of these was null on LabeledImage ${src}: children=${children} alt=${alt}`}</>
  return <div>
    <Image className='mx-auto rounded-lg mb-0' {...props} alt={alt} />
    <span className='block text-gray-500 mx-auto text-center'>{children}</span>
  </div>

}






export function CustomMDX({ source }: { source: string }) {

  return (
    <MDXRemote // rsc = remote server component
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm,],
          rehypePlugins: [],
        },
      }}

      components={{
        Image: RoundedImage,
        a: CustomLink,
        code: Code,
        Table: Table,
        LabeledImage,

        D1: GiInvertedDice1, D2: GiInvertedDice2, D3: GiInvertedDice3, D4: GiInvertedDice4, D5: GiInvertedDice5, D6: GiInvertedDice6,

        ModelGuide,
      }}
    />
  )

}

