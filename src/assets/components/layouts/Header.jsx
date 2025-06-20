import React, { Children } from "react";
import Container from "../Container";
import Home from "../pages/Home";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "../LOGO.png"
import Menu from "../Menu";
import Buttons from "../Buttons";
const Header = () => {
  return (
    <>
      <section>
        <Container className="py-[70px]">
          <Flex className={'justify-between'}>

            <div className="">
              <Images className={"w-[170px] cursor-pointer"} imgSrc={Logo} imgAlt={"Logo.png"}/>
            </div>

            <div className="">
              <Menu className={"flex gap-x-[50px]"}>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Home</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>About Us</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Service</li>
                <li className={"hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Works</li>
              </Menu>
            </div>


            <div className="">
              <Buttons btnText={"Hire Me"}/>
            </div>

          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
