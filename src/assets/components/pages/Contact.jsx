import React from "react";
import Container from "../Container";
import Buttons from "../Buttons";

const Contact = () => {
  return (
    <>
      <Container className={"py-[100px] bg-blue-300 rounded-[40px]"}>
        <div className="text-center m-auto w-[606px]">
          <p className="font-semibold text-[50px] mb-[30px]">Interested Working With me? Let's connect!</p>
          <Buttons className={"custom-contact"} btnText={"CONTACT ME"}/>
        </div>
      </Container>
    </>
  );
};

export default Contact;
