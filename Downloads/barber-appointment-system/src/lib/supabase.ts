/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL || ''
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

console.log('🔍 Supabase Config:', { URL: URL ? '✓' : '✗', KEY: KEY ? '✓' : '✗' })

export const supabase = (URL && KEY) ? createClient(URL, KEY) : null

export type UserRole = 'admin' | 'barber' | 'client'
export type Profile = { 
  id: string
  email: string
  full_name: string
  phone: string | null
  role: UserRole
  avatar_url: string | null
  created_at: string
}
export type Barber = { 
  id: string
  profile_id: string
  is_active: boolean
  work_schedule: WorkSchedule
  created_at: string
  profile?: Profile
}
export type WorkSchedule = { [key: string]: { enabled: boolean; start: string; end: string } }
export type Service = { 
  id: string
  name: string
  description: string | null
  price: number
  duration: number
  is_active: boolean
  created_at: string
}
