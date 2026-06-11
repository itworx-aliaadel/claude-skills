'use client'

import { useTransition } from 'react'
import type { Course, Student } from '@/lib/types'
import { toggleEnrollment } from '@/lib/actions/enrollments'

interface EnrollmentMatrixProps {
  students: Student[]
  courses: Course[]
}

export function EnrollmentMatrix({ students, courses }: EnrollmentMatrixProps) {
  const [isPending, startTransition] = useTransition()

  function handleToggle(studentId: string, courseId: string) {
    startTransition(async () => {
      await toggleEnrollment(studentId, courseId)
    })
  }

  if (students.length === 0 || courses.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Add at least one student and one course to see the enrollment matrix.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-sm w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900">
            <th className="text-left p-3 pr-8 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300 w-56">
              Student
            </th>
            {courses.map(course => (
              <th
                key={course.id}
                title={course.title}
                className="p-3 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300 text-center min-w-28"
              >
                <div>{course.code}</div>
                <div className="text-xs font-normal text-gray-400 truncate max-w-24">
                  {course.title}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr
              key={student.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >
              <td className="p-3 pr-8 border-b border-gray-100 dark:border-gray-800">
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {student.name}
                </div>
                <div className="text-xs text-gray-500">{student.email}</div>
              </td>
              {courses.map(course => {
                const enrolled = student.enrolledCourseIds.includes(course.id)
                return (
                  <td
                    key={course.id}
                    className="p-3 border-b border-gray-100 dark:border-gray-800 text-center"
                  >
                    <input
                      type="checkbox"
                      checked={enrolled}
                      disabled={isPending}
                      onChange={() => handleToggle(student.id, course.id)}
                      aria-label={`${enrolled ? 'Unenroll' : 'Enroll'} ${student.name} in ${course.title}`}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer disabled:cursor-wait disabled:opacity-50"
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
