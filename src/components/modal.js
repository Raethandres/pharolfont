import React from "react";
const Modal = ({ handleClose, show, children }) => {
   
  return (
    <div className={show ? "modal display-block" : "modal display-none"} onClick={handleClose}>
      <section className="modal-main" >
        {children}
      </section>
    </div>
  );
};
export default Modal;
