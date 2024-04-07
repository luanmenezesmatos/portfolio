"use client";

import Image from "next/image";

import React, { useRef, useState } from "react";

import { AnimatePresence, motion, useScroll, inView } from "framer-motion";

import { UploadCloud } from "lucide-react";

export function Navbar() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  return (
    <>
      <motion.div
        ref={ref}
        className="fixed top-11 flex z-20 justify-center w-full"
        style={{ opacity: scrollYProgress }}
      >
        <div className="bg-[#161616] border p-2 rounded-lg border-neutral-800 flex justify-between items-center w-[640px]">
          <Image
            width={800}
            height={800}
            className="w-9 h-9  rounded-md object-cover"
            src="/images/img7.jpg"
            alt=""
          />
          <h1 className="text-white font-medium">Luan Menezes</h1>
          <button className="w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center">
            <UploadCloud className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </>
  );
}
