import React from 'react';

const Modal = ({ id="modal", onClose=()=>{}, children })=>{
    // const {children} = props

    const handleOutsideClick = (e)=>{
        if(e.target.id === id){
            onClose();
        }
    }
    return(
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="containerModal">
                <button className="closeModal" onClick={onClose}/>
            <div className="contentModal">{children}</div>
            </div>
        </div>
    );
}

export default Modal;