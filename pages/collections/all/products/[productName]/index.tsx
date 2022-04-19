import classes from './productDetailsPage.module.scss';
import { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';
import { SizeGuide } from '../../../../../components';

const ProductDetailsPage = (props: any) => {
    const data = JSON.parse(props.router.query.data)
    const { Title } = Typography;
    const [name, price, images, description, moreDetails] = [data.name,data.price, data.images, data.description, data.moreDetails ];
    const [selectedSize, setSelectedSize] = useState('M');

    const sizes = ['XS','S','M','L','XL']

    const handleSizeClick = (e:any) => {
        let size = e.target.innerText;
        setSelectedSize(size);
    }

    return (
        <Row className={classes.container}>
            <Col
                lg={{ span: 16 }}
                className={classes.imageGroup}
            >
                <Image.PreviewGroup>
                    {images.map((image :string,index:number) => <Image width={ images.length < 3 ? 400 : 250} src={image} />)}
                </Image.PreviewGroup>
            </Col>
            <Col
                lg={{ span: 8 }}
            >
                <Title level={2}>{name}</Title>
                <Title level={3} className={classes.price}>${price}.00 USD</Title>
                <Row>
                    <Col 
                    className={classes.sizeBtnGroup}
                    lg={{span:8 }}
                    >
                        {sizes.map((size,index) => 
                            <button 
                                className={selectedSize === size ? `${classes.sizeBtn} ${classes.sizeActive}` : `${classes.sizeBtn}` } 
                                onClick={(e) => handleSizeClick(e)}
                            >
                                {size}
                            </button>
                        )}
                    </Col>
                </Row>
                <div className={classes.sizeGuideContainer}>
                    <SizeGuide />
                </div>
                <button className={classes.addBagBtn}> ADD TO BAG </button>
                <div className={classes.detailsContainer}>
                    <span className={classes.description}>{description}</span>
                    <ul className={classes.moreDetails}>
                        {moreDetails?.map((detail:string) => 
                            <li>
                                <span className={classes.moreDetailsText}>
                                    {detail}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsPage;
