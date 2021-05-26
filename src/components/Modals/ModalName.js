import React, { useState } from 'react';
import Close from '../../images/svg/close.svg'
import Elem1 from '../../images/svg/modal-elem-1.svg'
import Elem2 from '../../images/svg/modal-elem-2.svg'
import Spinner from '../../images/svg/spinner.svg'
import newsletter from '../../axios/newsletter';

const ModalEmail = ({ refs, onClose }) => {
  const [name, setName] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const validate = name => (name && name.length > 2 ? true : false)
  const onChangeInput = e => {
    setName(e.target.value)
  }
   const outsideClick = (e) => {
      e.target.matches('#modal1') && onClose();
   }
  const sendName = async e => {
    e.preventDefault()
    const email = localStorage.getItem("email")

    if (validate(name) && email) {
 
      setError("")
      setSuccess(false)
      setLoading(true)
      setDisabled(true)

      const response = await newsletter(email, name)
  
      if (response.status === 202) {
        setLoading(false)
        setSuccess(true)
        setDisabled(false)
        setName("");
        setTimeout(() => {
           onClose();
           setSuccess(false);
        }, 5000);

      } else {
        setSuccess(false)
        setLoading(false)
        setDisabled(false)
        setError("Network error!")
      }
    } else {

      setLoading(false)
      setSuccess(false)
      setError("Your name is to short!")
    }
  }

  return (
    <div ref={refs} className="modal" id="modal1" data-elem="send-name-modal" onClick={outsideClick}>
      <div className="modal__body text-center">
        <div className="modal__body-inner position-relative">
          <button
            className="btn-close position-absolute modal__close"
            data-elem="send-name-close"
            onClick={()=>{onClose(); setSuccess(false)}}
          >
            <Close />
          </button>
          <figure className="modal__elem-1 modal__elem-1--reverse position-absolute">
            <Elem1 />
          </figure>
          <figure className="modal__elem-2 modal__elem-2--reverse position-absolute d-md-block">
            <Elem2 />
          </figure>
          <p className="modal__decorative decorative">Done!</p>
          <h2 className="modal__title text-center">
            Thank you
            <br /> for signing up
          </h2>
          <p className="modal-list__elem text-center">
            Let us know your name, so we could send you personalized mails.
          </p>
          <form
            className="modal__form position-relative js-form-1 mt-5"
            action=""
            data-elem="send-name-form"
          >
            {loading && (
              <div className="form-spinner" data-elem="spinner">
                <Spinner />
              </div>
            )}
            {success && (
              <p className="form-success" data-elem="success">
                Your name has been sent!
              </p>
            )}
            {error && (
              <p className="form-error" data-elem="error">
                {error}
              </p>
            )}
            <input
              className="js-input-1"
              placeholder="Your name"
              id="input2"
              data-elem="send-name-input"
              value={name}
              onChange={onChangeInput}
              name="send-name-input"
            />
            <button
              className="btn btn--primary js-button-1"
              data-elem="send-name-submit"
              disabled={disabled}
              onClick={sendName}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalEmail
