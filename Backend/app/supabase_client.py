# supabase_client.py

from supabase import create_client, Client

# Replace with your real Supabase project details
SUPABASE_URL = "https://vwcsielykhnvizfwrfla.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3Y3NpZWx5a2hudml6ZndyZmxhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Nzc1OTc2OSwiZXhwIjoyMDYzMzM1NzY5fQ.ljsiFQZOjKwqx9uRgvj80HVAQTyYmwlCwGlFyZ4oK5Y"  # NEVER use this in frontend code

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
