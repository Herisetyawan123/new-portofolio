import { Container } from "@chakra-ui/react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { DownloadIcon, ChatIcon } from "@chakra-ui/icons"

import Link from "next/link";
import Image from "next/image";

import LinkedIn from "../../assets/social/linkedin.png"
import Github from "../../assets/social/github.png"
import Instagram from "../../assets/social/Vector.png"

import Elipse from "../../assets/icon/Ellipse.png"
import AvatarMe from "../../assets/me/Avatar-Me.png"
import Golang from "../../assets/icon/golang.png"
import TypeScript from "../../assets/icon/typescript.png"
import ReactI from "../../assets/icon/reacti.png"

export default function Profile(){
  return (
    <Container maxW='6xl' className="mt-24 sm:mt-40 px-10">
      <Flex className="flex-col-reverse sm:flex-row gap-y-20 justify-between items-center">
        <Box className={'w-full'}>
          <span className="bg-[var(--purple-10)] px-3 py-1 rounded-xl text-[var(--purple)]">
            ๐ Selamat datang !
          </span>
          <h1 className="font-extrabold text-3xl md:text-6xl mt-7 w-96">Heri Setyawan</h1>
          <p className="mt-4 text-xl opacity-50">Fullstack developer ยท Back-end Engineering</p>
          <HStack className="mt-7" spacing={"30px"}>
            <Link href={"https://www.linkedin.com/in/heri-setyawan-905758202/"}>
              <Image src={LinkedIn} alt="Linked In | Heri Setyawan" />
            </Link>
            <Link href={"https://github.com/herisetyawan123"}>
              <Image src={Github} alt="Linked In | Heri Setyawan" />
            </Link>
            <Link href={"https://instagram.com/herisetyawan233"}>
              <Image src={Instagram} alt="Linked In | Heri Setyawan" />
            </Link>
          </HStack>
          <Box className="mt-10 sm:hidden flex gap-x-5 items-center flex-wrap">
            <Link href={"/"} className="bg-transparent text-[var(--purple)]" bg="transparent">
              <span className="px-4 py-2 rounded-lg 
               flex items-center gap-x-2 hover:text-[var(--dark)] hover:bg-[var(--purple)] duration-500">
                Download
                <DownloadIcon boxSize={4} />
              </span>
            </Link>
            <Link href={"https://wa.me/6283853797950?text=Assalamualaikum wr. wb"} className="bg-transparent text-[var(--purple)]" bg="transparent">
              <span className="px-4 py-2 border border-[var(--purple)] rounded-lg flex items-center gap-x-2 hover:text-[var(--dark)] hover:bg-[var(--purple)] duration-500">
                <ChatIcon boxSize={4} />
                Whatsapp Me
              </span>
            </Link>
          </Box>
        </Box>
        <div className="flex justify-center items-center w-full">
          <div className="relative flex justify-center">
            <Image src={Elipse} className="transition-all w-full duration-1000 animate-pulse" alt="purple elipse" />
            <Image src={AvatarMe} className="absolute top-16 w-60 md:w-96" alt="purple elipse" />
            <Image src={Golang} className="w-32 lg:h-32 absolute transition-all duration-1000 animate-bounce bottom-0 -left-10 sm:bottom-5 md:left-5 md:bottom-10" alt="Golang Language" />
            <Image src={TypeScript} className="w-32 lg:h-32 absolute transition-all duration-1000 animate-pulse animatite-pulse top-10 right-5" alt="TypeScript Language" />
            <Image src={ReactI} className="w-32 lg:h-32 absolute transition-all duration-100 animate-spin animatite-pulse top-3 -left-5 md:left-10 md:top-10" alt="React Language" />
          </div>
          <Box className="hidden md:flex items-center flex-col">
            <Link href={"/"} className="bg-transparent text-[var(--purple)]" bg="transparent">
              <span className="px-4 py-2 rounded-lg font-bold flex items-center gap-x-2  hover:text-[var(--dark)] hover:bg-[var(--purple)] duration-500">
                Download
                <DownloadIcon boxSize={4} />
              </span>
            </Link>
            <Link href={"https://wa.me/6283853797950?text=Assalamualaikum wr. wb"} className="bg-transparent text-[var(--purple)]" bg="transparent">
              <span className="px-4 py-2 border border-[var(--purple)] rounded-2xl mt-5 font-bold flex items-center gap-x-2 hover:text-[var(--dark)] hover:bg-[var(--purple)] duration-500">
                <ChatIcon boxSize={4} />
                Whatsapp Me
              </span>
            </Link>
          </Box>
        </div>
      </Flex>
    </Container>
  )
}