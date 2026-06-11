import { notFound } from 'next/navigation'
import { getStudentById } from '@/lib/store'
import { updateStudent } from '@/lib/actions/students'
import { StudentForm } from '@/components/students/student-form'

interface EditStudentPageProps {
  params: Promise<{ id: string }>
}

export default async function EditStudentPage({ params }: EditStudentPageProps) {
  const { id } = await params
  const student = getStudentById(id)

  if (!student) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Edit Student
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Update details for {student.name}.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <StudentForm
          action={updateStudent}
          defaultValues={{ id: student.id, name: student.name, email: student.email }}
        />
      </div>
    </div>
  )
}
