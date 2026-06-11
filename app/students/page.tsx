import Link from 'next/link'
import { getCourses, getStudents } from '@/lib/store'
import { StudentTable } from '@/components/students/student-table'

export default function StudentsPage() {
  const students = getStudents()
  const courses = getCourses()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Students
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {students.length} student{students.length !== 1 ? 's' : ''} registered
          </p>
        </div>
        <Link
          href="/students/new"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Add Student
        </Link>
      </div>

      <StudentTable students={students} courses={courses} />
    </div>
  )
}
