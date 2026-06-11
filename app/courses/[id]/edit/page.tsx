import { notFound } from 'next/navigation'
import { getCourseById } from '@/lib/store'
import { updateCourse } from '@/lib/actions/courses'
import { CourseForm } from '@/components/courses/course-form'

interface EditCoursePageProps {
  params: Promise<{ id: string }>
}

export default async function EditCoursePage({ params }: EditCoursePageProps) {
  const { id } = await params
  const course = getCourseById(id)

  if (!course) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Edit Course
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Update details for {course.title}.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <CourseForm
          action={updateCourse}
          defaultValues={{
            id: course.id,
            title: course.title,
            code: course.code,
            description: course.description,
          }}
        />
      </div>
    </div>
  )
}
