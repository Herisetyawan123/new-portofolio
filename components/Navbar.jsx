import Image from "next/image";
import Logo from "../assets/me/Logo.png"
import { Flex, HStack, Spacer } from "@chakra-ui/react";
// import Link from "next/link";
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar(){
  return (
    <Flex as="nav" className="navbar text-white py-3 px-9 fixed mx-4 lg:mx-36 top-4 lg:top-9 right-0 left-0 rounded-2xl z-50">
      <Link href={"/"}>
        <Image src={Logo} alt="Heri Setyawan" height={30} />
      </Link>
      <Spacer />
      <div className="lg:flex gap-x-10 hidden" >
        <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >
          <span className="cursor-pointer font-extrabold text-[var(--purple)] hover:text-violet-400 duration-500">Home</span>
        </Link>

        <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >
          <span className="cursor-pointer text-[var(--white)] hover:text-violet-400 duration-500">About Me</span>
        </Link>

        <Link activeClass="active" className="portofolio" to="portofolio" spy={true} smooth={true} duration={500}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Portofolio</span>
        </Link>
        <Link activeClass="active" className="skill" to="skill" spy={true} smooth={true} duration={500}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Skill</span>
        </Link>
        <Link activeClass="active" className="experience" to="experience" spy={true} smooth={true} duration={500}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Experience</span>
        </Link>
        <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500}>
          <span className="text-[var(--white)] hover:text-violet-400 duration-500">Contact</span>
        </Link>
      </div>
    </Flex>
  )
}