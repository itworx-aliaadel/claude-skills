'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getStudentById, removeStudent, upsertStudent } from '@/lib/store'
import type { ActionState } from '@/lib/types'

export async function createStudent(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()

  if (!name) return { error: 'Name is required' }
  if (!email) return { error: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Invalid email address' }
  }

  upsertStudent({
    id: crypto.randomUUID(),
    name,
    email,
    enrolledCourseIds: [],
    createdAt: new Date().toISOString(),
  })

  revalidatePath('/students')
  revalidatePath('/')
  redirect('/students')
}

export async function updateStudent(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = formData.get('id') as string
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()

  if (!id) return { error: 'Student ID is missing' }
  if (!name) return { error: 'Name is required' }
  if (!email) return { error: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Invalid email address' }
  }

  const existing = getStudentById(id)
  if (!existing) return { error: 'Student not found' }

  upsertStudent({ ...existing, name, email })

  revalidatePath('/students')
  revalidatePath('/')
  redirect('/students')
}

export async function deleteStudentAction(formData: FormData): Promise<void> {
  const id = formData.get('id') as string
  if (id) {
    removeStudent(id)
    revalidatePath('/students')
    revalidatePath('/')
  }
}
