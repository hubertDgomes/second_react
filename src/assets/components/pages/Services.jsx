import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Frame from "../../Frame.png";
import Frame2 from '../../Frame2.png'
const Services = () => {
  return (
    <>
      <Container className={"py-[50px]"}>
        <div className="text-center m-auto">
          <h1 className="text-[19px] text-btnCL font-medium">SERVICES</h1>
          <h1 className="text-[44px] font-semibold">
            What I Do For My Customer.
          </h1>
          <div className="w-[600px] m-auto">
            <h1 className="text-[19px] font-menuF leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </h1>
          </div>
        </div>

        <Flex className={"justify-between gap-x-[40px] mt-[60px] inline sm:flex"}>
          <div className="py-[50px] px-[75px] rounded-2xl hover:shadow-xl/30 shadow-xl/20 cursor-pointer text-center">
            <Images className={"m-auto mb-[30px]"} imgSrc={Frame} />
            <h1 className="text-[20px] font-medium">UI/UX Design</h1>
            <div className="w-[307px] m-auto">
                <h1 className="text-[20px] mt-[20px]">lorem ipsum dolor sit amet consectur adi pising leo</h1>
            </div>
          </div>

          <div className="py-[50px] px-[75px] rounded-2xl hover:shadow-xl/30 shadow-xl/20 cursor-pointer text-center">
            <Images className={"m-auto mb-[30px]"} imgSrc={Frame2} />
            <h1 className="text-[20px] font-medium">Product Design</h1>
            <div className="w-[307px] m-auto">
                <h1 className="text-[20px] mt-[20px]">lorem ipsum dolor sit amet consectur adi pising leo</h1>
            </div>
          </div>

          <div className="py-[50px] px-[75px] rounded-2xl hover:shadow-xl/30 shadow-xl/20 cursor-pointer text-center">
            <Images className={"m-auto mb-[30px]"} imgSrc={Frame} />
            <h1 className="text-[20px] font-medium">Motion Graphics</h1>
            <div className="w-[307px] m-auto">
                <h1 className="text-[20px] mt-[20px]">lorem ipsum dolor sit amet consectur adi pising leo</h1>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Services;
