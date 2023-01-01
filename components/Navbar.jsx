import Image from "next/image";
import Logo from "../assets/me/Logo.png"
import { Flex, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";


export default function Navbar(){
  return (
    <Flex as="nav" className="navbar text-white py-3 px-9 fixed mx-4 lg:mx-36 top-4 lg:top-9 right-0 left-0 rounded-2xl">
      <Link href={"/"}>
        <Image src={Logo} alt="Heri Setyawan" height={30} />
      </Link>
      <Spacer />
      <div className="lg:flex gap-x-10 hidden" >
        <Link href={"#"} >
          <span className="font-extrabold text-[var(--purple)] hover:text-violet-400 duration-500">Home</span>
        </Link>
        <Link href={"#"}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">About Me</span>
        </Link>
        <Link href={"#"}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Portofolio</span>
        </Link>
        <Link href={"#"}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Skill</span>
        </Link>
        <Link href={"#"}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Experience</span>
        </Link>
        <Link href={"#"}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Contact</span>
        </Link>
      </div>
    </Flex>
  )
}