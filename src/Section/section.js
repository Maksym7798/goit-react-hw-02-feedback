import React from 'react';

function Section(props){
  const { title } = props;
  return(
      <>
        <h2>{title}</h2>
        {props.children}
      </>
    )
}

export default Section