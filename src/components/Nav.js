import React from 'react';
import { MdMenu, MdSearch, MdRefresh, MdSettings, MdApps, MdViewAgenda } from 'react-icons/md'


const Nav = ()=>{
    const menu = <MdMenu/>;
    const search = <MdSearch/>;
    const refresh = <MdRefresh/>;
    const agenda = <MdViewAgenda/>;
    const settings = <MdSettings/>;
    const apps = <MdApps/>;
    return(
        <header className="Header">
        <nav className="Nav">
        <div className="Flex">
            <p className="Icons Menu ColorNav"><a>{menu}</a></p>
            <a>
            <img
                className="Logo"
                src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
                srcset="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_48dp.png 2x "/>
            <span className="Fake ColorNav">Keep</span>
            </a>
        </div>
           
            <form className="Search Flex">
    <button className="Icons ColorNav BtnSearch"> <a className="teste">{search}</a></button>
                <input className="SearchInput" type="search" placeholder="Search"></input>
            </form>
            <div className="Flex">
            <p className="Icons ColorNav"><a>{refresh}</a></p>
            <p className="Icons ColorNav"><a>{agenda}</a></p>
            <p className="Icons ColorNav"><a>{settings}</a></p>
            </div>

            <div className="Flex">                
            <p className="Icons ColorNav"><a>{apps}</a></p>
            <a className="Profile"><img className="ProfileImg" src="https://api.adorable.io/avatars/285/ldr.larissa@hotmail.com.png"/></a>
            </div>
        </nav>
        </header>
    );
}


export default Nav;
