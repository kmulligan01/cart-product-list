import Image from "next/image";

import CardWrapper from "@/components/ui/CardWrapper";
import Sidebar from "@/components/ui/Sidebar";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-red-hat-text)] ">
      <section className="flex items-start justify-center">
        <div className="w-9/12" >
          <h1 >Desserts</h1>
          <CardWrapper />
        </div>
        <div className="w-3/12 grow-0">
          <Sidebar />
        </div>
      </section>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>

      </footer>
    </main>
  );
}
