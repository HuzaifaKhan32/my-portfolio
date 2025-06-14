"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { motion, useMotionValue } from "framer-motion";

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const { top, left } = ref.current.getBoundingClientRect();
    posX.set(e.x - left);
    posY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Reveal initialY={50} delay={0.5}>
      <section
        ref={ref}
        id="Contact"
        className="group w-full max-w-[calc(100%-44px)] flex mx-auto items-center flex-col px-[33px] py-[27px] relative card z-30 gap-[54px] md:gap-[34px] mb-[67px] md:mb-[42px] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:justify-center md:w-full gap-5">
          <h2 className="font-semibold text-[22px] md:text-[38px] md:min-w-[462px] ">
            {"Want me on your team? Let's make it happen ✨"}
          </h2>
        </div>
        <div className="flex flex-col gap-5 justify-center md:items-end">
          <Link
            href={"/contact"}
            className="bg-primary flex gap-2.5 p-2.5 self-center md:self-start font-normal rounded text-lg md:text-xl/l items-center text-white"
          >
            {"Let's get in touch"}
            <img src="mail_icon.svg" alt="Mail Icon" />
          </Link>
        </div>
        <div className="flex gap-2 justify-center">
          <Link href={"www.github.com/HuzaifaKhan32"}>
            <Image
              src={"/github_logo.svg"}
              alt="github icon"
              width={14}
              height={17}
              className="dark:hidden"
            />
            <Image
              src={"/github_logo_dark.svg"}
              alt="github icon"
              width={17}
              height={17}
              className="hidden dark:block"
            />
          </Link>
          <Link href={"www.instagram.com/hzaifa_nadeem"}>
            <Image
              src={"/instagram_logo.svg"}
              alt="github icon"
              width={14}
              height={17}
              className="dark:hidden"
            />
            <Image
              src={"/instagram_logo_dark.svg"}
              alt="github icon"
              width={14}
              height={17}
              className="hidden dark:block"
            />
          </Link>
          <Link href={"www.linkedin.com/"}>
            <Image
              src={"/linked_logo.svg"}
              alt="github icon"
              width={14}
              height={17}
              className="dark:hidden"
            />
            <Image
              src={"/linked_logo.svg"}
              alt="github icon"
              width={14}
              height={17}
              className="hidden dark:block"
            />
          </Link>
        </div>
        <small>Copyright &copy; Huzaifa Nadeem 2025</small>
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-purple-700/100 to-transparent blur-3xl opacity-0 group-hover:opacity-100 rounded-full -z-10 transition duration-300"
          style={{ left: posX, top: posY, transform: "translate(-50%, -50%)" }}
        ></motion.div>
      </section>
    </Reveal>
  );
}

export default Contact;
