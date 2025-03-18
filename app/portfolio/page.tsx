import React from "react";
import Portfolio from "./portfolio";
import { createClient } from "../utils/supabase/server";

const page = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from("categories").select("*");

  return <Portfolio categories={data || []} />;
};

export default page;
