import Link from 'next/link'
import type { Course, Student } from '@/lib/types'
import { deleteStudentAction } from '@/lib/actions/students'

interface StudentTableProps {
  students: Student[]
  courses: Course[]
}

export function StudentTable({ students, courses }: StudentTableProps) {
  const courseMap = new Map(courses.map(c => [c.id, c]))

  if (students.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400 py-4">
        No students yet.{' '}
        <Link href="/students/new" className="text-blue-600 hover:underline">
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
              Name
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Email
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Enrolled Courses
            </th>
            <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 w-32" />
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            const enrolledCourses = student.enrolledCourseIds
              .map(id => courseMap.get(id))
              .filter((c): c is Course => c !== undefined)

            return (
              <tr
                key={student.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 font-medium text-gray-900 dark:text-gray-100">
                  {student.name}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                  {student.email}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  {enrolledCourses.length === 0 ? (
                    <span className="text-gray-400 text-xs">None</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {enrolledCourses.map(c => (
                        <span
                          key={c.id}
                          className="inline-block rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 font-medium"
                        >
                          {c.code}
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/students/${student.id}/edit`}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
                    >
                      Edit
                    </Link>
                    <form action={deleteStudentAction}>
                      <input type="hidden" name="id" value={student.id} />
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
