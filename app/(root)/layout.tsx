import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Logo from '@/public/icons/logo.svg'
import MobileNavbar from "@/components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'John', lastName: 'Doe',}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
            src={Logo}
            width={30}
            height={30}
            alt="logo"
            />
            <div>
              <MobileNavbar user={loggedIn}/>
            </div>

          </div>
          {children}

        </div>
    </main>
  );
}
