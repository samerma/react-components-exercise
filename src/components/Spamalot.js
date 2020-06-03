import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render() {
        let arr = []
        for (let i = 0; i < 500; i++)
            arr.push(<Spam />)
        return (
            <div id="ex-2">
                {arr}
            </div>
        )
    }
}

export default Spamalot

