import { serve } from "https://deno.land/std/http/server.ts";

console.log("Starting test server on http://localhost:8000");
serve(() => new Response("Hello from Deno!"), { port: 8000 });
