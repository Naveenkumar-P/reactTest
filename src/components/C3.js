import { Component } from "react";

class C3 extends Component{
    componentWillUnmount(){
        console.log("I am a componentWillUnmount method");
    }
    render(){
        return(
            <div>
                <h1>C3 Component will be removed</h1>
            </div>
        )
    }
}
export default C3;