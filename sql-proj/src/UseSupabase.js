import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qbzritnropyyoadjtbjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFienJpdG5yb3B5eW9hZGp0YmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNDIwMjYsImV4cCI6MjAwMTgxODAyNn0.brariYtDlqqCN6nJ1Ao8GCgrb8joq14KP4egjQWe6z4'

const supabase = createClient(supabaseUrl, supabaseKey);

export default function useSupabase() {
    return { supabase };
  }