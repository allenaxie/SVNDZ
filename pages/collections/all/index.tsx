import { Layout, Row, Col, Typography, Card, Input, BackTop } from 'antd';
import { MongoClient } from 'mongodb';
import { useEffect, useState } from 'react';
import classes from './all.module.scss';
import { ProductItem, ProductList } from '../../../components';

interface AllCollectionsProps {
    products: any,
}

const AllCollections = ({ products, }: AllCollectionsProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(function () {
        const filteredList = products.filter((item: any) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setProductList(filteredList);
    }, [searchTerm])

    const handleChange = (e: any) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    return (
        <>
            <Row className={classes.container}>
                <Col
                    xs={{ span: 22, offset: 1 }}
                    md={{ span: 12, offset: 6 }}
                    className={classes.searchBarContainer}
                >
                    <Input placeholder='Enter product name' onChange={handleChange} />
                </Col>
                <Row className={classes.productsContainer} gutter={[36, 36]}>
                    {productList.map((item, index) => <ProductItem item={item} index={index} key={index}/>)}
                </Row>
            </Row>
            <BackTop/>
        </>
    )
}

export default AllCollections;

// getStaticProps is a reserved function from Nextjs to ensure pre-rendered page contains data
// Nextjs will call this function to get data before rendering page
// runs once during build
export async function getStaticProps() {
    // fetch data from an API
    // Connect to mongoDB - NEVER run on client side - this file will not run on client side so it is secure
    const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`);
    const db = client.db();
    const productsCollection = db.collection('Collections');
  
    const products = await productsCollection.find().toArray();
    client.close();
    // console.log(products)
    // MUST return an object in getStaticProps
    return {
        props: {
            products: products.map(product => ({
                id: product._id.toString(),
                name: product.name,
                price: product.price,
                images: product.images,
                description: product.description,
                moreDetails: product.moreDetails,
                sizes: product.sizes,
            }))
        },
        // incremental static generation
        // 1 represents number of seconds nextjs will revalidate data (every 1 seconds)
        revalidate: 1
    };
  }
  