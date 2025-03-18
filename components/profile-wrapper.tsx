"use client";
import { createClient } from "@/app/utils/supabase/client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const ProfileContext = createContext<{
  profile: { id: string; email: string; phone: string };
  loading: boolean;
  error: Error | null;
}>({
  profile: { id: "", email: "", phone: "" },
  loading: true,
  error: null,
});

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profile, setProfile] = useState<{
    id: string;
    email: string;
    phone: string;
  }>({ id: "", email: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("admin_profile")
          .select("*")
          .neq("name", "Admin")
          .single(); // Use single() to ensure only one row

        if (error) throw error;
        setProfile(data);
      } catch (err) {
        setError(err as Error);
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [supabase]);

  return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Usage in your component
const ProfileWrapper = ({ children }: { children: React.ReactElement }) => {
  return <ProfileProvider>{children}</ProfileProvider>;
};

export default ProfileWrapper;
