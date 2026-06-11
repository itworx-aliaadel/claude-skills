import Link from 'next/link'
import { getCourses, getStudents } from '@/lib/store'
import { EnrollmentMatrix } from '@/components/dashboard/enrollment-matrix'

export default function DashboardPage() {
  const students = getStudents()
  const courses = getCourses()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Toggle checkboxes to enroll or unenroll students in courses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {students.length}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Students</div>
          <Link
            href="/students/new"
            className="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            + Add student
          </Link>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {courses.length}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Courses</div>
          <Link
            href="/courses/new"
            className="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            + Add course
          </Link>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {students.reduce((sum, s) => sum + s.enrolledCourseIds.length, 0)}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Total Enrollments
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Enrollment Matrix
        </h2>
        <EnrollmentMatrix students={students} courses={courses} />
      </div>
    </div>
  )
}
