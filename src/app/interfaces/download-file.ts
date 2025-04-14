export interface DownloadFile {
  id: string
  title: string
  description: string
  fileType: string
  fileSize: string
  downloadCount: number
  lastUpdated: string
  category: string
  featured?: boolean
  new?: boolean
  url: string
}
