import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Navbar } from '../components';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Layout, Row, Col } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { Header, Footer, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isNewUser, setIsNewUser] = useState(true);

  const navToggle = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleClick = () => {
    router.push('/')
  }

  interface Collection {
    name: string,
    price: number,
    image: string,
  }

  const collection:Collection[] = [
    {
      name: "Zen Zip Up Hoodie (UNISEX)",
      price: 82,
      image: "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22002_600x.jpg?v=1643184108",
    },
    {
      name: "Zen Joggers (UNISEX)",
      price: 68,
      image: "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22001-3_b448edb7-bd9a-41e6-9bf0-d196746e48b2_900x.jpg?v=1643185240",
    },
    {
      name: "Karma Joggers",
      price: 68,
      image: "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/22006_760x.jpg?v=1643251780",
    },
    {
      name: "Rebel Puffer Jacket (UNISEX)",
      price: 148,
      image: "https://cdn.shopify.com/s/files/1/0275/7784/3823/products/21_8a8d1851-0109-4c5a-b438-c3ef3f6ecf2a_760x.jpg?v=1636705226",
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
          <Component {...pageProps} collection={collection} router={router}/>
        </Content>
      </Layout>
     
    </Layout>
  )
}

export default MyApp
