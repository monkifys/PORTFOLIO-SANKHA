import { HomeClient } from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sankha-singhamahapatra.vercel.app/",
  },
};

export default function Home() {
  return <HomeClient />;
}
