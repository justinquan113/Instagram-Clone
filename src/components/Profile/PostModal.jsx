import React from 'react'
import ReactDOM from 'react-dom'
function PostModal(){
    return ReactDOM.createPortal(
        <div className="modal-container">
           
                <p>Modal</p>
        
        </div>
        ,document.getElementById("portal")
    )
}

export default PostModal