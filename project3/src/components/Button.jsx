import React from 'react'
import Styled  from 'styled-components';

const Button = (props) => {
  return (
    <button>
        {props.text}
      {props.isLoading && <span>Loading...</span>}
    </button>
  );
}

export default Button