export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  qualifications: string[]
  reports?: TeamMember[]
}
