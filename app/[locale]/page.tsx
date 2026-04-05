"use client";
import { LanguageSwitcher } from "@/components/lang-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInPage } from "@/components/sign-in-flow-1";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="">
      <SignInPage />
    </div>
  );
}
