import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://igvwnxvriaxtwizctjtm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndndueHZyaWF4dHdpemN0anRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDQ0ODMsImV4cCI6MjAwMTkyMDQ4M30._bhvZHamMECf-GOz2ZfOSHztW5Ve40OOOnVJN5wbVrU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)