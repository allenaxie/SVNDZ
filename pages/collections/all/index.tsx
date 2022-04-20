import { Layout, Row, Col, Typography, Card, Input, Button, Divider } from 'antd';
import { useEffect, useState } from 'react';
import classes from './all.module.scss';
import {ProductItem, ProductList} from '../../../components';

interface AllCollectionsProps {
    collections: any,
}

const AllCollections = ({ collections }: AllCollectionsProps) => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography;
    const { Meta } = Card;
    const [searchTerm, setSearchTerm] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(function () {
        const filteredList = collections.filter((item:any) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log('filtered list:', filteredList)
        setProductList(filteredList);
    }, [searchTerm])

    const handleChange = (e:any) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    return (
        <Row className={classes.container}>
            <Col 
                xs={{span:22, offset:1}}
                md={{span:12, offset:6}} 
                className={classes.searchBarContainer}
            >
                <Input placeholder='Enter product name' onChange={handleChange}/>
            </Col>
            <Row className={classes.productsContainer} gutter={[36, 36]}>
                 {productList.map((item,index) => <ProductItem item={item} index={index}/>)}
            </Row>
        </Row>
    )
}

export default AllCollections;