import React from 'react';
import PropTypes from "prop-types";

function PropTypesEx(prop) {


  return (
    <div>

        {prop.arrayProp}
        {prop.stringProp}
        {prop.numberProp}
        
      
    </div>
  )
}

PropTypesEx.propTypes = {
    arrayProp:PropTypes.array,
    stringProp:PropTypes.string,
    numberProp:PropTypes.number
}

PropTypesEx.defaultProps = {
    arrayProp : [1,2,3,4],
    stringProp : "Hello",
    numberProp :10
}

export default PropTypesEx
