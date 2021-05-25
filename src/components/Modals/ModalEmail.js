import React, { useState } from 'react';
import Close from '../../images/svg/close.svg'
import Elem1 from '../../images/svg/modal-elem-1.svg'
import Elem2 from '../../images/svg/modal-elem-2.svg'
import Spinner from '../../images/svg/spinner.svg'
import newsletter from '../../axios/newsletter';

const ModalEmail = ({ refs, onClose, onOpenNameForm }) => {
   const [email, setEmail] = useState('');
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [disabled, setDisabled] = useState(false);

   const validate = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }
   const outsideClick = (e)=>{
      e.target.matches('#modal') && onClose();
   }
   const onChangeInput = (e) => {

      setEmail(e.target.value);
   }
   const sendEmail = async (e) => {
      e.preventDefault();
      if (validate(email)) {
         console.log('validate ok')
         setError('');
         setSuccess(false);
         setLoading(true);
         setDisabled(true);
         localStorage.setItem('email', email);
         const response = await newsletter(email);
         console.log(response);
         if (response.status === 202) {
            setLoading(false)
            setSuccess(true);
            setDisabled(false);
            setEmail('');
            onClose();
            setTimeout(() => {
               onOpenNameForm();
               setError('');
               setSuccess(false);}, 250)
      
         } else {
            setSuccess(false);
            setLoading(false)
            setDisabled(false);
            setError('Network error!');
         }

      } else {
         console.log('validate error')
         setLoading(false)
         setSuccess(false);
         setError('Email address is not valid!');
      }
   }
   return (
      <div ref={refs} className="modal" id="modal" data-elem="modal" onClick={outsideClick}>
         <div className="modal__body text-center">
            <div className="modal__body-inner position-relative">
               <button className="btn-close position-absolute modal__close" data-elem="newsletter-close" onClick={onClose}>
                  <Close />
               </button>
               <figure className="modal__elem-1 position-absolute">
                  <Elem1 />
               </figure>
               <figure className="modal__elem-2 position-absolute d-none d-md-block">
                  <Elem2 />
               </figure>
               <h2 className="modal__title text-center"><span className="orange">
                  Sign up for Bō</span> updates</h2>
               <ul className="modal__list">
                  <li className="modal-list__elem">1. Create your address book</li>
                  <li className="modal-list__elem">2. Reminders - Never forget an special day</li>
                  <li className="modal-list__elem">3. One of a kind gifts</li>
               </ul>
               <form className="modal__form position-relative js-form-1" action="" data-elem="form">
                  {loading && <div className="form-spinner" data-elem="spinner">
                     <Spinner />
                  </div>
                  }
                  {success && <p className="form-success" data-elem="success">Email has been sent!</p>}
                  {error && <p className="form-error" data-elem="error">{error}</p>}
                  <input className="js-input-1" placeholder="Your email" id="input1" data-elem="input" value={email} name="email" onChange={onChangeInput} />
                  <button className="btn btn--primary js-button-1" disabled={disabled} data-elem="submit" onClick={sendEmail}>Sign Up</button>
                  <p className="modal__info-text">By signing up I agree to Bo’s <a href="/">Terms of Use </a>and <a href="/">
                     Privacy Policy</a>, and consent to receiving updates.</p>
               </form>
            </div>
         </div>
      </div>
   )
}

export default ModalEmail;