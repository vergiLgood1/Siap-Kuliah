"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellIcon, CheckIcon } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function Pricing({ className, ...props }: CardProps) {
  return (
    <section
      id="pricing"
      className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20 space-y-6 py-9 md:py-24 scroll-mt-12"
    >
        <h2 className="mb-10 sm:mb-20 font-bold text-xl text-center sm:text-3xl dark:text-white text-black">
        Tertarik? <br/> Beli sekarang untuk mengakses seluruh materi
      </h2>
   
      <div className="items-center gap-4 justify-center flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
        <div className="relative w-full flex flex-col rounded-lg max-w-sm order-none bg-[#313131]">
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col text-center md:gap-1">
              <h4 className="font-extrabold text-white">Paket 1 Bulan</h4>
              <h5 className="text-4xl font-extrabold text-white">Rp&nbsp;125.000</h5>
              <h6 className="text-xl font-bold line-through decoration-2 text-stone-500 decoration-red-600 font-body">
                Rp&nbsp;300.000
              </h6>
            </div>
            <div className="flex flex-col h-full gap-2 px-5">
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Video</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Akses 500+ video belajar on-demand.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Latihan</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Bank soal tahun lalu &amp; pembahasannya.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Rangkuman</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Ringkasan materi beserta ilustrasi.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Komunitas</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Tanya pertanyaanmu sepuasnya
                  </p>
                </div>
              </div>
            </div>
            <button className="font-bold cursor-pointer mx-5 mb-5 bg-accent-purple rounded-full text-white font-body py-2 px-6">
              Akses Sekarang
            </button>
          </div>
        </div>
        <div className="relative w-full flex flex-col rounded-lg max-w-sm order-first border-purple-400 border-2  sm:order-none bg-gradient-pricing">
          <div className="w-full py-3 font-bold text-center rounded-t-lg animate-pulse bg-purple-400 ">
            PENAWARAN TERBAIK!
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col text-center md:gap-1">
              <h4 className="font-extrabold ">Paket 3 Bulan</h4>
              <h5 className="text-4xl font-extrabold font-body bg-clip-text bg-gradient-highlighted-price text-transparent">
                Rp&nbsp;375.000
              </h5>
              <h6 className="text-xl font-bold line-through decoration-2 text-stone-500 decoration-red-600 font-body">
                Rp&nbsp;900.000
              </h6>
            </div>
            <div className="flex flex-col h-full gap-2 px-5">
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold">Video</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Akses 500+ video belajar on-demand.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold">Latihan</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Bank soal tahun lalu &amp; pembahasannya.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold">Rangkuman</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Ringkasan materi beserta ilustrasi.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold">Komunitas</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Tanya pertanyaanmu sepuasnya
                  </p>
                </div>
              </div>
            </div>
            <button className="font-bold cursor-pointer mx-5 mb-5 bg-accent-purple rounded-full text-white font-body py-2 px-6">
              Akses Sekarang
            </button>
          </div>
        </div>
        <div className="relative w-full flex flex-col rounded-lg max-w-sm order-none bg-[#313131]">
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col text-center md:gap-1">
              <h4 className="font-extrabold text-white">Paket 6 Bulan</h4>
              <h5 className="text-4xl font-extrabold font-body text-white">Rp&nbsp;750.000</h5>
              <h6 className="text-xl font-bold line-through decoration-2 text-stone-500 decoration-red-600 font-body">
                Rp&nbsp;1.800.000
              </h6>
            </div>
            <div className="flex flex-col h-full gap-2 px-5">
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Video</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Akses 500+ video belajar on-demand.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Latihan</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Bank soal tahun lalu &amp; pembahasannya.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Rangkuman</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Ringkasan materi beserta ilustrasi.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="flex-none text-accent-purple"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-extrabold text-white">Komunitas</p>
                  <p className="text-xs text-neutral-400 font-body">
                    Tanya pertanyaanmu sepuasnya
                  </p>
                </div>
              </div>
            </div>
            <button className="font-bold cursor-pointer mx-5 mb-5 bg-accent-purple rounded-full text-white font-body py-2 px-6">
              Akses Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
