export const runtime = 'edge';
'use client'

import { redirect } from 'next/navigation'

export default function NewPage() {
  redirect('/')
}
