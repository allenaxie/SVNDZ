import classes from "./CarouselComp.module.scss";
import { Carousel, Image } from "antd";

interface CarouselCompProps {
  handleViewAll: () => void;
}

const CarouselComp = ({ handleViewAll }: CarouselCompProps) => {
  const carouselImages = [
    "/carousel/image1.webp",
    "/carousel/image2.webp",
    "/carousel/image3.webp",
    "/carousel/image4.webp",
  ];

  return (
    <Carousel autoplay className={classes.carousel}>
      {carouselImages.map((item, index) => (
        <div className={classes.carouselItem} onClick={handleViewAll} key={index}>
          <Image
            className={classes.carouselImg}
            preview={false}
            src={item}
            alt={`carousel image ${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComp;
