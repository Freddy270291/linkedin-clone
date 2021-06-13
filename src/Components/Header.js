import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt='Linkedin Logo'
        />
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
