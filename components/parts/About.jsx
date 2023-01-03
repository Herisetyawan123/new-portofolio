import { Container } from "@chakra-ui/react"
import Image from "next/image"


import Me from "../../assets/me/Me.png"

export default function About(){
  return (
    <Container maxW='6xl' px={10} py={10}>
      <div className="flex flex-col md:flex-row items-center gap-y-16 md:gap-y-0 md:gap-x-20">
      <div>
        <div className="w-72 h-72 bg-white rounded-full relative">
          <Image src={Me} className="absolute top-4 w-72 h-72 object-contain" alt="Heri Setyawan" />
        </div>
      </div>
      <div className="w-full font-light">
        <span className="bg-[var(--purple-10)] px-3 py-3 rounded-xl text-[var(--purple)] font-bold">
          👋 Selamat datang !
        </span>
        <h1 className="font-extrabold text-2xl mt-5">
          Heri Setyawan
        </h1>
        <p className="mt-5">
          Berikut daftar singkat mengenai diri saya: 
        </p>
        <ul className="mt-4 space-y-2 text-sm sm:text-base">
          <li>
            👋 Nama saya Heri Setyawan, tapi bisa dipanggil Heri / Wawan
          </li>
          <li>
            👨‍💻 for 2 years I became a freelancer programming
          </li>
          <li>
            🎓 Currently Studying at the University of Jember
          </li>
          <li>
            💡 Interested in Front-end development are React and Flutter.
          </li>
          <li>
            💡 Interested in Back-end development are Node js, golang and laravel.
          </li>
          <li>
            💡 Interested in Fullstack development with Node js, laravel and next js.
          </li>
          <li>
            🚀 Improve yourself more and learn more.
          </li>
        </ul>
      </div>
      </div>
    </Container>
  )
}