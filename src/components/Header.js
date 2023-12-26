function Header(props){ //props is object {name:Ethnus}
    return(
        <div>
            <h1>Header {props.name}</h1> 
        </div>
    )
}//Inside html try to inser javascript use {}

export function Footer(props){
    return(
        <div>
            <h1>Footer {props.brand}</h1>
        </div>
    )
}
export default Header;