import { Layout, Carousel, Row, Col, Typography, Card, Form, Input, Button, Divider } from 'antd';
import classes from './all.module.scss';

interface AllCollectionsProps {
    collection: any,
}

const AllCollections = ({ collection }: AllCollectionsProps) => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography;
    const { Meta } = Card;

    return (
        <div className={classes.container}>
            <Row className={classes.productsContainer} gutter={[24, 24]}>
                {collection.map((item: any, idx: number) =>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        lg={{ span: 6 }}
                    >
                        <Card
                            hoverable
                            extra={<span>{`$${item.price}.00`}</span>}
                            cover={<img className={classes.cardImg} src={item.image} />}
                            className={classes.card}
                        >
                            <Meta title={item.name} />
                        </Card>
                    </Col>
                )}
            </Row>
            <Row className={classes.productsContainer} gutter={[24, 24]}>
                {collection.map((item: any, idx: number) =>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        lg={{ span: 6 }}
                    >
                        <Card
                            hoverable
                            extra={<span>{`$${item.price}.00`}</span>}
                            cover={<img className={classes.cardImg} src={item.image} />}
                            className={classes.card}
                        >
                            <Meta title={item.name} />
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default AllCollections;