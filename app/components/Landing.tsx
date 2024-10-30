import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-zinc-950 rounded-t-[50%]" />
      <nav className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">TokenWave.</span>
              </Link>
            </div>
            <div className="hidden md:block"></div>
            <div>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent border-zinc-700 text-white  hover:bg-white hover:text-black"
              >
                <span className="">Select Wallet</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <div className="flex justify-center mb-8"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Create . Manage . Trade
            <span className="block mt-2">Your Digital Assets Seamlessly</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-zinc-400">
            Your all-in-one platform for minting, managing, and customizing
            tokens, NFTs, and collections.
          </p>
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
