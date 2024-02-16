import React, {Component} from "react";

class ClassClick extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
    }

    // clickHandler(){
    //    this.setState = {
    //     message: 'GoodBye!!' 
    //    }
    // }

    clickHandler = (() => {
        this.setState ({
            message: 'Goodbye!!'
        })
    })
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick;