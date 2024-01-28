import React, {useRef, Ref, useEffect} from 'react'
import { IoIosClose } from "react-icons/io";
import style from "./modal.module.scss"
import { useClickOutside } from '../../hooks/useClickOutside';

const Modal = ({children, setModalOpen, modalOpen }) => {

const modalRef = useRef()

const closeModal =(e)=>{
if(modalRef.current && !modalRef.current.contains(e.target)){
  setModalOpen(false)
} 
  
}

useEffect(()=>{
  document.addEventListener("mousedown", closeModal);
  return () =>{
    document.removeEventListener("mousedown", closeModal);
  }
}, [] )
 


  return (
  
     <div    className={modalOpen ? style.modal : style.close}>
      
      <div ref={modalRef} className={style.modal__inner}>
      <IoIosClose onClick={()=>  setModalOpen(false)} className={style.modal__inner__close} />
         
         <div className={style.modal__item}>
          {children}
         </div>
         <div className={style.modal__item}>
          <button onClick={()=>  setModalOpen(false)} className="button pay-btn" >закрыть</button>
          </div>
      </div>
    </div>
   
   
  )
}

export default Modal