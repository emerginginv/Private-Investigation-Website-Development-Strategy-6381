import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vpnewsjhsyrbznrhmxzo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbmV3c2poc3lyYnpucmhteHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NDgyNjIsImV4cCI6MjA2NzUyNDI2Mn0.y5QN7Mpa9cC3rvVi2HLCtwpHBAUpNALQ7dkYgSNzMq4'

if (SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase variables')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase