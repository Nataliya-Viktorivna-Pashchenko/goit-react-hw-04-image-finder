import React, { useEffect, useCallback } from 'react';
import css from "./Modal.module.css"

export const Modal = ({ closeModal, img }) => {
 
 const handleKeyDown = useCallback(event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  }, [closeModal]);
  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  }, [handleKeyDown]);


  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  
    return (
    <div className={css.Overlay} onClick={handleOverayClick}>
  <div className={css.Modal}>
    <img src= {img} alt="" />
  </div>
</div>
   
    );
  
};