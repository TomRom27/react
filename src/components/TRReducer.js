import React, { useReducer, useRef} from 'react';
import useCopyToClipboard from '../utils/useCopyToClipboard';
// the below i.e. import can be done 'cause we're using React >= 16.3 and react-scripts > 2 (?)  
import { ReactComponent as SuccessIcon }  from './../svg/checkmark.svg' 
import { ReactComponent as ClipboardIcon }  from './../svg/clipboard.svg' 



function init(initialCount) {
    return {count:initialCount}
}

function reducer(state, action) {
    switch(action.type) {
        case 'inc':
            return {count: state.count +1 };
        case 'dec':
            return {count: state.count -1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}



export default function TRReducer({initialCount=0}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    
    const [isCopied, handleCopy] = useCopyToClipboard(3000);
    const textAreaRef = useRef(null);


    return (
        <>
        Count: {state.count}
        <button
            onClick={() => dispatch({type:'reset', payload:initialCount})}>
            Reset
        </button>
        <button onClick={() => dispatch({type:'inc'})}> + </button>
        <button onClick={() => dispatch({type:'dec'})}> - </button>
        <div>
            <textarea ref={textAreaRef} defaultValue={"Text goes here"}/>
                <button onClick= {() => handleCopy(textAreaRef.current.value)  }>
                    {isCopied ? <SuccessIcon width="2rem"/>
                                : <ClipboardIcon width="2rem"/>} 

            </button>      
        </div>
        </>
    )
}
