import {React} from 'react'
import JsCoder from '../img/JsCoder.png'

// function Modal(props) {
//     return (
//         <div>
//             <img src={props.image} alt="image-modal"/>
//         </div>
//     )
// }
function Modal() {

    
    
    return(
        <div className='modal'>
            <img className='full-img' src={JsCoder} />
        </div>
    )
}

export default Modal