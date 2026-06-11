'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getCourseById, removeCourse, upsertCourse } from '@/lib/store'
import type { ActionState } from '@/lib/types'

export async function createCourse(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const title = (formData.get('title') as string)?.trim()
  const code = (formData.get('code') as string)?.trim().toUpperCase()
  const description = ((formData.get('description') as string) ?? '').trim()

  if (!title) return { error: 'Title is required' }
  if (!code) return { error: 'Course code is required' }
  if (!/^[A-Z]{2,6}\d{3}$/.test(code)) {
    return { error: 'Course code must be 2–6 letters followed by 3 digits (e.g. CS101)' }
  }

  upsertCourse({
    id: crypto.randomUUID(),
    title,
    code,
    description,
    createdAt: new Date().toISOString(),
  })

  revalidatePath('/courses')
  revalidatePath('/')
  redirect('/courses')
}

export async function updateCourse(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = formData.get('id') as string
  const title = (formData.get('title') as string)?.trim()
  const code = (formData.get('code') as string)?.trim().toUpperCase()
  const description = ((formData.get('description') as string) ?? '').trim()

  if (!id) return { error: 'Course ID is missing' }
  if (!title) return { error: 'Title is required' }
  if (!code) return { error: 'Course code is required' }
  if (!/^[A-Z]{2,6}\d{3}$/.test(code)) {
    return { error: 'Course code must be 2–6 letters followed by 3 digits (e.g. CS101)' }
  }

  const existing = getCourseById(id)
  if (!existing) return { error: 'Course not found' }

  upsertCourse({ ...existing, title, code, description })

  revalidatePath('/courses')
  revalidatePath('/')
  redirect('/courses')
}

export async function deleteCourseAction(formData: FormData): Promise<void> {
  const id = formData.get('id') as string
  if (id) {
    removeCourse(id)
    revalidatePath('/courses')
    revalidatePath('/')
  }
}
