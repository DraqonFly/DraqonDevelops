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
                ? <ul className="list unordered"> {this.applyListDots()}  </ul> 
                : <ol className="list ordered"> {this.props.children} </ol> 
        );
    }
}

export default List;