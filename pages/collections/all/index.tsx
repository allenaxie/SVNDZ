import { Layout, Carousel, Row, Col, Typography, Card, Form, Input, Button, Divider } from 'antd';
import classes from './all.module.scss';
import {ProductList} from '../../../components';

interface AllCollectionsProps {
    collections: any,
}

const AllCollections = ({ collections }: AllCollectionsProps) => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography;
    const { Meta } = Card;

    return (
        <div className={classes.container}>
            <Row className={classes.productsContainer} gutter={[36, 36]}>
                <ProductList collections={collections}/>
            </Row>
        </div>
    )
}

export default AllCollections;