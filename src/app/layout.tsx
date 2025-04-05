import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Readu",
  description: "Readu",
  icons: { icon: "/vercel.svg" },
};

export const viewport: Viewport = { maximumScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`no-scrollbar overflow-x-clip antialiased`}>
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-[var(--background)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <div className="flex flex-row items-center">
                  <span className="text-xl font-semibold text-[var(--foreground)]">Readu </span>
                  <p className="ml-2 mt-0.5 inline rounded bg-[var(--foreground)] px-2 text-sm text-[var(--background)]">
                    BETA
                  </p>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/upload"
                  className="rounded-md bg-[var(--foreground)] px-4 py-2 text-[var(--background)] transition-colors hover:bg-gray-800"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-gray-100 bg-[var(--background)] py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="border-[var(--foreground)]">
              <p className="text-sm text-[var(--foreground)]">
                © {new Date().getFullYear()} Readu. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
