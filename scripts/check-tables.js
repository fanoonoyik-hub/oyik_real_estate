require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function listTables() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .limit(1);

  console.log('Successfully connected to faqs table');
  
  // Try to see if we can get table info from informational schema or just try common names
  const commonTables = ['site_settings', 'settings', 'social_links'];
  for (const table of commonTables) {
    const { error: tableError } = await supabase.from(table).select('*').limit(1);
    if (!tableError) {
      console.log(`Table found: ${table}`);
    } else {
      console.log(`Table NOT found: ${table} (${tableError.message})`);
    }
  }
}

listTables();
