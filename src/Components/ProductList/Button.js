function Button(props){
    return (<button onClick={props.eventHandler} disabled={props.disable}className="btn btn-primary">{props.children}</button>);
}

export default Button;