import React, {Component} from "react";

class TodosSide extends Component {
    render() {
        return (
            <div className="card todoSide">
                <div className="card-header">
                    <a href="/todos">
                        {new Date().toDateString()}
                    </a>
                </div>
                <div className="card-body">
                    <p><h4>Next Task: </h4></p>

                    {this.props.userData.user? (

                    <h4>{this.props.userData.user.todos[0].task}</h4>

                    ) : (

                    "Waiting on data...")}
                    
                </div>
            </div>
        )
    }
};

export default TodosSide;