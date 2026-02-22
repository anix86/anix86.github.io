import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const galleryDirectory = path.join(process.cwd(), 'content/gallery')

export interface PhotoMeta {
  id: number
  src: string
  alt: string
  title: string
  location: string
  date: string
}

export interface PhotoDetail extends PhotoMeta {
  description: string
  htmlDescription: string
}

export const photos: PhotoMeta[] = [
  { id: 1,  src: '/gallery/photo-1.jpg',  alt: 'Mountain landscape',  title: 'Mountain Landscape', location: 'Rocky Mountains, Colorado',    date: '2024-06-12' },
  { id: 2,  src: '/gallery/photo-2.jpg',  alt: 'Ocean sunset',        title: 'Ocean Sunset',       location: 'Big Sur, California',           date: '2024-08-03' },
  { id: 3,  src: '/gallery/photo-3.jpg',  alt: 'Forest trail',        title: 'Forest Trail',       location: 'Olympic National Park, WA',     date: '2023-10-18' },
  { id: 4,  src: '/gallery/photo-4.jpg',  alt: 'City skyline',        title: 'City Skyline',       location: 'Chicago, Illinois',             date: '2024-03-22' },
  { id: 5,  src: '/gallery/photo-5.jpg',  alt: 'Desert dunes',        title: 'Desert Dunes',       location: 'White Sands, New Mexico',       date: '2024-01-15' },
  { id: 6,  src: '/gallery/photo-6.jpg',  alt: 'Snowy peaks',         title: 'Snowy Peaks',        location: 'Chamonix, French Alps',         date: '2023-12-08' },
  { id: 7,  src: '/gallery/photo-7.jpg',  alt: 'Tropical beach',      title: 'Tropical Beach',     location: 'Koh Lanta, Thailand',           date: '2024-11-01' },
  { id: 8,  src: '/gallery/photo-8.jpg',  alt: 'Rural countryside',   title: 'Rural Countryside',  location: 'Cotswolds, England',            date: '2023-09-05' },
  { id: 9,  src: '/gallery/photo-9.jpg',  alt: 'Waterfalls',          title: 'Waterfalls',         location: 'Skógafoss, Iceland',            date: '2024-07-20' },
  { id: 10, src: '/gallery/photo-10.jpg', alt: 'Autumn leaves',       title: 'Autumn Leaves',      location: 'Vermont, New England',          date: '2023-10-12' },
  { id: 11, src: '/gallery/photo-11.jpg', alt: 'Lake reflection',     title: 'Lake Reflection',    location: 'Banff National Park, Canada',   date: '2024-09-14' },
  { id: 12, src: '/gallery/photo-12.jpg', alt: 'Night sky',           title: 'Night Sky',          location: 'Atacama Desert, Chile',         date: '2024-05-30' },
]

export async function getPhotoDetail(id: number): Promise<PhotoDetail | null> {
  const meta = photos.find(p => p.id === id)
  if (!meta) return null

  const filePath = path.join(galleryDirectory, `photo-${id}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const htmlDescription = processed.toString()

  return {
    ...meta,
    title: data.title ?? meta.title,
    location: data.location ?? meta.location,
    date: data.date ? String(data.date).slice(0, 10) : meta.date,
    description: content.trim(),
    htmlDescription,
  }
}
