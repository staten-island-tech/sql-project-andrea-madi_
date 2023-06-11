import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nihlrgwhkuyvrdformqe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5paGxyZ3doa3V5dnJkZm9ybXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1MDE3NTIsImV4cCI6MjAwMjA3Nzc1Mn0.csTwP7jgbyh2INAjR-n1x6sq2nMvUFQP0jq5h1kAxjA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)