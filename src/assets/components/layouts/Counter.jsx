import React from 'react'
import Container from '../Container';
import Flex from '../Flex';

const Counter = () => {
    let counterUP = document.getElementsByClassName("counterUP")
    let arr = Array.from(counterUP)

    arr.map((items)=>{
      let count = 0

      function counter(){
        count++;
        items.innerHTML = count
        if(count == items.dataset.number){
          clearInterval(stop)
        }
      }
      let stop = setInterval(()=>{
        counter()
      },1000/items.dataset.number)
    })
  return (
    <>
    <Container className={"py-[50px]"}>
      <Flex className={"justify-between"}>
        <div className="text-center">
          <p className='counterUP text-[48px] font-bold' data-number="100">100</p>
          <p className='font-medium text-[16px]'>PROJECTS</p>
        </div>
        <div className="text-center">
          <p className='counterUP text-[48px] font-bold' data-number="24">24</p>
          <p className='font-medium text-[16px]'>WINNING AWARD</p>
        </div>
        <div className="text-center">
          <p className='counterUP text-[48px] font-bold' data-number="70">70</p>
          <p className='font-medium text-[16px]'>HAPPY CLIENTS</p>
        </div>
        <div className="text-center">
          <p className='counterUP text-[48px] font-bold' data-number="10">10</p>
          <p className='font-medium text-[16px]'>YEAR EXPERIENCE</p>
        </div>
      </Flex>
    </Container>
    </>
  );
}

export default Counter