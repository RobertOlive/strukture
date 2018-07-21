import React, {Component} from "react";

class TodoItem extends Component {

    componentDidMount() {
        console.log(this.props.item);
    }

    componentDidUpdate() {
        console.log(this.props.item);
    }

    render () {
        return (
            <li className="list-group-item">
                {(this.props.userData.user? 
                    (<div><span>{this.props.item.time}</span>
                        <span>{this.props.item.task}</span>
                        <span>{this.props.item.cost}</span>
                        <span>{this.props.item.location}</span></div>
                    ) : ("Waiting on data..."))}  
            </li>
        )
    }

}

export default TodoItem;