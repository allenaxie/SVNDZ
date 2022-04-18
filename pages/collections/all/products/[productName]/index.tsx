import classes from './productDetailsPage.module.scss';
import { useState } from 'react';
import { Row, Col, Image, Typography } from 'antd';

interface ProductDetailsPageProps {
    collections: any,
}

const ProductDetailsPage = (props: any) => {
    console.log(props.router.query)
    const { Title } = Typography;
    const [name, price, image, image2, image3, image4, image5, image6] = [props.router.query.name, props.router.query.price, props.router.query.image, props.router.query.image2, props.router.query.image3, props.router.query.image4, props.router.query.image5, props.router.query.image6];
    const [selectedSize, setSelectedSize] = useState('M');

    const sizes = ['XS','S','M','L','XL']

    const handleSizeClick = (e:any) => {
        console.log(e.target.innerText);
        let size = e.target.innerText;
        setSelectedSize(size);
    }

    return (
        <Row className={classes.container}>
            <Col
                lg={{ span: 16 }}
                className={classes.imageGroup}
            >
                <Image width={400} src={image} />
                {image2 !== "undefined" ? <Image width={400} src={image2}/> : null }
                {image3 !== "undefined" ? <Image width={400} src={image3}/> : null }
                {image4 !== "undefined" ? <Image width={400} src={image4}/> : null }
                {image5 !== "undefined" ? <Image width={400} src={image5}/> : null }
                {image6 !== "undefined" ? <Image width={400} src={image6}/> : null }
            </Col>
            <Col
                lg={{ span: 8 }}
            >
                <Title level={2}>{name}</Title>
                <Title level={2}>${price}.00 USD</Title>
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
            </Col>
        </Row>
    )
}

export default ProductDetailsPage;
