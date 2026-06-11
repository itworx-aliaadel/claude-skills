export interface Student {
  id: string
  name: string
  email: string
  enrolledCourseIds: string[]
  createdAt: string
}

export interface Course {
  id: string
  title: string
  code: string
  description: string
  createdAt: string
}

export type ActionState = { error: string } | null
