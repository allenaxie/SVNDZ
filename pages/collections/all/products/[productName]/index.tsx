import classes from './productDetailsPage.module.scss';
import { useState } from 'react';
import { Row, Col, Image, Typography } from 'antd';
import { SizeGuide } from '../../../../../components';
import { MongoClient } from 'mongodb';

const ProductDetailsPage = ({ data }: any) => {
    const { Title } = Typography;
    // console.log('data', data);
    const [name, price, images, description, moreDetails, sizes] = [data[0].name, data[0].price, data[0].images, data[0].description, data[0].moreDetails, data[0].sizes];
    const [selectedSize, setSelectedSize] = useState('M');

    const handleSizeClick = (e: any) => {
        let size = e.target.innerText;
        setSelectedSize(size);
    }

    return (
        <Row className={classes.container}>
            <Row className={classes.productContent}>
                <Col
                    lg={{ span: 16 }}
                    className={classes.imageGroup}
                >
                    <Image.PreviewGroup>
                        {data[0].images.map((image: string, index: number) => <Image alt="product photo" width={images.length < 4 ? 400 : 250} src={image} key={index} />)}
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
                            lg={{ span: 8 }}
                        >
                            {sizes.map((size: any, index: number) =>
                                <button
                                    className={selectedSize === size ? `${classes.sizeBtn} ${classes.sizeActive}` : `${classes.sizeBtn}`}
                                    onClick={(e) => handleSizeClick(e)}
                                    key={index}
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
                            {moreDetails?.map((detail: string, index: number) =>
                                <li key={index}>
                                    <span className={classes.moreDetailsText}>
                                        {detail}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default ProductDetailsPage;

// export async function getStaticPaths() {

//     const res = await fetch('http://localhost:3000/api/fetchProducts')
//     const data = await res.json();

//     const paths = data.map((product: any) => {
//         return {
//             params: {
//                 productName: `${product.name}`
//             }
//         }
//     })
//     return {
//         fallback: true,
//         paths: paths,
//     }
// }

// export async function getStaticProps(context: any) {

//     const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`);
//     const db = client.db();
//     const productsCollection = db.collection('Collections');
//     // console.log('context', context.params.productName);
//     const res = await productsCollection.find().toArray();
//     //   console.log('res', res);
//     const data = JSON.parse(JSON.stringify(res.filter(product => product.name === context.params.productName)));
//     client.close();
//     return {
//         props: {
//             data: data
//         }
//     }
// }

export async function getServerSideProps(context:any) {

    const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`);
    const db = client.db();
    const productsCollection = db.collection('Collections');
    // console.log('context', context.params.productName);
    const res = await productsCollection.find().toArray();
    //   console.log('res', res);
    const data = JSON.parse(JSON.stringify(res.filter(product => product.name === context.params.productName)));
    // client.close();
    return {
        props: {
            data: data
        }
    }
  }

