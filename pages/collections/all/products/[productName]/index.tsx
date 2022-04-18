import classes from './productDetailsPage.module.scss';
import { useState } from 'react';
import { Row, Col, Image, Typography } from 'antd';

interface ProductDetailsPageProps {
    collections: any,
}

const ProductDetailsPage = (props: any) => {
    const data = JSON.parse(props.router.query.data)
    const { Title } = Typography;
    const [name, price, images] = [data.name,data.price, data.images ];
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
                {images.map((image :string,index:number) => <Image width={400} src={image} />)}
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
