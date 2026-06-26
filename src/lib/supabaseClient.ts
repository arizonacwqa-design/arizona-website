import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vdjhwmdzbjtiqhyrmai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkamh3bWR6Ymp0aXFoeXJtYWkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc3OTIwNjAxMCwiZXhwIjoyMDk0NzgyMDEwfQ.Xv-iATQ3g5FWlUclpE2QMw-aOqXyB-zwDm8dNT9l6tw",
);
