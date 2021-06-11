import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <h1>This is the Header</h1>
      <div className='header__left'>
        <img src='' alt='Linkedin Logo' />
        <div className='header__search'>
          {/* Search Icon */}
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__'></div>
    </div>
  );
}

export default Header;
