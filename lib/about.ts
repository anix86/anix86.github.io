import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface AboutData {
  name: string
  headline: string
  skills: string[]
  htmlContent: string
}

const aboutFile = path.join(process.cwd(), 'content', 'about.md')

export async function getAboutContent(): Promise<AboutData> {
  const raw = fs.readFileSync(aboutFile, 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(html).process(content)
  const htmlContent = processed.toString()

  return {
    name: data.name ?? 'Aneesh Nair',
    headline: data.headline ?? '',
    skills: Array.isArray(data.skills) ? data.skills : [],
    htmlContent,
  }
}
