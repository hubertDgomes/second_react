import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import rate from "../../Rating.png";
import gol from "../../gol.png";
import msg from '../../msg.png'
const Testimony = () => {
  return (
    <>
      <Container className={"py-[70px]"}>
        <div className="text-center">
          <p className="text-[20px] font-medium text-btnCL">TESTIMONY</p>
          <p className="font-semibold text-[44px]">What Our Clients Say.</p>
          <div className="w-[600px] m-auto">
            <p className="text-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </p>
          </div>
        </div>

        <Flex className={"justify-between mt-[30px]"}>
          <div className="py-[42px] px-[53px] bg-white shadow-xl/20 w-[584px] rounded-[50px] scale-95 hover:scale-100 transition-all duration-1000 custom-comm">
            <Images imgSrc={rate} />
            <p className="mt-[30px] text-[18px] font-medium">
              Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
              Vestibulum nisl lorem, porta at mollis varius, tincidunt in
              lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
            </p>
            <Flex className={"gap-x-[14px] justify-between mt-[30px] "}>
              <div className="">
                <Images imgSrc={gol} />
                <div className="">
                  <p className="text-[18px] font-bold">David Gueta</p>
                  <p className="text-[16px]">UI/UX Designer</p>
                </div>
              </div>

              <div className="">
                <Images imgSrc={msg}/>
              </div>
            </Flex>
          </div>



          <div className="py-[42px] px-[53px] bg-white shadow-xl/20 w-[584px] rounded-[50px] scale-95 hover:scale-100 transition-all duration-1000 custom-comm">
            <Images imgSrc={rate} />
            <p className="mt-[30px] text-[18px] font-medium">
              Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
              Vestibulum nisl lorem, porta at mollis varius, tincidunt in
              lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
            </p>
            <Flex className={"gap-x-[14px] justify-between mt-[30px] "}>
              <div className="">
                <Images imgSrc={gol} />
                <div className="">
                  <p className="text-[18px] font-bold">David Gueta</p>
                  <p className="text-[16px]">UI/UX Designer</p>
                </div>
              </div>

              <div className="">
                <Images imgSrc={msg}/>
              </div>
            </Flex>
          </div>
          <div className=""></div>
        </Flex>
      </Container>
    </>
  );
};

export default Testimony;
