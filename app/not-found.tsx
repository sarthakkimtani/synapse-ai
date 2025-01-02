import Link from "next/link";

import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "404: Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center">
        <div className="text-center px-4 py-6 md:py-0">
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-primary">404</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto mb-8">
            The page you&apos;re looking for seems to have vanished into thin air!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 text-lg font-medium text-black rounded-full transition duration-100 ease-linear bg-primary hover:hover:bg-yellow-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
