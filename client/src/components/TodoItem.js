import React, {Component} from "react";

class TodoItem extends Component {

    render () {
        const time = new Date(this.props.item.time),
                year = time.getFullYear(),
                month = time.getMonth(),
                day = time.getDate(),
                hour = time.getHours(),
                minute = time.getMinutes() < 10? "0" + time.getMinutes() : time.getMinutes();
        return (
            <li className="list-group-item">
                {(this.props.userData.user? 
                    (<div><span className="timeSpan"><h3>{hour + ":" + minute + " "}<br></br></h3></span>
                        <span className="taskMove"><strong>Task: </strong>{this.props.item.task} <br></br></span>
                        <span className="taskMove"><strong>Cost: </strong>${this.props.item.cost} <br></br></span>
                        <span className="taskMove"><strong>Location: </strong>{this.props.item.location} <br></br></span>
                    </div>
                    ) : ("Waiting on data..."))}  
            </li>
        )
    }

}

export default TodoItem;