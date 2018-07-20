import React, {Component} from "react";

class TodoItem extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props.userData.user.todos);
    }

    render () {
        return (
            <li class="list-group-item">hello</li>
        )
    }

}

export default TodoItem;