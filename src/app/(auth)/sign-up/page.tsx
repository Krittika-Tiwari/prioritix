import { getCurrent } from "@/features/auth/actions";
import { SignUPCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUPCard />;
};

export default SignUpPage;
