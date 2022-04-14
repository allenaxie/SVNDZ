import classes from "./Navbar.module.scss";
import Link  from 'next/link';
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    ShoppingOutlined, 
    TagOutlined,
    HomeOutlined,
    
} from "@ant-design/icons";
import { 
    Menu, 
    Button 
} from "antd";


interface NavbarProps {
    isNavCollapsed: boolean,
    navToggle: any,
    isNewUser: boolean,
    setIsNewUser: any,
}

const Navbar = ({isNavCollapsed, navToggle, isNewUser, setIsNewUser}: NavbarProps) => {

    return (
        <Menu
            className={classes.navbarContainer}
            theme="light"
            mode="inline"
        >
            <div className={classes.togglerContainer}>
                <Button onClick={navToggle}>
                    {isNavCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
            <Menu.Item className={classes.menuItems} key="home" icon={<HomeOutlined />}>
                    <Link href="/">
                        Home           
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="about" icon={<ShoppingOutlined />}>
                    <Link href="/about">
                        Shop All                
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="signup" icon={ <TagOutlined />} onClick={() => setIsNewUser(true)}>
                <Link href="/sale">
                    Sale
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;