/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    // Handle OPTIONS preflight CORS request
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization, Content-Type",
          "Access-Control-Allow-Credentials": "true",
        },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

    if (!supabaseUrl || !supabaseAnonKey) {
      return new Response(
        JSON.stringify({ error: "Supabase credentials missing" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Check Authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid Authorization header" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const token = authHeader.substring("Bearer ".length);

    // Verify token & get user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired token" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const email = user.email ?? "";
    const id = user.id;

    // Try to find user in Login_data table by email
    let { data: userData, error: findError } = await supabase
      .from("Login_data")
      .select("*")
      .eq("email", email)
      .single();

    if (findError && findError.code !== "PGRST116") {
      return new Response(
        JSON.stringify({ error: findError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // If user not found, insert them automatically
    if (!userData) {
      const { error: insertError } = await supabase
        .from("Login_data")
        .insert({
          Login_ID: id,
          email: email,
          role: "customer",
          password: null,
        });

      if (insertError) {
        return new Response(
          JSON.stringify({ error: insertError.message }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }

      const { data: newUser, error: newUserError } = await supabase
        .from("Login_data")
        .select("*")
        .eq("email", email)
        .single();

      if (newUserError || !newUser) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch newly created user" }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }
      userData = newUser;
    }

    const role = userData.role ?? "customer";

    // Set cookies based on role
    const headers = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    });

    // Main user_role cookie
    headers.append("Set-Cookie", `user_role=${role}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`);

    // Optional extra cookies
    if (role === "analyst") {
      headers.append("Set-Cookie", `is_analyst=true; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`);
    } else if (role === "business manager") {
      headers.append("Set-Cookie", `is_manager=true; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`);
    }

    return new Response(
      JSON.stringify({ message: "User authenticated", role }),
      { status: 200, headers },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: "Server error", details: message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});
