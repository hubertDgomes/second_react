import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import creative from '../../cit.png'
import hubert from '../../hubertP.png'
import furino from '../../furino.png'
import tech from '../../techedge.png'
const Works = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <Flex className={"justify-between inline sm:flex"}>
            <div className="">
                <p className="text-[16px] font-medium text-btnCL text-center sm:text-left">PORTFOLIO</p>
                <p className="text-[44px] font-semibold text-center sm:text-left">Selected Works.</p>
            </div>
            <div className="sm:w-[557px] text-center sm:text-left">
                <p className='text-[19px] leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
            </div>
        </Flex>

        <Flex className={"mt-[40px] flex-wrap justify-around gap-y-[40px]"}>
            <div className="scale-95 hover:scale-100 transition-all duration-1000 custom-task">
                <div className="h-[360px] w-[583px] bg-blue-300 rounded-t-[30px] shadow-xl/20">
                    <Images imgSrc={creative}/>
                </div>
                <div className="">
                    <div className="py-[48px] px-[40px] bg-white rounded-b-[30px] shadow-xl/20">
                    <p className="text-[20px] font-medium">Creative IT</p>
                    <p className="text-[19px]">Home Page Design (Just Kidding)</p>
                    </div>
                </div>
            </div>


            <div className="scale-95 hover:scale-100 transition-all duration-1000 custom-task">
                <div className="h-[340px] w-[583px] bg-blue-300 rounded-t-[30px] shadow-xl/20">
                <Images imgSrc={hubert}/>
                </div>
                <div className="">
                    <div className="py-[48px] px-[40px] bg-white rounded-b-[30px] shadow-xl/20">
                    <p className="text-[20px] font-medium">Portfolio</p>
                    <p className="text-[19px]">With Tailwind</p></div>
                </div>
            </div>


            <div className="scale-95 hover:scale-100 transition-all duration-1000 custom-task">
                <div className="h-[340px] w-[583px] bg-blue-300 rounded-t-[30px] shadow-xl/20">
                    <Images imgSrc={furino}/>
                </div>
                <div className="">
                    <div className="py-[48px] px-[40px] bg-white rounded-b-[30px] shadow-xl/20">
                    <p className="text-[20px] font-medium">Furino</p>
                    <p className="text-[19px]">With vanila HTML and CSS</p></div>
                </div>
            </div>


            <div className="scale-95 hover:scale-100 transition-all duration-1000 custom-task">
                <div className="h-[310px] w-[583px] bg-blue-300 rounded-t-[30px] shadow-xl/20">
                <Images imgSrc={tech}/>
                </div>
                <div className="">
                    <div className="py-[48px] px-[40px] bg-white rounded-b-[30px] shadow-xl/20">
                    <p className="text-[20px] font-medium">TechEdge</p>
                    <p className="text-[19px]">With Bootstrap</p></div>
                </div>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Works
