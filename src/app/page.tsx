import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defumação de carnes, aves e suínos - Bira BBQ",
  description: "Defumação de carnes, aves e suínos - Bira BBQ",
};
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-smoke">
        <Image
          className="mx-auto"
          src="/img/logo.png"
          alt="Next.js logo"
          width={360}
          height={76}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">AGUARDE NOVIDADES DEFUMADAS!</h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
