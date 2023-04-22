import Image from "next/image";
import picture from "public/picture.jpg";

const Index = () => {
  return <Image src={picture} alt="picture" placeholder="blur" />;
};

export default Index;
