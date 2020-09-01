import React, { useState } from 'react';

const IconsColors = ({ onChangeBgColor }) => {
  const [
    backgroundColor,
    // setBackgroundColor
  ] = useState();
  return (
    <>
      <div className='GroupColors'>
        <label
          // htmlFor="paletteColors"
          className='DefaultWhite'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#fff'
            checked={backgroundColor === '#fff'}
            className='DefaultWhite'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Red'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#f28b82'
            checked={backgroundColor === '#f28b82'}
            className='Red'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Orange'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#fbbc04'
            checked={backgroundColor === '#fbbc04'}
            className='Orange'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Yellow'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#fff475'
            checked={backgroundColor === '#fff475'}
            className='Yellow'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <br />

        <label
          // htmlFor="paletteColors"
          className='Green'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#ccff90'
            checked={backgroundColor === '#ccff90'}
            className='Green'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Teal'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#a7ffeb'
            checked={backgroundColor === '#a7ffeb'}
            className='Teal'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Blue'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#cbf0f8'
            checked={backgroundColor === '#cbf0f8'}
            className='Blue'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='DarkBlue'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#aecbfa'
            checked={backgroundColor === '#aecbfa'}
            className='DarkBlue'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <br />

        <label
          // htmlFor="paletteColors"
          className='Purple'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#d7aefb'
            checked={backgroundColor === '#d7aefb'}
            className='Purple'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Pink'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#fdcfe8'
            checked={backgroundColor === '#fdcfe8'}
            className='Pink'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Brown'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#e6c9a8'
            checked={backgroundColor === '#e6c9a8'}
            className='Brown'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>

        <label
          // htmlFor="paletteColors"
          className='Gray'
        >
          <input
            // id="paletteColors"
            type='radio'
            name='background_color'
            value='#e8eaed'
            checked={backgroundColor === '#e8eaed'}
            className='Gray'
            // onChange={catchColor}
            onChange={onChangeBgColor}
          />
        </label>
      </div>
    </>
  );
};

export default IconsColors;
