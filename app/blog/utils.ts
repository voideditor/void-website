import fs from 'fs'
import path from 'path'

export type metadataType = {
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  ogimage?: string
}

function parseFrontmatter(fileContent: string): { metadata: metadataType, content: string } {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)

  // in case i left out frontmatter by accident
  if (!match)
    return { metadata: { title: '(specify frontmatter)', description: '-', publishedAt: '' }, content: fileContent }

  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<metadataType> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof metadataType] = value
  })

  return { metadata: metadata as metadataType, content }
}



export type postType = { metadata: metadataType, slug: string, content: string, isDevOnly?: boolean }
export function readPublicBlogPosts(): postType[] {

  const dir = path.join(process.cwd(), 'app', 'blog', '[slug]', 'content')

  let mdxFileNames = fs.readdirSync(dir)

  return mdxFileNames.map((fileWithDotMdx) => {
    let { name: fileName } = path.parse(fileWithDotMdx)
    const { metadata, content } = parseFrontmatter(fs.readFileSync(path.join(dir, fileWithDotMdx), 'utf-8'))

    const isDev = fileWithDotMdx.match(/^DEV-.*$/)
    const isPrivate = fileWithDotMdx.match(/^_.*$/)
    if (isDev || isPrivate) {
      if (process.env.NODE_ENV === 'development')
        return { metadata: { ...metadata, title: (isDev ? 'DEV - ' : 'PRIVATE - ') + metadata.title }, slug: fileName, content, isDevOnly: true }
      else
        return null
    }
    return { metadata, slug: fileName, content }
  }).filter(v => v !== null) as postType[]

}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}