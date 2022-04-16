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

  return (
    <Layout>
      <Sider
        collapsible
        className="siderNav"
        collapsed={isNavCollapsed}
        theme="light"
        trigger={null}
      >
        <Navbar isNavCollapsed={isNavCollapsed} navToggle={navToggle} isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
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
          <Component {...pageProps}/>
        </Content>
      </Layout>
     
    </Layout>
  )
}

export default MyApp
