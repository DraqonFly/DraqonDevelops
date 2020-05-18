import React, {Component} from "react";

class List extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    applyListDots = () => {
        return [...this.props.children].map( (child, index) => {
            return <span key={index} className="customListPoint"> <img width={25} src="/src/svg/dot.svg"></img> {child} </span>;
        })
    }

    render(){
        return(
            this.props.isOrdered == false
                ? <ul className={String(this.props.class) === "undefined" ? "list unordered" : "list unordered "+this.props.class}> {this.applyListDots()}  </ul> 
                : <ol className={String(this.props.class) === "undefined" ? "list ordered" : "list ordered "+this.props.class}> {this.props.children} </ol> 
        );
    }
}

export default List;