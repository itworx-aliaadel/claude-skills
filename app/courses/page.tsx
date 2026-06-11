import Link from 'next/link'
import { getCourses, getStudents } from '@/lib/store'
import { CourseTable } from '@/components/courses/course-table'

export default function CoursesPage() {
  const courses = getCourses()
  const students = getStudents()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Courses
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {courses.length} course{courses.length !== 1 ? 's' : ''} available
          </p>
        </div>
        <Link
          href="/courses/new"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Add Course
        </Link>
      </div>

      <CourseTable courses={courses} students={students} />
    </div>
  )
}
