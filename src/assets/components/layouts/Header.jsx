import React from "react";
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
              <Images imgSrc={Logo} imgAlt={"Logo.png"}/>
            </div>

            <div className="">
              <Menu className={"flex gap-x-[40px]"}>
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>Works</li>
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
