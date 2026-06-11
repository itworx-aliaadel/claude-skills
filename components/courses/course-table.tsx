import Link from 'next/link'
import type { Course, Student } from '@/lib/types'
import { deleteCourseAction } from '@/lib/actions/courses'

interface CourseTableProps {
  courses: Course[]
  students: Student[]
}

export function CourseTable({ courses, students }: CourseTableProps) {
  if (courses.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400 py-4">
        No courses yet.{' '}
        <Link href="/courses/new" className="text-blue-600 hover:underline">
          Add the first one.
        </Link>
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900">
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Code
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Title
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Description
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Enrolled
            </th>
            <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 w-32" />
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            const enrolledCount = students.filter(s =>
              s.enrolledCourseIds.includes(course.id),
            ).length

            return (
              <tr
                key={course.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="inline-block rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 font-medium">
                    {course.code}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 font-medium text-gray-900 dark:text-gray-100">
                  {course.title}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 max-w-xs truncate">
                  {course.description || (
                    <span className="text-gray-400 text-xs italic">No description</span>
                  )}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                  {enrolledCount} student{enrolledCount !== 1 ? 's' : ''}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/courses/${course.id}/edit`}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
                    >
                      Edit
                    </Link>
                    <form action={deleteCourseAction}>
                      <input type="hidden" name="id" value={course.id} />
                      <button
                        type="submit"
                        className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200 font-medium"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
