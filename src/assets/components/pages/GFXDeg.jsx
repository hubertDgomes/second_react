import React from 'react'
import Container from '../Container'
import Buttons from '../Buttons'
import Images from '../Images'
import Slide from "../../section.png"
const GFXDeg = () => {
  return (
    <>
      <Container className={"py-[60px]"}>
        <h1 className="text-[19px] font-medium text-btnCL mb-[12px] text-center sm:text-left">GRAPHIC DESIGNER</h1>
        <div className="w-[482px]">
          <h1 className="text-[60px] font-bold leading-[78px] text-center sm:text-left">Graphic Designer With 10 Years Of Experience.</h1>
        </div>
        <div className="text-center sm:text-left sm:w-[584px]">
          <h1 className="text-[20px] leading-[32px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</h1>
        </div>
        <div className="flex justify-center sm:justify-start mt-[20px]">
          <Buttons btnText={"CONTACT ME"} />
        </div>
        <Images className={"mt-[100px] m-auto"} imgSrc={Slide} />
      </Container>
    </>
  )
}

export default GFXDeg
