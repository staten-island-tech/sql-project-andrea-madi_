import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ijerzklyocrlzoovaqeq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZXJ6a2x5b2NybHpvb3ZhcWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNzE5MTgsImV4cCI6MTk5OTc0NzkxOH0.kV3gaG2JyvDJMm1VwoJRacY0G7O4dGgIjLBV3Kgf-_I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
