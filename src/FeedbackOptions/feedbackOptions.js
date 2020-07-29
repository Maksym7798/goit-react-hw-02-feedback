import React from 'react';

function FeedbackOptions ({options, onLeaveFeedback}){
    return(
        <>
        {options.map(e => (<button key={e} onClick={() => onLeaveFeedback(e)}>{e}</button>))}
        </>
    )    
}
export default FeedbackOptions