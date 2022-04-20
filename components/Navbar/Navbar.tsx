import classes from "./Navbar.module.scss";
import Link  from 'next/link';
import { useState } from 'react';
import {SearchProducts} from '../index';
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    ShoppingOutlined, 
    TagOutlined,
    HomeOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { 
    Menu, 
    Button,
    Drawer, 
    Input,
} from "antd";


interface NavbarProps {
    isNavCollapsed: boolean,
    navToggle: any,
    setIsNavCollapsed: any,
    isNewUser: boolean,
    setIsNewUser: any,
    collections: any,
}

const Navbar = ({isNavCollapsed, navToggle, setIsNavCollapsed, isNewUser, setIsNewUser, collections}: NavbarProps) => {

    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    }

    return (
        <Menu
            className={classes.navbarContainer}
            theme="light"
            mode="inline"
            onClick={() => setIsNavCollapsed(true)}
        >
            <div className={classes.togglerContainer}>
                <Button onClick={navToggle}>
                    {isNavCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
            <Menu.Item className={classes.menuItems} key="home" icon={<HomeOutlined />} >
                    <Link href="/">
                        HOME           
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="about" icon={<ShoppingOutlined />}>
                    <Link href="/collections/all">
                        SHOP ALL               
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="signup" icon={ <TagOutlined />}>
                <Link href="/">
                    SALE
                </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="search" icon={ <SearchOutlined />} onClick={showDrawer}>
                SEARCH
            </Menu.Item>
            <SearchProducts drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} collections={collections}/>
            
        </Menu>
    )
}

export default Navbar;