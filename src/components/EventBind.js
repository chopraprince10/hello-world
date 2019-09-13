import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    //// this Keyword is not working in event HAndler
    // clickHandler(){

    //     console.log(this)
    //     this.setState({
    //         message: "Good Bye"
    //     })
    // }


    clickHandler = () => {
        this.setState({
                    message: "Good Bye"
                })
    }



    //// Methods to Bind Event Handler with Component

    //// 1) In this method on every click component re render which cause performance issue in large applications.
    // render() {
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick = {this.clickHandler.bind(this)}>Click</button>
    //         </div>
    //     )
    // }


    //// 2) Arrow function Approach : It is also cause Performance Issue
    // render() {
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick = {() => this.clickHandler()}>Click</button>
    //         </div>
    //     )
    // }

    //// 3) Bind it with in Constructor : Good Approach
    // render() {
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick = {this.clickHandler}>Click</button>
    //         </div>
    //     )
    // }

    //// 4) create a arrow function >>>> See new arrow function click handler (Class Property As Arrow Functions)
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
