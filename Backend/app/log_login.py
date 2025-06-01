# log_login.py

from supabase_client import supabase

log_entry = {
    "Login_ID": "user123",
    "email": "user123@example.com",
    "password": "tempPass456"
}

response = supabase.table("login_data").insert(log_entry).execute()
print(response)
