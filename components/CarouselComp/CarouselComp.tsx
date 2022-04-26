import classes from './CarouselComp.module.scss';
import { Carousel } from 'antd';
import Image from 'next/image';


interface CarouselCompProps {
    handleViewAll: any;
}

const CarouselComp = ({handleViewAll}:CarouselCompProps) => {
    return (
        <Carousel autoplay className={classes.carousel}>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <Image className={classes.carouselImg} src="carousel/image1.webp" alt="carousel image 1"/>
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <Image className={classes.carouselImg} src="carousel/image2.webp" alt="carousel image 2"/>
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <Image className={classes.carouselImg} src="carousel/image3.webp" alt="carousel image 3"/>
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <Image className={classes.carouselImg} src="carousel/image4.webp" alt="carousel image 4"/>
            </div>
        </Carousel>
    )
}

export default CarouselComp;
