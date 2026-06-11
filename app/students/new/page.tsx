import { createStudent } from '@/lib/actions/students'
import { StudentForm } from '@/components/students/student-form'

export default function NewStudentPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Add Student
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Register a new student. They can be enrolled in courses from the dashboard.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <StudentForm action={createStudent} />
      </div>
    </div>
  )
}
