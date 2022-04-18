import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Navbar } from '../components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout, Row, Col } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { Header, Footer, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isNewUser, setIsNewUser] = useState(true);

  const navToggle = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleClick = () => {
    router.push('/')
  }

  interface Collections {
    name: string,
    price: number,
    images: Array<string>,
  }

  const collections:Collections[] = [
    {
      name: "Zen Zip Up Hoodie (UNISEX)",
      price: 82,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002_600x.jpg?v=1643184108",
        "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002-2.jpg?v=1643184109",
        "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002-4_3000x.jpg?v=1643185448",
        "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002-3_9804df63-13b2-4485-98c2-e2adcc77944a_3000x.jpg?v=1643185448",
        "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002-5_3000x.jpg?v=1643185441",
        "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002-6_3000x.jpg?v=1643185441",
      ]
    },
    {
      name: "Zen Joggers (UNISEX)",
      price: 68,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22001-3_b448edb7-bd9a-41e6-9bf0-d196746e48b2_900x.jpg?v=1643185240",]
    },
    {
      name: "Karma Bodysuit",
      price: 58,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22004-1_760x.jpg?v=1643248494",]
    },
    {
      name: "Karma Joggers",
      price: 68,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22006_760x.jpg?v=1643251780",]
    },
    {
      name: "Rebel Puffer Jacket (UNISEX)",
      price: 148,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/21_8a8d1851-0109-4c5a-b438-c3ef3f6ecf2a_760x.jpg?v=1636705226",]
    },
    {
      name: "Road Kill Sweatshirt",
      price: 68,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/20_1d936e8f-7cfb-4d5a-bb45-67e3ec319261_760x.jpg?v=1636705458",]
    },
    {
      name: "Moto Shop Hoodie (UNISEX)",
      price: 82,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/8_ca42f0ee-5545-4231-bb50-c3c41cd76183_760x.jpg?v=1649668865",]
    },
    {
      name: "Rebel Puffer Jacket (UNISEX)",
      price: 148,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/21_8a8d1851-0109-4c5a-b438-c3ef3f6ecf2a_760x.jpg?v=1636705226",]
    },
    {
      name: "Summer Nights Tee",
      price: 45,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/4_760x.jpg?v=1636704887",]
    },
    {
      name: "Velour Track Jacket",
      price: 65,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/2020-08-17141902_760x.jpg?v=1636703967",]
    },
    {
      name: "Velour Track Jogger",
      price: 58,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/2020-08-17141902FULL_d3b815bb-1dd5-403b-b8db-c8ed67155d0c_760x.jpg?v=1636704002",]
    },
    {
      name: "Racer Canvas Jacket",
      price: 88,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/Facetune_27-06-2020-15-02-13_760x.jpg?v=1636703555",]
    },
    {
      name: "Gigabyte Jacket(Unisex)",
      price: 180,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/2017-08-07022926copy_760x.jpg?v=1636704512",]
    },
    {
      name: "Basketball Jersey(Unisex)",
      price: 48,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/2010-07-22150138_760x.jpg?v=1636703790",]
    },
    {
      name: "COURT HAT",
      price: 16,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/11_62d7df07-3e08-484e-9042-336f9a795976_760x.jpg?v=1639233681",]
    },
    {
      name: "YOUNG LOVE HAT",
      price: 16,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/55_760x.jpg?v=1639233881",]
    },
    {
      name: "Mid Socks (3-Pack)",
      price: 10,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/1800x2400_1_760x.jpg?v=1637310148",]
    },
    {
      name: "COURT SOCKS (3-Pack)",
      price: 10,
      images: ["https://cdn.shopify.com/s/files/1/0275/7784/3823/products/1800x2400bai1_760x.jpg?v=1637310661",]
    },
  ]

  return (
    <Layout>
      <Sider
        collapsible
        className="siderNav"
        collapsed={isNavCollapsed}
        theme="light"
        trigger={null}
      >
        <Navbar isNavCollapsed={isNavCollapsed} navToggle={navToggle} setIsNavCollapsed={setIsNavCollapsed} isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
      </Sider>
      <Layout className="mainContainer">
        <Header className="header">
        {isNavCollapsed || <div className="backdrop" onClick={navToggle}></div>}
          <div className="logo" onClick={handleClick}><Image src="https://cdn.shopify.com/s/files/1/0275/7784/3823/files/logo_white.png?v=1590001197" width={150} height={40} /></div>
          <div key="My Cart" className="headerItem">
            <ShoppingCartOutlined />
            <span>
              CART
            </span>
          </div>
          <div key="My Account" className="account headerItem">
            <UserOutlined />
            <span>
              ACCOUNT
            </span>
          </div>
        </Header>
        <Content>
          <Component {...pageProps} collections={collections} router={router}/>
        </Content>
      </Layout>
     
    </Layout>
  )
}

export default MyApp
