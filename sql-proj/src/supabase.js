import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://exqvplqnjlajlivrmuzz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cXZwbHFuamxhamxpdnJtdXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0MTUzNjAsImV4cCI6MjAwMTk5MTM2MH0.EefGu6JfaBpR_KhVkUfgOwMI7mfR6djLcl5Fu0XhNjE'

export const supabase = createClient(supabaseUrl, supabaseKey)