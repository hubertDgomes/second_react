import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import porto from '../../portoL.png'
import fb from '../../fb.png'
import ig from '../../ig.png'
import link from '../../link.png'
import Menu from '../Menu'
const Footer = () => {
  return (
    <>
    <Container className={"py-[66px] px-[150px] bg-kala mt-[60px] rounded-t-[30px]"}>
        <Flex className={"justify-between"}>
            <div className="w-[330px]">
                <Images className={"mb-[20px]"} imgSrc={porto}/>
                <p className='text-[16px] text-white leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit.</p>
            </div>
            <div className="">
                <p className='text-white text-[19px] mb-[20px]'>gomeshubert8@gmail.com</p>
                <p className='text-white text-[19px]'>+8801707014275</p>
                <Flex className={"justify-between mt-[30px]"}>
                    <Images imgSrc={fb}/>
                    <Images imgSrc={ig}/>
                    <Images imgSrc={link}/>
                </Flex>
            </div>
        </Flex>
        <Menu>
            <Flex className={"justify-between"}>
               
            <Flex className={"gap-x-[20px] mt-[60px]"}>
                <li className={"text-white hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Home</li>
                <li className={"text-white hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>About Us</li>
                <li className={"text-white hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Service</li>
                <li className={"text-white hover:font-bold hover:text-[20px] transition-all duration-700 hover:bg-btnCL hover:rounded-2xl hover:px-[20px] hover:text-white"}>Works</li>
            </Flex>

            <p className='mt-[50px] text-white'>© All Right Reserved</p>
            </Flex>
        </Menu>
    </Container>
    </>
  )
}

export default Footer
