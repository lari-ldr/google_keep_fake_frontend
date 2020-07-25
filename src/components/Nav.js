import React, {useState, useContext} from 'react';
import { MdMenu, MdSearch, MdRefresh, MdSettings, MdApps, MdViewAgenda } from 'react-icons/md'
import {NotaContext} from '../contexts/NotaContext';

const Nav = ()=>{
    const {handleFormVisibilityOutside} = useContext(NotaContext);

    const menu = <MdMenu/>;
    const search = <MdSearch/>;
    const refresh = <MdRefresh/>;
    const agenda = <MdViewAgenda/>;
    const settings = <MdSettings/>;
    const apps = <MdApps/>;
    return(
        <header className="Header" onClick={()=>{handleFormVisibilityOutside()}}>
        <nav className="Nav">
        
        <div className="Flex">
            <p className="Icons Menu Circle ColorNav">{menu}</p>
            
            <img
                className="Logo"
                alt="Google Keep Logo, fake version"
                src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
                srcSet="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_48dp.png 2x "/>
            <span className="Fake ColorNav">Keep</span>
            
        </div>
           
            <form className="Search Flex">
    <button className="ColorNav BtnSearch">{search}</button>
                <input className="SearchInput" type="search" placeholder="Search"></input>
            </form>
            <div className="Flex">
            <p className="Icons Circle ColorNav">{refresh}</p>
            <p className="Icons Circle ColorNav">{agenda}</p>
            <p className="Icons Circle ColorNav">{settings}</p>
            </div>

            <div className="Flex">                
            <p className="Icons Circle ColorNav">{apps}</p>
            <p className="Profile"><img alt="Profile circle" className="ProfileImg" src="https://api.adorable.io/avatars/285/ldr.larissa@hotmail.com.png"/></p>
            </div>
        </nav>
        </header>
    );
}


export default Nav;
