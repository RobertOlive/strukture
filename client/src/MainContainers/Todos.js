import React, {Component} from "react";
import TodoItem from "../components/TodoItem";

class Todos extends Component {

    componentDidMount () {
        console.log(this.props.userData)
    }

    componentDidUpdate() {
        console.log(this.props.userData.user);
    }

    render() {
        return (
        <div className="todos">
            <ul className="list-group list-group-flush">
                {this.props.userData.user? (
                    this.props.userData.user.todos.map(todo => {
                        return <TodoItem {...this.props} item={todo}/>
                    })
                ) : (
                    "Waiting on data..."
                )}
            </ul>
        </div>
        )
    }
};

export default Todos;