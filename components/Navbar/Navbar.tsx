import classes from "./Navbar.module.scss";
import Link  from 'next/link';
import { useState } from 'react';
import {SearchSidebar} from '../index';
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
    showDrawer: any,
}

const Navbar = ({isNavCollapsed, navToggle, setIsNavCollapsed, isNewUser, setIsNewUser, showDrawer}: NavbarProps) => {

    

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
            <Menu.Item className={classes.menuItems} key="shopall" icon={<ShoppingOutlined />}>
                    <Link href="/collections/all">
                        SHOP ALL               
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="search" icon={ <SearchOutlined />} onClick={showDrawer}>
                SEARCH
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;