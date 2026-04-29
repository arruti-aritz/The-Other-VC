/* =============================================
   Supabase configuration
   Replace with your actual project credentials:
   Dashboard → Project Settings → API
   ============================================= */
const SUPABASE_URL     = 'https://awpuwcukovaczzfpmmfs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_GDxfgZffdtH1S4QDYQyoAg_nkpssveC';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
