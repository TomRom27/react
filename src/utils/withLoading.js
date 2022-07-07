import React from "react";

// note capital letter in the name of the function - as it returns a component! 
export default function WithLoading(Component) {

    return function WithLoadingComponent({isLoading, ...props}) {
        if (!isLoading) {
            return <Component {...props}/>;
        } else {
            return <p>data is still loading ...</p>;
        }
    }
} 