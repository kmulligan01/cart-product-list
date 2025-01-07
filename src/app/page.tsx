import Image from "next/image";

import CardWrapper from "@/components/ui/CardWrapper";
import Sidebar from "@/components/ui/Sidebar";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-red-hat-text)] ">
      <section className="flex items-start justify-center lg:flex-nowrap flex-wrap">
        <div className="lg:w-9/12 w-full" >
          <h1 >Desserts</h1>
          <CardWrapper />
        </div>
        <div className="lg:w-3/12 grow-0 w-full">
          <Sidebar />
        </div>
      </section>
      <footer className=" flex gap-2 flex-wrap items-center justify-center flex-col mt-16 text-sm">
        <p >&copy; {new Date().getFullYear()} Built by <a href="">Kendra Mulligan.</a> </p>
        <p >Usage of materials and data from <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer">Frontend Mentor.</a></p>
      </footer>
    </main>
  );
}
