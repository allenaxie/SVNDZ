import classes from './productDetailsPage.module.scss';
import { Row } from 'antd';

interface ProductDetailsPageProps {
    collections: any,
}

const ProductDetailsPage = (props: any) => {
    console.log(props.router.query)
    const [name, price, image] = [props.router.query.name, props.router.query.price, props.router.query.image]
    return (
        <Row className={classes.container}>
            {name}
            {price}
            {image}
        </Row>
    )
}

export default ProductDetailsPage;
