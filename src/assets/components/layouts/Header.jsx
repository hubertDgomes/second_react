import React, { Children } from "react";
import Container from "../Container";
import Home from "../pages/Home";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "../LOGO.png"
import Menu from "../Menu";
import Buttons from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "motion/react"
const Header = () => {
  
  return (
    <>
    <motion.div 
    style={{
      scaleX: useScroll().scrollYProgress
    }}
    className="h-[20px] w-full origin-left bg-amber-800 fixed z-[9999999999]  "></motion.div>
      <section>
        <Container className="py-[70px]">
          <Flex className={'justify-between'}>

            <div className="">
              <Images className={"w-[170px] cursor-pointer"} imgSrc={Logo} imgAlt={"Logo.png"}/>
            </div>

            <div className="">
              <Menu className={"hidden sm:flex gap-x-[50px]"}>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-400 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Home</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-400 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>About Us</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-400 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Service</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-400 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Works</li>
              </Menu>
            </div>

            <div className="sm:hidden">
                <button className="navBtn"><FontAwesomeIcon className="text-[30px] cursor-pointer" icon={faBars}/></button>
            </div>
            
            <div className="hidden sm:block">
              <Buttons btnText={"Hire Me"}/>
            </div>

          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
