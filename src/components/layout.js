import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import Header from './Header/Header';
import Footer from './Footer/Footer';

import ModalName from "./Modals/ModalName";
import ModalEmail from "./Modals/ModalEmail";

import "../style/style.scss"
import ScreenLock from "../helpers/screenLock";

const Layout = ({ children }) => {
const Screen = new ScreenLock();
   const [stateEmail, setStateEmail] = useState(false);
   const [stateName, setStateName] = useState(false);

   const onModalToggle = (key, open = true) => {
      if ((key === "email")) {
         setStateEmail(open)
         open? Screen.lock() : Screen.unlock();
      }
      if (key === "name") {
         setStateName(open)
         open ? Screen.lock() : Screen.unlock();
      }
   }
   const modalElemName = useRef(null)
   const modalElemEmail = useRef(null)

   useEffect(() => {
      if (stateEmail) {
         console.log("show Email modal")
         modalElemEmail.current.style.opacity = "1"
         modalElemEmail.current.style.transform = "translateX(0)"
      } else if (!stateEmail) {
         console.log("close Email modal")
         modalElemEmail.current.style.opacity = "0"
         setTimeout(
            () => (modalElemEmail.current.style.transform = "translateX(-100%)"),
            400
         )
      }

   }, [stateEmail])
   useEffect(() => {
      if (stateName) {
         console.log("show Name modal")
         modalElemName.current.style.opacity = "1"
         modalElemName.current.style.transform = "translateX(0)"
      } else if (!stateName) {
         console.log("close Name modal")
         modalElemName.current.style.opacity = "0"
         setTimeout(
            () => (modalElemName.current.style.transform = "translateX(-100%)"),
            400
         )
      }
   }, [stateName])


  return (
    <>
        <Header onModalToggle={onModalToggle}/>
        <main>{children}</main>
      <Footer/>
        <ModalEmail
           refs={modalElemEmail}
           isVisible={false}
           onClose={() => onModalToggle("email", false)}
           onOpenNameForm={() => onModalToggle("name", true)}
        />
        <ModalName
           refs={modalElemName}
           isVisible={false}
           onClose={() => onModalToggle("name", false)}
        />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
