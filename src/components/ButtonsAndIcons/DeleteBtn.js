import React from 'react';

const DeleteBtn = ({children, onClick, onChange, value})=>{
    return(
        <form className="DeleteBtn" onClick={onClick}>
        <label
            // className="DeleteBtn"
        >Delete note
            <input
              className="Hide"
              type="submit"
              name="id"
              value={value}
              onChange={onChange}
            />
        </label>
      </form>
    );
}

export default DeleteBtn;