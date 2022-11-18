import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { Navbar, SearchSidebar, MobileNavbar } from '../components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout, Button, Popover } from 'antd';
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { Header, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const [products, setProducts] = useState([]);

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    // get width of the screen
    const handleResize = () => setScreenSize(window.innerWidth);

    // Listen for whenever window resizes -> invoke handleResize()
    window.addEventListener('resize', handleResize);
    handleResize();

    // unmount event listener?
    return () => window.removeEventListener('resize', handleResize);

  }, [])

  // Called whenever screen size changes
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

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

  const handleLogoClick = () => {
    router.push('/')
  }

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  }

  return (
    <Layout>
      {activeMenu &&
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
        </Sider>
      }
      <SearchSidebar drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
        products={products}
      />
      <Layout className="mainContainer">
        {isNavCollapsed || <div className="backdrop" onClick={navToggle}></div>}
        <Header className="header">
          {activeMenu ||
            <>
              <Popover className='headerMobileMenuToggle' 
              content={<MobileNavbar showDrawer={showDrawer}/>} 
              trigger='click' 
              placement='bottomLeft'
              ><MenuOutlined/></Popover>
   
            </>
          }
          <div className="logo" onClick={handleLogoClick}><Image className="logo-image" alt="logo" src="https://cdn.shopify.com/s/files/1/0275/7784/3823/files/logo_white.png?v=1590001197" width={150} height={40} /></div>
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
          <Component {...pageProps} router={router} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyApp;


