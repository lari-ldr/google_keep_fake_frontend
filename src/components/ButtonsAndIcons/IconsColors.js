import React, {useState} from 'react';

  const DefaultWhite = {
    backgroundColor: '#fff',
    // border: '2px solid #e0e0e0'
  }
  const Red = {
    backgroundColor: '#f28b82',
    // border: '2px solid #f28b82'
  }
  const Orange = {
    backgroundColor: '#fbbc04',
    // border: '2px solid #fbbc04'
  }
  const Yellow = {
    backgroundColor: '#fff475',
    // border: '2px solid #fff475'
  }
  const Green = {
    backgroundColor: '#ccff90',
    // border: '2px solid #ccff90'
  }
  const Teal = {
    backgroundColor: '#a7ffeb',
    // border: '2px solid #a7ffeb'
  }
  const Blue = {
    backgroundColor: '#cbf0f8',
    // border: '2px solid #cbf0f8'
  }
  const DarkBlue = {
    backgroundColor: '#aecbfa',
    // border: '2px solid #aecbfa'
  }
  const Purple = {
    backgroundColor: '#d7aefb',
    // border: '2px solid #d7aefb'
  }
  const Pink = {
    backgroundColor: '#fdcfe8',
    // border: '2px solid #fdcfe8'
  }
  const Brown = {
    backgroundColor: '#e6c9a8',
    // border: '2px solid #e6c9a8'
  }
  const Gray = {
    backgroundColor: '#e8eaed',
    // border: '2px solid #e8eaed'
  }


const IconsColors=({ handleColor })=>{
  
  const catchColor = (event)=>{
    // console.log(event.target.style.backgroundColor)
    const theColor = event.target.style.backgroundColor
    handleColor(theColor)
  }
    return(
        <>
        <ul className="GroupColors">
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
        </ul>


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