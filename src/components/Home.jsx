import { Component } from "react";

export default class Home extends Component{
    state = {
        num:0,
    }
    handleIncrement=()=>{
        this.setState({
          num : this.state.num +1
        })
    }
    handleDecrement=()=>{
        this.setState({
            num:this.state.num -1
        })
    }
    handleReset=()=>{
        this.setState({
            num:0
        })
    }
    handleSwitchSign=()=>{
        this.setState({
            num:this.state.num * -1
        })
    }

render(){
    return(
        <>
        <h1>Num :- <span data-testid="count"> {this.state.num}</span></h1>
        <button onClick={this.handleIncrement}>Add</button>
        <button onClick={this.handleDecrement}>Sub</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleSwitchSign}>SwitchSign</button>

        </>
    )
}
}