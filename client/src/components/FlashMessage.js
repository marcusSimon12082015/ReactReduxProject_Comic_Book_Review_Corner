import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFlashMessages } from '../actions/auth';


const FlashMessage = props => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.auth.messages);
  function handleDelete(){
    dispatch(deleteFlashMessages());
  }
  const { success, error, warning } = messages;

  return(
    <div className="flash_message">
       {success !== "" && <div className="flash_message__success">{success}
       <button onClick={handleDelete} className="close"><span>&times;</span></button>
       </div>}
       {error !== "" && <div className="flash_message__error">{error}
       <button onClick={handleDelete} className="close"><span>&times;</span></button>
       </div>}
       {warning !== "" && <div className="flash_message__warning">{warning}
       <button onClick={handleDelete} className="close"><span>&times;</span></button>
       </div>}
     </div>
  );
}

export default FlashMessage;
