import classes from './SearchSidebar.module.scss';
import { useEffect, useState } from 'react';
import { Drawer, Input, Popover, Row, Col,} from 'antd';
import { useRouter } from 'next/router';

interface SearchSidebarProps {
    drawerVisible: boolean,
    setDrawerVisible: any,
    isNavCollapsed: any,
    setIsNavCollapsed: any,
}

const SearchSidebar = ({ drawerVisible, setDrawerVisible, isNavCollapsed,
    setIsNavCollapsed }: SearchSidebarProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            // update list of search results displayed everytime search input changes
            const res = await fetch('/api/fetchProducts')
            const data = await res.json();
            const filteredList = data.filter((item: any) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(filteredList);
        }
        fetchData();
    }, [searchTerm])

    const closeDrawer = () => {
        setDrawerVisible(false);
    }

    const handleChange = (e: any) => {
        let value = e.target.value;
        setSearchTerm(value);
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
            {searchResults.slice(0, 3).map((item:any, index) =>
                <Row className={classes.popoverItem} key={index} onClick={() => handleCardClick(item)}>
                    <Col span={12} className={classes.cardImgContainer}>
                        <img className={classes.cardImg} src={item.images[0]} />
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