import { createCourse } from '@/lib/actions/courses'
import { CourseForm } from '@/components/courses/course-form'

export default function NewCoursePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Add Course
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Create a new course that students can enroll in.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <CourseForm action={createCourse} />
      </div>
    </div>
  )
}
