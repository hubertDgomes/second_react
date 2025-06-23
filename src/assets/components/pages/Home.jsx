import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Header from "../layouts/Header";
import Photo from "../../mainPh.png"
import Buttons from "../Buttons";
const Home = () => {
  return (
    <>
      <Container className={"py-[50px] custom-cursor"}>
        <Flex className={"justify-between"}>
          <div className="w-[521px]">
            <p className="text-[19px] font-bold font-menuF text-btnCL text-center sm:text-left">Hubert Dhrubo Gomes</p>
            <h1 className="text-[60px] font-bold leading-[78px] text-center sm:text-left">Hello, my name’s Hubert Gomes. I’m MERN Stack Developer.</h1>
          </div>
          <div className="w-[588px] hidden sm:block">
            <Images imgSrc={Photo}/>
          </div>
        </Flex>
          
          <Flex className={"gap-x-[40px] justify-center sm:justify-start mt-[40px] sm:mt-[0]"}>
            <Buttons className={"custom-contact"} btnText={"Contact Me"}/>
            <p className="text-[18px] rounded-2xl cursor-pointer font-medium hover:py-[19px] hover:px-[28px] hover:text-white hover:bg-btnCL hover:rounded-[50px] transition-all duration-500">Download CV</p>
          </Flex>
      </Container>
    </>
  );
};

export default Home;
