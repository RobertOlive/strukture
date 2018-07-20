import React, {Component} from "react";
import TodoItem from "../components/TodoItem";

class Todos extends Component {

    componentDidMount () {
        console.log(this.props.userData)
    }

    componentDidUpdate() {
        console.log(this.props.userData);
    }

    render() {
        return (
        <div className="todos">
            <ul class="list-group list-group-flush">
                {this.props.userData? (
                <TodoItem {...this.props}/>
                ) : (
                    "Waiting on data..."
                )}
            </ul>
        </div>
        )
    }
};

export default Todos;