import React, {useState} from 'react';

// const chooseColors = {
//   defaultWhite: '#fff', 
//   red: '#f28b82',
//   orange: '#fbbc04',
//   yellow: '#fff475',
//   green: '#ccff90',
//   teal: '#a7ffeb',
//   blue: '#cbf0f8',
//   darkBlue: '#aecbfa',
//   purple: '#d7aefb',
//   pink: '#fdcfe8',
//   brown: '#e6c9a8',
//   gray: '#e8eaed'
// }


const IconsColors=({onChangeBgColor})=>{
  
  const [backgroundColor, setBackgroundColor] = useState()
  
  // const catchColor = (event)=>{
  //   const {value, type, name, checked} = event.target
  //   // console.log(value)
  //   // console.log(checked)
  //   const theColor = value
  // }
  return(
<>

<div className="GroupColors">


  <label
  // htmlFor="paletteColors"
  className="DefaultWhite"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#fff"
  checked={backgroundColor === "#fff"}
  className="DefaultWhite"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Red"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#f28b82"
  checked={backgroundColor === "#f28b82"}
  className="Red"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Orange"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#fbbc04"
  checked={backgroundColor === "#fbbc04"}
  className="Orange"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Yellow"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#fff475"
  checked={backgroundColor === "#fff475"}
  className="Yellow"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>


<br/>


  <label
  // htmlFor="paletteColors"
  className="Green"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#ccff90"
  checked={backgroundColor === "#ccff90"}
  className="Green"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Teal"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#a7ffeb"
  checked={backgroundColor === "#a7ffeb"}
  className="Teal"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Blue"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#cbf0f8"
  checked={backgroundColor === "#cbf0f8"}
  className="Blue"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="DarkBlue"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#aecbfa"
  checked={backgroundColor === "#aecbfa"}
  className="DarkBlue"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>


<br/>


  <label
  // htmlFor="paletteColors"
  className="Purple"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#d7aefb"
  checked={backgroundColor === "#d7aefb"}
  className="Purple"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Pink"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#fdcfe8"
  checked={backgroundColor === "#fdcfe8"}
  className="Pink"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Brown"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#e6c9a8"
  checked={backgroundColor === "#e6c9a8"}
  className="Brown"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>
  
  <label
  // htmlFor="paletteColors"
  className="Gray"
  >
  <input
  // id="paletteColors"
  type="radio"
  name="background_color"
  value="#e8eaed"
  checked={backgroundColor === "#e8eaed"}
  className="Gray"
  // onChange={catchColor}
  onChange={onChangeBgColor}
  />
  </label>


</div>

        {/* <ul className="GroupColors">
          <li
            style={DefaultWhite}
            className="DefaultWhite"
            onClick={catchColor}
          ></li>
          <li
            style={Red}
            className="Red"
            onClick={catchColor}
          ></li>
          <li
            style={Orange}
            className="Orange"
            onClick={catchColor}
          ></li>
          <li
            style={Yellow}
            className="Yellow"
            onClick={catchColor}
          ></li>
        </ul>

        <ul className="GroupColors">
          <li
            style={Green}
            className="Green"
            onClick={catchColor}
          ></li>
          <li
            style={Teal}
            className="Teal"
            onClick={catchColor}
          ></li>
          <li
            style={Blue}
            className="Blue"
            onClick={catchColor}
          ></li>
          <li
            style={DarkBlue}
            className="DarkBlue"
            onClick={catchColor}
          ></li>
        </ul>

        <ul className="GroupColors">
          <li
            style={Purple}
            className="Purple"
            onClick={catchColor}
          ></li>
          <li
            style={Pink}
            className="Pink"
            onClick={catchColor}
          ></li>
          <li
            style={Brown}
            className="Brown"
            onClick={catchColor}
          ></li>
          <li
            style={Gray}
            className="Gray"
            onClick={catchColor}
          ></li>
        </ul> */}


        </>
    );
}


{/* <form>

  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={DefaultWhite}
    // checked={}
    className="DefaultWhite"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Red}
    className="Red"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Orange}
    className="Orange"
   />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Yellow}
    className="Yellow"
   />

<br/>

  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Green}
    className="Green"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Teal}
    className="Teal"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Blue}
    className="Blue"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={DarkBlue}
    className="DarkBlue"
  />

<br/>

  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Purple}
    className="Purple"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Pink}
    className="Pink"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Brown}
    className="Brown"
  />
  <input
    aria-label="true"
    type="radio"
    name="background_color"
    value={Gray}
    className="Gray"
  />

</form> */}

export default IconsColors;