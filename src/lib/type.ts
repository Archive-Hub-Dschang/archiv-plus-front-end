export interface Subject {
  id: string
  title: string
  description: string
  field: string
  level: string
  hasCorrections?: boolean
  hasSupports?: boolean
  hasVideos?: boolean
}

export interface Correction {
  id: string
  title: string
  date: string
  fileUrl: string
}

export interface Support {
  id: string
  title: string
  type: string
  pages: number
  fileUrl: string
}

export interface Video {
  id: string
  title: string
  duration: string
  views: number
  url: string
}