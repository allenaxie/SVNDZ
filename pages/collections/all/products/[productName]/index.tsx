import classes from "./productDetailsPage.module.scss";
import { useState } from "react";
import { Row, Col, Image, Typography } from "antd";
import { SizeGuide } from "../../../../../components";
import { MongoClient } from "mongodb";

interface ProductDetailsPageProps {
  data: {
    description: string;
    images: [string];
    moreDetails: [string];
    name: string;
    price: string;
    sizes: [string];
    _id: number;
  };
}

const ProductDetailsPage = ({ data }: ProductDetailsPageProps) => {
  const { Title } = Typography;
  const [selectedSize, setSelectedSize] = useState("M");

  const handleSizeClick = (e: any) => {
    let size = e.target.innerText;
    setSelectedSize(size);
  };

  return (
    <Row className={classes.container}>
      <Row className={classes.productContent}>
        <Col lg={{ span: 16 }} className={classes.imageGroup}>
          <Image.PreviewGroup>
            {data?.images.map((image: string, index: number) => (
              <Image
                alt="product photo"
                width={data?.images.length < 4 ? 400 : 250}
                src={image}
                key={index}
              />
            ))}
          </Image.PreviewGroup>
        </Col>
        <Col lg={{ span: 8 }}>
          <Title level={2}>{data?.name}</Title>
          <Title level={3} className={classes.price}>
            ${data?.price}.00 USD
          </Title>
          <Row>
            <Col className={classes.sizeBtnGroup} lg={{ span: 8 }}>
              {data?.sizes.map((size: any, index: number) => (
                <button
                  className={
                    selectedSize === size
                      ? `${classes.sizeBtn} ${classes.sizeActive}`
                      : `${classes.sizeBtn}`
                  }
                  onClick={(e) => handleSizeClick(e)}
                  key={index}
                >
                  {size}
                </button>
              ))}
            </Col>
          </Row>
          <div className={classes.sizeGuideContainer}>
            <SizeGuide />
          </div>
          <button className={classes.addBagBtn}> ADD TO BAG </button>
          <div className={classes.detailsContainer}>
            <span className={classes.description}>{data?.description}</span>
            <ul className={classes.moreDetails}>
              {data?.moreDetails.map((detail: string, index: number) => (
                <li key={index}>
                  <span className={classes.moreDetailsText}>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productsCollection = db.collection("Collections");

  const data = await productsCollection.find().toArray();

  const paths = data.map((product: any) => {
    return {
      params: {
        productName: `${product?.name}`,
      },
    };
  });
  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context: any) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`
  );
  const db = client.db();
  const productsCollection = db.collection("Collections");
  const res = await productsCollection.find().toArray();
  const data = JSON.parse(
    JSON.stringify(
      res.filter((product) => product?.name === context.params.productName)
    )
  );
  return {
    props: {
      data: data[0],
    },
  };
}
