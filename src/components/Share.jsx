import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";


const  Share = () => {

    let [css__class, css__classV] = useState("hide");
    const Show = () => {
        css__classV(css__class = "hide");
        }

    return ( 
        <div className={css__class}>
                 <div className="Share">
                     <div className="Share__header" >
                         <h2 className="Share__title">Compartir</h2>
                         <i className="bi bi-x-square" onClick={Show}></i>
                     </div>
                     <div className="Share__contents">
                         <img src="/img/undraw_page_not_found_re_e9o6__estarlincito.svg" alt="" className="Share__img"/>
                         <div>
                             <h3 className="Share__subtiitle">soporte tecnico</h3>
                             <p>Txtssoporte tecnico</p>
                         </div>
                     </div>

                     <div className="Share__link">
                         <input type="text" placeholder="url" className="Share__input"/>
                         <Link to="/" className="hare__input--bi"><i className="bi bi-clipboard"></i>Copiar link</Link>
                         <Link to="/" className="hare__input--bi"><i className="bi bi-envelope"></i>Compartir via email</Link>
                         <Link to="/" className="hare__input--bi"><i className="bi bi-whatsapp"></i>compartir via wa</Link>
                     </div>
                 </div>
            </div> 
    );
}
 
export default Share;









// class Share extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
    
//     render() {

//         const Show = () => {
  
//         }

//         return (
//             <div className="Share__container">
//                 <div className="Share">
//                     <div className="Share__header" >
//                         <h2 className="Share__title">Compartir</h2>
//                         <i className="bi bi-x-square" onClick={Show}></i>
//                     </div>
//                     <div className="Share__contents">
//                         <img src="/img/undraw_page_not_found_re_e9o6__estarlincito.svg" alt="" className="Share__img"/>
//                         <div>
//                             <h3 className="Share__subtiitle">soporte tecnico</h3>
//                             <p>Txtssoporte tecnico</p>
//                         </div>
//                     </div>

//                     <div className="Share__link">
//                         <input type="text" placeholder="url" className="Share__input"/>
//                         <Link to="/" className="hare__input--bi"><i className="bi bi-clipboard"></i>Copiar link</Link>
//                         <Link to="/" className="hare__input--bi"><i className="bi bi-envelope"></i>Compartir via email</Link>
//                         <Link to="/" className="hare__input--bi"><i className="bi bi-whatsapp"></i>compartir via wa</Link>
//                     </div>
//                 </div>
//         </div> 
//         );
//     }
// }

// export default Share;