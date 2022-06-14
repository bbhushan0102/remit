import react, { Children } from 'react'
import '../../css/modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Modal ( {children, show, close}){
    // if (!show) return null
    return (
        <div className='modal'>
            <div className='modal_content'>
            {/* <i className='fa fa-times' onClick={close}/> */}
                   <FontAwesomeIcon icon = { faTimes } onClick={close}  />
                   { children }
                

            </div>
            

        </div>
    )
}
export default Modal;