"use server";
import { createClient } from "./utils/supabase/server";

export async function fetchImages(category?: string) {
  const supabase = await createClient();
  if (!category) {
    const { data: imageData } = await supabase.from("images").select("*");

    return imageData;
  }
  const { data: imageData, error } = await supabase
    .from("images")
    .select("*")
    .eq("category", category);

  if (error) return [];
  return imageData;
}
