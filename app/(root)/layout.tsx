
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect, useRouter } from "next/navigation";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logginIn = await getLoggedInUser();

  if(!logginIn) {
    redirect('/sign-in')
  }
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={logginIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={logginIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
