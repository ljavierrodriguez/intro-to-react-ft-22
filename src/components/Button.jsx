import React from 'react';

// Class Component
/* class Button extends React.Component {
    render(){
        return <button>{this.props.text}</button>
    }
} */

function Button(props) {
    return <button className={props.className}>{props.text}</button>
}

export default Button;