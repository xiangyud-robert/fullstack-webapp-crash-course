import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jkbzhcgilgmsfskekfdr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprYnpoY2dpbGdtc2Zza2VrZmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMjUxNTYsImV4cCI6MjA4OTkwMTE1Nn0.nXXNyNlX7f5EQjzJU1sRxMPbzfBe02P9jBmuOOXNON8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
