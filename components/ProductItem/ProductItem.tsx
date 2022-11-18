import classes from './ProductItem.module.scss';
import { useRouter } from 'next/router';
import { Col, Card, Image } from 'antd';


interface ProductItemProps {
  item: any,
  index: number,
}

const ProductItem = ({ item, index }: ProductItemProps) => {
  const router = useRouter();
  const { Meta } = Card;

  const handleCardClick = (item: any) => {
    router.push({
      pathname: `/collections/all/products/${item.name}`,
      query: {
        data: JSON.stringify(item)
      }
    }, `/collections/all/products/${item.name}`);
  }

  return (
    <Col
      xs={{ span: 18, offset:3 }}
      sm={{ span: 8, offset: 3 }}
      xl={{ span: 5, offset: 2 }}
    >
      <Card
        hoverable
        extra={<span>{`$${item.price}.00`}</span>}
        cover={<Image className={classes.cardImg} src={item.images[0]} preview={false} alt="product image"/>}
        className={classes.card}
        onClick={() => handleCardClick(item)}
      >
        <Meta title={item.name} />
      </Card>
    </Col>
  )
}

export default ProductItem;