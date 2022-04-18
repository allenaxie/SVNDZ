import classes from './ProductItem.module.scss';
import { useRouter } from 'next/router';
import { Col, Card } from 'antd';


interface ProductItemProps {
  item: any,
  index: number,
}

const ProductItem = ({ item, index }: ProductItemProps) => {
  const router = useRouter();
  const { Meta } = Card;

  const handleCardClick = (item: any) => {
    console.log('item', item)
    router.push({
      pathname: `/collections/all/products/${item.name}`,
      query: {
        name: `${item.name}`,
        price: `${item.price}`,
        image: `${item.image}`,
        image2: `${item.image2}`,
        image3: `${item.image3}`,
        image4: `${item.image4}`,
        image5: `${item.image5}`,
        image6: `${item.image6}`,
      }
    }, `/collections/all/products/${item.name}`);
  }

  return (
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
        onClick={() => handleCardClick(item)}
      >
        <Meta title={item.name} />
      </Card>
    </Col>
  )
}

export default ProductItem;