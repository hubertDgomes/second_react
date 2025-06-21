import React from 'react'
import Container from '../Container'
import Buttons from '../Buttons'

const GFXDeg = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <h1 className="text-[19px] font-medium text-btnCL mb-[12px]">GRAPHIC DESIGNER</h1>
        <div className="w-[482px]">
            <h1 className="text-[60px] font-bold leading-[78px]">Graphic Designer With 10 Years Of Experience.</h1>
        </div>
        <div className="w-[584px]">
            <h1 className="text-[20px] leading-[32px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</h1>
        </div>
        <Buttons className={"mt-[20px]"} btnText={"CONTACT ME"}/>
    </Container>
    </>
  )
}

export default GFXDeg
