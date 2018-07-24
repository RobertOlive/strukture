import React, {Component} from "react";
import TodoItem from "../components/TodoItem";

class Todos extends Component {

    componentDidMount () {
        console.log(this.props.userData)
    }

    componentDidUpdate() {
        console.log(this.props.userData.user);
    }

    addTodo () {

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
            <button className="btn btn-primary" data-toggle="modal" data-target="#ModalTodo">Add to-do item</button>

            <div className="modal fade" id="ModalTodo" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">add to-do</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="InputTodo1">Task</label>
                                <input className="form-control" id="InputTodo1" placeholder="What do you need to do?"/>
                            </div>
                            <div className="form-group">
                                <label for="InputTodo2">Location</label>
                                <input className="form-control" id="InputTodo2" placeholder="Location" aria-describedby="UserHelp3"/>
                                <small id="UserHelp3" className="form-text text-muted">Location is optional.</small>
                            </div>
                            <div className="form-group">
                                <label for="InputTodo3">Cost</label>
                                <input className="form-control" id="InputTodo3" placeholder="Cost" aria-describedby="UserHelp4"/>
                                <small id="UserHelp4" className="form-text text-muted">Please round to the nearest dollar -- Cost is optional.</small>
                            </div>
                            <label for="todoTime">Time</label>
                            <div className="form-row" id ="todoTime">
                                <div className="form-group col">
                                    <select id="InputTime1" class="form-control">
                                        <option selected>Year</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <select id="InputTime1" class="form-control">
                                        <option selected>Month</option>
                                        {[...Array(12)].map((x, i) =>
                                            <option key={i+1}>{i+1}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <select id="InputTime1" class="form-control">
                                        <option selected>Date</option>
                                        {[...Array(31)].map((x, i) =>
                                            <option key={i+1}>{i+1}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <select id="InputTime1" class="form-control">
                                        <option selected>Hour</option>
                                        {[...Array(24)].map((x, i) =>
                                            <option key={i}>{i}</option>
                                        )}
                                        <option>24</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <select id="InputTime1" class="form-control">
                                        <option selected>Min</option>
                                        {[...Array(60)].map((x, i) =>
                                            <option key={i}>{i}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.addTodo}>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        )
    }
};

export default Todos;