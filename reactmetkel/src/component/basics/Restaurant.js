import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './navbar';

// getting the unique list of category so that we can apply concept of DRY for which we will use Set data-structure
const uniqueList = [
    ...new Set(
        Menu.map((currEle) => {
            return currEle.category;
        })
    ),
    'All',
];

const Restaurant = () => {
    const [menuData, setmenuData] = React.useState(Menu);
    const [menuList, setmenuList] = React.useState(uniqueList);
    const filterItem = (category) => {
        if (category === 'All') {
            setmenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        });
        setmenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
