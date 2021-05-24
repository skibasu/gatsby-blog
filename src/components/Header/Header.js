
import React from "react"
import PageLogo from '../../images/svg/page-logo.svg';
import Menu from "../Menu/Menu";
import Lock from '../../helpers/screenLock'


const Header = ({ onModalToggle }) => {
   const lock = new Lock();
   return (
      <header className="page-header align-items-center justify-content-between container" id="header">
         <a className="d-block page-logo page-header__toggle" id="page-logo" href="/">
            <PageLogo />
         </a>
         <Menu />
         <button className="btn btn--primary d-none d-lg-inline-flex page-header__toggle" type="button" data-elem="newsletter" id="button-header" onClick={() => { onModalToggle('email'); lock.lock()}}>Join the waitlist </button>
      </header>
   )
}
export default Header;