import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // New cookie handling methods
        getAll() {
          return cookieStore.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          }));
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, ...options }) => {
            try {
              cookieStore.set({ name, value, ...options });
            } catch (error) {
              console.log("error: ", error);
              // Handle error if needed
            }
          });
        },
      },
    }
  );
}
