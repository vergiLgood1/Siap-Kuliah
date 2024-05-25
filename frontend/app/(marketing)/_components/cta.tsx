"use client";

import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

const Cta = () => {
  const words = ["pelajar", "konselor", "mitra"];
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20 flex flex-col items-center gap-6 md:gap-12 md:flex-row py-9 md:py-24">
        <div className=" w-full h-[230px] ">
          <Image
            width="500"
            height="500"
            src="https://img.freepik.com/free-photo/top-view-travel-map-airplane_23-2149617644.jpg?t=st=1716637303~exp=1716640903~hmac=53880923f8a543d7b91098f2236d0ce6680281be813f2e9120437612871d8bf3&w=1060"
            alt=""
            className="h-full w-full object-cover "
          />
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:py-4 md:gap-5 md:text-left md:items-start">
          <h2 className="text-xl font-extrabold leading-tight text-center whitespace-pre-line md:text-[1.75rem] md:text-left">
            <span className="text-[#7264EB]">
              2.350+ <FlipWords className="dark:text-[#7264EB]" words={words} /> <br />
            </span>{" "}
            di Indonesia menggunakan Gradient
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            Daftar untuk mengakses preview materi GRATIS
          </p>
          <a href="/daftar">
            <div className="font-bold cursor-pointer mt-3 md:mt-4 bg-accent-purple rounded-full text-white font-body py-2 px-6">
              Daftar Sekarang
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
