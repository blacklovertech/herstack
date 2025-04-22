import { createClient } from '@supabase/supabase-js';

// Check if Supabase environment variables are present
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL or Anonymous Key is missing from the environment variables.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
