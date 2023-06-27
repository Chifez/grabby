import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
// import { SUPABASE_URL, ANON_KEY } from "react-native-dotenv";

const supabaseUrl = "https://fhcenomlwnutjswnbxao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoY2Vub21sd251dGpzd25ieGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4NTg3MTksImV4cCI6MjAwMzQzNDcxOX0.NeuVYqOmC4kHTpJrZvo1BCLN_lCLfRnVKtK_jix8vgg";
export const supabase = createClient(supabaseUrl, supabaseKey);
