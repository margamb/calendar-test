import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jtzdiqdrkhylonwhhkah.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzEyMzQ3MywiZXhwIjoxOTMyNjk5NDczfQ.zZexenEmZqOR12kv_HHqk92H9Psh9XuYqJQ_fSRn7-A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
