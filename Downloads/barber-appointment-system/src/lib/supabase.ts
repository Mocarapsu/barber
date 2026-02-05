import { createClient } from '@supabase/supabase-js'

// Use Vercel environment variables (automatically set by Supabase integration)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for the database
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

export type WorkSchedule = {
  [key: string]: {
    enabled: boolean
    start: string
    end: string
  }
}

export type Service = {
  id: string
  name: string
  description: string | null
  price: number
  duration: number
  is_active: boolean
  created_at: string
}

export type Appointment = {
  id: string
  client_id: string
  barber_id: string
  service_id: string
  appointment_date: string
  start_time: string
  end_time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'refunded'
  payment_method: 'cash' | 'online' | null
  payment_id: string | null
  total_amount: number
  notes: string | null
  created_at: string
  client?: Profile
  barber?: Barber & { profile: Profile }
  service?: Service
}

export type Payment = {
  id: string
  appointment_id: string
  amount: number
  payment_method: 'cash' | 'online'
  payment_provider: string | null
  payment_provider_id: string | null
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  created_at: string
}
