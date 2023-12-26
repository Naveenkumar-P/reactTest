import { Component } from "react";
import C3 from "./C3";

class C2 extends Component{
    constructor(){
        super();
        console.log("I am constructor of C2");
        this.state = {brand:"Nike", toggle: true};
    }
    static getDerivedStateFromProps(){
        console.log("I am getDerivedStateFromProps method");
        return null;
    }
    componentDidMount(){
        console.log("I am componentDidMount method");
    }
    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate method");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }
    componentDidUpdate(){
        console.log("I am componentDidUpdate method");
    }
    render(){
        console.log("I am a render method");
        return(
            <div>
                <h1>LifeCycle Methods</h1>
                <p>{this.state.brand}</p>
                <button onClick={()=>{this.setState({brand:"Adidas"})}}>Click</button>
                {
                    (this.state.toggle) ? <C3/> : null
                }
                <button onClick={()=>{this.setState({toggle:false})}}>Unmount</button>
            </div>
        )
    }
}
export default C2;