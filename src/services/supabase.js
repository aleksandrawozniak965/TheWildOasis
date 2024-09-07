import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iwlondsloulxrmqzjvqk.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3bG9uZHNsb3VseHJtcXpqdnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2Mjk4MjYsImV4cCI6MjA0MTIwNTgyNn0.69saLu5q_UHHWgxNW2bQKxOOMgjVl1WpAqZEmEoihkQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
