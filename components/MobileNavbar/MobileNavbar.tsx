import classes from "./MobileNavbar.module.scss";
import Link from 'next/link';
import { useState } from 'react';
import { SearchSidebar } from '../index';
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
    Popover,
} from "antd";


interface MobileNavbarProps {
    // isMobileNavCollapsed: boolean,
    // navToggle: any,
    // setIsMobileNavCollapsed: any,
    // isNewUser: boolean,
    // setIsNewUser: any,
    showDrawer: any,
}

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const MobileNavbar = ({
    // isMobileNavCollapsed, navToggle, setIsMobileNavCollapsed, isNewUser, setIsNewUser, 
    showDrawer
}: MobileNavbarProps) => {

    return (
        <div className={classes.mobileNavbarContainer}>
            <Link href="/" >
                <div className={classes.menuItems}>
                    <>
                        <HomeOutlined /> HOME
                    </>
                </div>
            </Link>
            <Link href="/collections/all" >
                <div className={classes.menuItems}>
                    <ShoppingOutlined /> SHOP ALL
                </div>
            </Link>
            <div className={classes.menuItems} key="search" onClick={showDrawer}>
                <SearchOutlined /> SEARCH
            </div>
        </div>
        // <Menu
        //     className={classes.mobileNavbarContainer}
        //     theme="light"
        //     mode="inline"
        //     onClick={() => setIsMobileNavCollapsed(true)}
        // >
        //     <div className={classes.togglerContainer}>
        //         <Button onClick={navToggle}>
        //             {isMobileNavCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        //         </Button>
        //     </div>
        //     <Menu.Item className={classes.menuItems} key="home" icon={<HomeOutlined />} >
        //             <Link href="/">
        //                 HOME           
        //             </Link>
        //     </Menu.Item>
        //     <Menu.Item className={classes.menuItems} key="shopall" icon={<ShoppingOutlined />}>
        //             <Link href="/collections/all">
        //                 SHOP ALL               
        //             </Link>
        //     </Menu.Item>
        //     <Menu.Item className={classes.menuItems} key="search" icon={ <SearchOutlined />} onClick={showDrawer}>
        //         SEARCH
        //     </Menu.Item>
        // </Menu>
    )
}

export default MobileNavbar;