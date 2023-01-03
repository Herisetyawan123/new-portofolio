import { Container, Box } from "@chakra-ui/react"
import Code from "../../assets/icon/svg/Code.jsx"
import DesignIcon from "../../assets/icon/svg/DesignIcon"
import ProjectsIcon from "../../assets/icon/svg/ProjectsIcon"

import styled from "styled-components"

const BoxIcon = styled.div`
  position: relative;
  &:after {
    content: '';
    background: var(--purple-10);
    min-width: 40px;
    min-height: 40px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -10;
  }
`;


export default function MoreSection(){
  return (
    <Container maxW='full' px={''} className="px-5 md:px-60 py-24 mt-0 md:mt-40 border-collapse sm:border-t sm:border-b border-[var(--purple-10)]">
    <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-5 justify-center ">
      <Box px={20} py={30} className="flex-1 cursor-pointer border border-[var(--purple)] rounded-2xl text-center flex flex-col justify-center items-center order-1">
        <BoxIcon>
          <Code />
        </BoxIcon>
        <div className="mt-5">
          <h4 className="font-light">Design Database</h4>
          <h2 className="font-bold text-xl">Backend</h2>
        </div>
      </Box>
      <Box px={20} py={30} className="flex-1 cursor-pointer border border-[var(--purple)] rounded-2xl text-center flex flex-col justify-center items-center order-3 md:order-2 bg-[var(--purple-5)]">
        <div>
          <ProjectsIcon />
        </div>
        <div className="mt-5">
          <h4 className="font-light">work as team or individual</h4>
          <h2 className="font-bold text-xl">Problem Solving</h2>
        </div>
      </Box>
      <Box px={20} py={30} className="flex-1 cursor-pointer border border-[var(--purple)] rounded-2xl text-center flex flex-col justify-center items-center order-2 md:order-3">
        <div>
          <DesignIcon />
        </div>
        <div className="mt-5">
          <h4 className="font-light">Slicing Design</h4>
          <h2 className="font-bold text-xl">Frontend</h2>
        </div>
      </Box>
    </div>

    <Box background={"var(--purple-5)"} color={"var(--purple)"} className="mt-5 rounded-xl px-5 py-7 lg:flex hidden">
      <div className="flex-1 text-center">
        <h2 className="font-bold text-2xl">Frontend</h2>
      </div>
      <div className="flex-1 text-center">
        <p>getting projects</p>
        <h2 className="font-bold text-2xl">Experience</h2>
      </div>
      <div className="flex-1 text-center">
        <p>Developer</p>
        <h2 className="font-bold text-2xl">Mobile Apps</h2>
      </div>
    </Box>

    </Container>
  )
}