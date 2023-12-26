import "../../src/App.css";
function Header1() {
    const myStyle={
        color:"green",
        backgroundColor:"yellow"
    }
    return(
        <div className="bg-dark text-center text-light p-3">
            <h1 style={{color:"red"}}>Shoppy Website</h1>
            <h2 style={myStyle}>Low cost.. More Products</h2>
            <p id="i1">Explore more... Various Products</p>
        </div>
    )
}
export default Header1;