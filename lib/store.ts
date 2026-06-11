import type { Course, Student } from './types'

function createStore() {
  const students = new Map<string, Student>()
  const courses = new Map<string, Course>()

  const seedCourses: Course[] = [
    {
      id: 'c1',
      title: 'Introduction to Computer Science',
      code: 'CS101',
      description: 'Fundamental concepts of programming and computation.',
      createdAt: '2024-01-01T00:00:00.000Z',
    },
    {
      id: 'c2',
      title: 'Calculus I',
      code: 'MATH201',
      description: 'Limits, derivatives, and integrals.',
      createdAt: '2024-01-02T00:00:00.000Z',
    },
    {
      id: 'c3',
      title: 'Data Structures',
      code: 'CS201',
      description: 'Arrays, linked lists, trees, and graphs.',
      createdAt: '2024-01-03T00:00:00.000Z',
    },
  ]

  const seedStudents: Student[] = [
    {
      id: 's1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      enrolledCourseIds: ['c1', 'c3'],
      createdAt: '2024-02-01T00:00:00.000Z',
    },
    {
      id: 's2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      enrolledCourseIds: ['c2'],
      createdAt: '2024-02-02T00:00:00.000Z',
    },
    {
      id: 's3',
      name: 'Carol White',
      email: 'carol@example.com',
      enrolledCourseIds: ['c1', 'c2', 'c3'],
      createdAt: '2024-02-03T00:00:00.000Z',
    },
  ]

  seedCourses.forEach(c => courses.set(c.id, c))
  seedStudents.forEach(s => students.set(s.id, s))

  return { students, courses }
}

// Survive HMR reloads in development via globalThis singleton
const globalStore = globalThis as typeof globalThis & {
  __appStore?: ReturnType<typeof createStore>
}
if (!globalStore.__appStore) {
  globalStore.__appStore = createStore()
}
const store = globalStore.__appStore

export function getStudents(): Student[] {
  return Array.from(store.students.values()).sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )
}

export function getCourses(): Course[] {
  return Array.from(store.courses.values()).sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )
}

export function getStudentById(id: string): Student | undefined {
  return store.students.get(id)
}

export function getCourseById(id: string): Course | undefined {
  return store.courses.get(id)
}

export function upsertStudent(student: Student): void {
  store.students.set(student.id, student)
}

export function upsertCourse(course: Course): void {
  store.courses.set(course.id, course)
}

export function removeStudent(id: string): void {
  store.students.delete(id)
}

export function removeCourse(id: string): void {
  store.courses.delete(id)
  // Cascade: remove deleted course from all students' enrollment lists
  for (const student of store.students.values()) {
    if (student.enrolledCourseIds.includes(id)) {
      store.students.set(student.id, {
        ...student,
        enrolledCourseIds: student.enrolledCourseIds.filter(cid => cid !== id),
      })
    }
  }
}

export function toggleEnrollmentInStore(studentId: string, courseId: string): void {
  const student = store.students.get(studentId)
  if (!student) return
  const isEnrolled = student.enrolledCourseIds.includes(courseId)
  store.students.set(studentId, {
    ...student,
    enrolledCourseIds: isEnrolled
      ? student.enrolledCourseIds.filter(cid => cid !== courseId)
      : [...student.enrolledCourseIds, courseId],
  })
}
