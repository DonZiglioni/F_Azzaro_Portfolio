import React, { createContext, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Career from './components/Career';
import Projects from './components/Projects';
import Blog from './components/Blog';


const RoutesList = () => {
    const [isDark, setIsDark] = useState(true);
    const [menu, setMenu] = useState(false);

    const changeTheme = () => {
        setIsDark(!isDark);
    };
    const openMenu = () => {
        setMenu(!menu);
    };

    return (

        <Routes>
            <Route path='/' element={<Home changeTheme={changeTheme} theme={isDark} openMenu={openMenu} menu={menu} />} />
            <Route path='/skillset' element={<Skills changeTheme={changeTheme} theme={isDark} openMenu={openMenu} menu={menu} />} />
            <Route path='/career' element={<Career changeTheme={changeTheme} theme={isDark} openMenu={openMenu} menu={menu} />} />
            <Route path='/projects' element={<Projects changeTheme={changeTheme} theme={isDark} openMenu={openMenu} menu={menu} />} />
            <Route path='/writing' element={<Blog changeTheme={changeTheme} theme={isDark} openMenu={openMenu} menu={menu} />} />
        </Routes>
    );
};

export default RoutesList;