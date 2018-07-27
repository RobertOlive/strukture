import React, {Component} from "react";

class TodoItem extends Component {

    render () {
        const time = new Date(this.props.item.time),
                year = time.getFullYear(),
                month = time.getMonth(),
                day = time.getDate(),
                hour = time.getHours(),
                minute = time.getMinutes();
        return (
            <li className="list-group-item">
                {(this.props.userData.user? 
                    (<div><span className="timeSpan">{month + "/" + day + "/" + year + " " + hour + ":" + minute + " "}</span>
                        <span><strong>Task: </strong>{this.props.item.task} </span>
                        <span><strong>Cost: </strong>{this.props.item.cost} </span>
                        <span><strong>Location: </strong>{this.props.item.location} </span></div>
                    ) : ("Waiting on data..."))}  
            </li>
        )
    }

}

export default TodoItem;