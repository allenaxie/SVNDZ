import classes from './SearchSidebar.module.scss';
import { useEffect, useState } from 'react';
import { Drawer, Input, Popover, Row, Col, Image} from 'antd';
import { useRouter } from 'next/router';

interface SearchSidebarProps {
    drawerVisible: boolean,
    setDrawerVisible: any,
    isNavCollapsed: any,
    setIsNavCollapsed: any,
    products:any,
}

const SearchSidebar = ({ drawerVisible, setDrawerVisible, isNavCollapsed,
    setIsNavCollapsed, products }: SearchSidebarProps) => {
    const [searchResults, setSearchResults] = useState([]);
    const [popoverVisible, setPopoverVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();


    const closeDrawer = () => {
        setDrawerVisible(false);
    }

    const handleChange = (e: any) => {
        let value = e.target.value;
        // setSearchTerm(value);
        const filteredList = products.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredList);
    }

    const handleCardClick = (item: any) => {
        closeDrawer();
        setIsNavCollapsed(true);
        router.push({
            pathname: `/collections/all/products/${item.name}`,
            query: {
                data: JSON.stringify(item)
            }
        }, `/collections/all/products/${item.name}`);
       
    }

    const popoverContent = (
        <div className={classes.popoverContent}>
            {searchResults.slice(0, 3).map((item:any, index:number) =>
                <Row className={classes.popoverItem} key={index} onClick={() => handleCardClick(item)}>
                    <Col span={12} className={classes.cardImgContainer}>
                        <Image className={classes.cardImg} width={75} height={112.5} src={item.images[0]} alt="product image" preview={false}/>
                    </Col>
                    <Col span={12} className={classes.cardDescContainer}>
                        <span className={classes.itemName}>{item.name}</span>
                        <br />
                        <span className={classes.itemPrice}>${item.price}.00</span>
                    </Col>
                </Row>
            )}
            <div className={classes.viewBtnContainer}>
                {searchResults.length > 3 && <button className={classes.viewAllBtn}>View {searchResults.length - 3} more products</button>}
            </div>
        </div>
    )

    const handleFocus = () => {

    }

    return (
        <>
            <Drawer
                title="Search For Products In Our Store"
                placement="left"
                onClose={closeDrawer}
                visible={drawerVisible}
            >
                <Popover
                    placement='bottomLeft'
                    content={popoverContent}
                    trigger='focus'
                    className={classes.popover}
                >
                    <Input
                        placeholder='Enter product name'
                        onChange={handleChange}
                        allowClear
                        onFocus={handleFocus}
                    />
                </Popover>
            </Drawer>
        </>
    )
}

export default SearchSidebar;