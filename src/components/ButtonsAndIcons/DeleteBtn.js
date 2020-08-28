import React from 'react';

const DeleteBtn = ({children, onClick, onChange, value, DeleteNote, materialIcon, labelId, handleChangeLabel, handleSubmitLabel })=>{
    return(
      <>
      {materialIcon ?  <>
      <form
      // style={{position: "fixed"}}
      //  className="LabelDeleteIcon"
       onClick={handleSubmitLabel}>
      <label
          className={`${materialIcon} LabelDeleteIcon`}
      >delete
          <input
            className="Hide"
            type="submit"
            name="id"
            value={labelId}
            onChange={handleChangeLabel}
          />
      </label>
    </form>
    </> : <>
    <form className="DeleteBtn" onClick={onClick}>
    <label
        className={`${materialIcon}`}
    >{DeleteNote}
        <input
          className="Hide"
          type="submit"
          name="id"
          value={value}
          onChange={onChange}
        />
    </label>
  </form> </> }
  </>

    );
}

      //   <form className="DeleteBtn" onClick={onClick}>
      //   <label
      //       className={`${materialIcon}`}
      //   >{DeleteNote} {materialIcon ? 'delete' : ''}
      //       <input
      //         className="Hide"
      //         type="submit"
      //         name="id"
      //         value={value}
      //         onChange={onChange}
      //       />
      //   </label>
      // </form>

export default DeleteBtn;