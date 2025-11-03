import { createClient } from '@supabase/supabase-js'

const connectionString = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(connectionString, supabaseKey)

export default supabase;