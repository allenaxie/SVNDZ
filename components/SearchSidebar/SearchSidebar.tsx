import classes from './SearchSidebar.module.scss';
import { useEffect, useState } from 'react';
import { Drawer, Input, Popover, Row, Col, List } from 'antd';

interface SearchSidebarProps {
    drawerVisible: boolean,
    setDrawerVisible: any,
    collections: any,
}

const SearchSidebar = ({ drawerVisible, setDrawerVisible, collections }: SearchSidebarProps) => {
    const [popoverVisible, setPopoverVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // console.log('collections',collections)


    useEffect(function () {
        // if (searchTerm.length < 2) return;
        // update list of search results displayed everytime search input changes
        const filteredList = collections.filter((item:any) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log('filtered list:', filteredList)
        setSearchResults(filteredList);
        console.log('searchTerm',searchTerm)
        console.log('searchResults',searchResults)
    }, [searchTerm])

    const closeDrawer = () => {
        setDrawerVisible(false);
    }

    const handleChange = (e:any) => {
        let value = e.target.value;
        setSearchTerm(value);
        console.log(value)
        // {searchTerm.length > 1 ? setPopoverVisible(true) : setPopoverVisible(false)};
        // // if no input value, reset search results
        // if (value.length < 1) {
        //     setSearchResults([]);
        // }
    }

    const popoverContent = (
        <div className={classes.popoverContent}>
            {searchResults.slice(0,3).map((item,index) => 
                <Row className={classes.popoverItem} key={index}>
                    <Col span={12}>
                        <img src={item.images[0]} className={classes.itemImage}/>
                    </Col>
                    <Col span={12}>
                        {item.name}
                    </Col>
                </Row>
            )}
            {searchResults.length > 3 && <button>View {searchResults.length - 3} more products</button> }
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
                    // visible={popoverVisible}
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