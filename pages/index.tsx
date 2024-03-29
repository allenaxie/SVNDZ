import Head from 'next/head';
import Image from 'next/image';
import { MongoClient } from 'mongodb';
import classes from '../styles/Home.module.scss';
import { Layout, Row, Col, Typography, Card } from 'antd';
import {ProductItem, FooterComp, CarouselComp} from '../components';
import Script from 'next/script';

interface HomePageProps {
  router: any,
  products: any,
}

const HomePage = ({router, products}:HomePageProps) => {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;
  const { Meta } = Card;

  const handleViewAll = () => {
    router.push('/collections/all')
  }

  return (
    <div className={classes.container}>
      <Head>
        <title>SVNDZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Layout>
        <Content>
          <main className={classes.main}>
  
            <CarouselComp handleViewAll={handleViewAll}/>
  
            <Row
              className={classes.mixMatchSection}
              // data-aos="fade-up"
              // data-aos-duration="2000"
            >
              <Row className={classes.mixMatchHeadingContainer}>
                <Title level={1} className={classes.mixMatchHeading}>MIX & MATCH</Title>
              </Row>
              <Row className={classes.products} gutter={[24, 24]}>
                {products.slice(0,8).map((item:any,index:number) => 
                  <ProductItem item={item} index={index} key={index}/>
                )}
              </Row>
              <Col className={classes.btnContainer}>
                <button className={classes.viewAllBtn} onClick={handleViewAll}>VIEW ALL</button>
              </Col>
            </Row>
          </main>
        </Content>
        <Footer className={classes.footer}>
          <FooterComp/>
        </Footer>
      </Layout>
      {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script> */}
      
    </div>
  )
}

export default HomePage;

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

