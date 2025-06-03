import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getToken() {
  // Try to sign in existing user
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "fantasticshoppingaddictx@gmail.com",
    password: "12345",
  });

  if (error) {
    console.error("Sign in failed, trying sign up:", error.message);
    // If sign-in fails, try sign up
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: "fantasticshoppingaddictx@gmail.com",
      password: "12345",
    });

    if (signUpError) {
      console.error("Sign up failed:", signUpError.message);
      return;
    }
    console.log("Sign up success. Please check your email to confirm.");
    return;
  }

  console.log("Access token:", data.session?.access_token);
}

getToken();
