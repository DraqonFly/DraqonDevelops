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
            return this.props.listPoints?
            <span key={index} className="listpoint"> <img class="listpointImage" width={25} src="/src/assets/svg/dot.svg"></img> {child} </span> : 
            <span key={index} className="customListPoint"> {child} </span>;
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