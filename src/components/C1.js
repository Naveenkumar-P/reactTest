import {Component} from "react";

class C1 extends Component{
    constructor(props){
        super(props);
        this.state = {role:"Engineer",name:"",bool:true};
    }
    handleClick = () =>{
        this.setState({role:"Doctor"})
    }
    handleChange = (event) =>{
        this.setState({name:event.target.value})
    }
    handleSignal = () =>{
        this.setState({bool:!this.state.bool})
    }
    render(){
        return(
            <div>
                <h1>Props value is {this.props.gift}</h1>
                <h1>State value is {this.state.role}</h1>
                <button onClick={this.handleClick}>Change State</button><br/><br/>
                <input placeholder="Enter name" onChange={this.handleChange}/>
                <h2>Your name is : {this.state.name}</h2>
                <button onClick={this.handleSignal}>Signal</button>
                {(this.state.bool)?<h3 style={{color:"green"}}>Go</h3>:<h3 style={{color:"red"}}>Stop</h3>}
            </div>
        )
    }
}
export default C1;