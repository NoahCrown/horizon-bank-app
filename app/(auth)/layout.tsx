import Image from "next/image";
import AuthImage from '@/public/icons/auth-image.svg'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter ">
          {children}
          <div className="auth-asset">
            <div>
              <Image
              src={AuthImage}
              alt="auth image"
              width={500}
              height={500}
              />

            </div>

          </div>
      </main>
    );
  }
  