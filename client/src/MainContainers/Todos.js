import React, {Component} from "react";
import TodoItem from "../components/TodoItem";
import API from "../util/API";


class Todos extends Component {

    addTodo = event => {
        event.preventDefault();
        const task = document.getElementById("task").value,
                location = document.getElementById("location").value,
                cost = document.getElementById("cost").value,
                year = document.getElementById("yearSelect").value,
                month = document.getElementById("monthSelect").value,
                date = document.getElementById("dateSelect").value,
                hour = document.getElementById("hourSelect").value,
                minute = document.getElementById("minuteSelect").value,
                moneyLeftfn = () => {if (this.props.userData.user.moneyLeft) {return this.props.userData.user.moneyLeft - cost} else {return this.props.userData.user.budget - cost}};
        const moneyLeft = moneyLeftfn();
        if (task && year && month && date) {
            const tasktime = new Date(year, month, date, hour, minute);
            API.updateTodo({info: {username: this.props.userData.user.info.username, password: this.props.userData.user.info.password}, todo: {time: tasktime, task: task, cost: cost, location: location}, moneyLeft})
            .then(res=> {
                res.data.todos.sort((a, b)=> {return new Date(a.time) - new Date(b.time)});
                return this.props.loggedIn({user: res.data});
            })
            .catch(err=> console.log(err));
        }
    }

    checkDate = currentDate => {
        return task => {
            let currentDateobj = new Date(currentDate),
                taskDateobj = new Date(task.time);
            if (currentDateobj.getFullYear() === taskDateobj.getFullYear() &&
                currentDateobj.getMonth() === taskDateobj.getMonth() &&
                currentDateobj.getDate() === taskDateobj.getDate()) {
                    return <TodoItem key={task._id} {...this.props} item={task}/>
                }
        }
    }



    render() {
        return (
            <div className="todos">
                <h2 className="todoHead">{this.props.userData.selectedDay}</h2>
                <ul className="list-group list-group-flush">
                    {this.props.userData.user? (
                        this.props.userData.user.todos.map(this.checkDate(this.props.userData.selectedDay))
                    ) : (
                        "Waiting on data..."
                    )}
                </ul>
                <button className="btn btn-primary" data-toggle="modal" data-target="#ModalTodo">Add to-do item</button>


                <div className="modal fade" id="ModalTodo" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
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
                                    <label htmlFor="task">Task</label>
                                    <input className="form-control" id='task' placeholder="What do you need to do?"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input className="form-control" id="location" placeholder="Location" aria-describedby="UserHelp3"/>
                                    <small id="UserHelp3" className="form-text text-muted">Location is optional.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cost">Cost</label>
                                    <input className="form-control" id="cost" placeholder="Cost" aria-describedby="UserHelp4"/>
                                    <small id="UserHelp4" className="form-text text-muted">Please round to the nearest dollar -- Cost is optional.</small>
                                </div>
                                <label htmlFor="todoTime">Time</label>
                                <div className="form-row" id ="todoTime">
                                    <div className="form-group col">
                                        <select id="yearSelect" className="form-control">
                                            <option value ="" selected>Year</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <select id="monthSelect" className="form-control">
                                            <option value='' selected>Month</option>
                                            {[...Array(12)].map((x, i) =>
                                                <option key={i+1} value={i}>{i+1}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <select id="dateSelect" className="form-control">
                                            <option value = '' selected>Date</option>
                                            {[...Array(31)].map((x, i) =>
                                                <option key={i}>{i+1}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <select id="hourSelect" className="form-control">
                                            <option value = '' selected>Hour</option>
                                            {[...Array(24)].map((x, i) =>
                                                <option key={i}>{i}</option>
                                            )}
                                            <option>24</option>
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <select id="minuteSelect" className="form-control">
                                            <option value= '' selected>Min</option>
                                            {[...Array(60)].map((x, i) =>
                                                <option key={i}>{i}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.addTodo} data-dismiss="modal">Submit</button>
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