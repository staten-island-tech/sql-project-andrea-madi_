import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxhulsevnuyzxmnrocbx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aHVsc2V2bnV5enhtbnJvY2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1MDE5MzAsImV4cCI6MjAwMjA3NzkzMH0.GuC02stycrh4ABAIp97XMUrv695Ix5WLcL6GA7WhInQ'

export const supabase = createClient(supabaseUrl, supabaseKey)