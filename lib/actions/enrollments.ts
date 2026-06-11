'use server'

import { revalidatePath } from 'next/cache'
import { toggleEnrollmentInStore } from '@/lib/store'

export async function toggleEnrollment(
  studentId: string,
  courseId: string,
): Promise<void> {
  toggleEnrollmentInStore(studentId, courseId)
  revalidatePath('/')
}
