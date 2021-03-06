import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { Navbar, SearchSidebar } from '../components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { Header, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isNewUser, setIsNewUser] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        // update list of search results displayed everytime search input changes
        const res = await fetch('/api/fetchProducts')
        const data = await res.json();
        setProducts(data);
        // setSearchResults(filteredList);
    }
    fetchData();
}, [])

  const navToggle = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleClick = () => {
    router.push('/')
  }

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
      setDrawerVisible(true);
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
        <Navbar 
          navToggle={navToggle} 
          isNavCollapsed={isNavCollapsed} 
          setIsNavCollapsed={setIsNavCollapsed} 
          isNewUser={isNewUser} 
          setIsNewUser={setIsNewUser} 
          showDrawer={showDrawer}
        />
        <SearchSidebar drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} isNavCollapsed={isNavCollapsed} 
          setIsNavCollapsed={setIsNavCollapsed} 
          products={products}
          />

      </Sider>
      <Layout className="mainContainer">
        <Header className="header">
        {isNavCollapsed || <div className="backdrop" onClick={navToggle}></div>}
          <div className="logo" onClick={handleClick}><Image className="logo-image" alt="logo" src="https://cdn.shopify.com/s/files/1/0275/7784/3823/files/logo_white.png?v=1590001197" width={150} height={40} /></div>
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
          <Component {...pageProps} router={router}/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyApp;


