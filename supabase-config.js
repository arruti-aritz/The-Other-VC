/* =============================================
   Supabase configuration
   Replace with your actual project credentials:
   Dashboard → Project Settings → API
   ============================================= */
const SUPABASE_URL     = 'https://blnixshwbsibcozqjlqy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__JSC2XIJeocRQRUQHXUy-A_k4cnj2IF';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
