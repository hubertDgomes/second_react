import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Header from "../layouts/Header";
import Photo from "../../mainPh.png"
import Buttons from "../Buttons";
const Home = () => {
  return (
    <>
      <Container className={"py-[40px]"}>
        <Flex className={"justify-between"}>
          <div className="w-[521px]">
            <p className="text-[19px] font-bold font-menuF text-btnCL">Hubert Dhrubo Gomes</p>
            <h1 className="text-[60px] font-bold leading-[78px]">Hello, my name’s Hubert Gomes. I’m MERN Stack Developer.</h1>
          </div>
          <div className="w-[588px]">
            <Images imgSrc={Photo}/>
          </div>
        </Flex>
          
          <Flex className={"gap-x-[40px]"}>
            <Buttons btnText={"Contact Me"}/>
            <p className="text-[18px] cursor-pointer font-menuF font-medium">Download CV</p>
          </Flex>
      </Container>
    </>
  );
};

export default Home;
