import classes from './CarouselComp.module.scss';
import { Carousel } from 'antd';

interface CarouselCompProps {
    handleViewAll: any;
}

const CarouselComp = ({handleViewAll}:CarouselCompProps) => {
    return (
        <Carousel autoplay className={classes.carousel}>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <img className={classes.carouselImg} src="carousel/image1.webp" />
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <img className={classes.carouselImg} src="carousel/image2.webp" />
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <img className={classes.carouselImg} src="carousel/image3.webp" />
            </div>
            <div className={classes.carouselItem} onClick={handleViewAll}>
                <img className={classes.carouselImg} src="carousel/image4.webp" />
            </div>
        </Carousel>
    )
}

export default CarouselComp;
