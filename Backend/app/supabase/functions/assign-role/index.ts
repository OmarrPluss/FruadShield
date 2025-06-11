/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Start Deno Edge Function
serve(async (req) => {
  try {
    const { email, id, full_name } = await req.json()

    // Detect role
    let role: 'admin' | 'analyst' | 'business_manager' | 'customer' | 'bank_staff' = 'customer'

    if (email === 'admin@fraudsheild.com') role = 'admin'
    else if (email.endsWith('@cibeg.com') || email.endsWith('@banquemisr.com') || email.endsWith('@qnb.com') ) role = 'bank_staff'
    else if (email.endsWith('@facility.org')) role = 'business_manager'

    // Supabase Edge client
    const supabase = createClient(
      Deno.env.get('https://vwcsielykhnvizfwrfla.supabase.co')!,
      Deno.env.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3Y3NpZWx5a2hudml6ZndyZmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTk3NjksImV4cCI6MjA2MzMzNTc2OX0.5W0EomaLXKsCgxk4h8TLhbJa46yfPGIUS5tKFFLG7j0')!
    )

    const { error } = await supabase.from('users').insert({
      id,
      email,
      full_name,
      role,
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ message: "User inserted with role" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  return new Response(JSON.stringify({ error: "Invalid request", details: message }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  })
}

})
