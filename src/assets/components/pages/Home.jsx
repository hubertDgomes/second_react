import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Header from "../layouts/Header";
import Photo from "../../mainPh.png"
const Home = () => {
  return (
    <>
      <Container>
        <Flex className={"py-[80px] justify-between"}>
          <div className="w-[521px]">
            <p className="text-[19px] font-bold font-menuF text-btnCL">Hubert Dhrubo Gomes</p>
            <h1 className="text-[60px] font-bold leading-[78px]">Hello, my name’s Hubert Gomes. I’m MERN Stack Developer.</h1>
          </div>
          <div className="w-[588px]">
            <Images imgSrc={Photo}/>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
