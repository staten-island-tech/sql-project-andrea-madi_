import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://khlvrzbbaoloacccskwg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobHZyemJiYW9sb2FjY2Nza3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0MzkwMzksImV4cCI6MjAwMjAxNTAzOX0.2Tkuz_grCKkM9oJYSDh-BRlOAfEOpJb8SGTqDlQaiH4'

export const supabase = createClient(supabaseUrl, supabaseKey)