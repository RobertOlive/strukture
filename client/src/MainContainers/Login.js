import React, {Component} from "react";
import API from "../util/API";

class Login extends Component {

    newUserCreate = event => {
        event.preventDefault();
        const newUsername = document.getElementById("InputUser2").value;
        const newPass = document.getElementById("InputPassword2").value;
        const newPassConf = document.getElementById("InputPassword3").value;
        const newBudget = document.getElementById("newBudget").value;
        if (newUsername && newPass && newPassConf && newBudget) {
            if (newPass === newPassConf) {
                API.createUser({username: newUsername, password: newPass, budget: newBudget})
                    .then((res) => {
                        console.log(res.data);
                        this.props.loggedIn({user: res.data});
                    })
                    .catch(err => console.log(err));
            }
        }
    };

    userLogin = event => {
        event.preventDefault();
        const currentUsername = document.getElementById("InputUser1").value;
        const currentPassword = document.getElementById("InputPassword1").value;
        if (currentUsername && currentPassword) {
            API.getUser({username: currentUsername, password: currentPassword})
            .then((res) => {
                console.log(res.data);
                this.props.loggedIn({user: res.data[0]});
            })
            .catch(err => console.log(err));
        }
    };

    render () {
        return (
    <div className="login">
        <div className="welcome">Welcome to strukture! <a className="introLinks" href="#" data-toggle="modal" data-target="#ModalLogin">Login</a> or <a className="introLinks" href="#" data-toggle="modal" data-target="#ModalSignUp">sign up</a> here.</div>

        <div className="intro">Everyone needs a little strukture in their life. Make your life simpler by scheduling your day, planning your month, and easily creating a budget.</div>





        <div className="modal fade" id="ModalLogin" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">strukture login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="InputUser1">Username</label>
                            <input className="form-control" id="InputUser1" aria-describedby="UserHelp" placeholder="Enter Username"/>
                            <small id="UserHelp1" className="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.userLogin} data-dismiss="modal">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="ModalSignUp" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">strukture account creation</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="InputUser2">Username</label>
                            <input className="form-control" id="InputUser2" aria-describedby="UserHelp" placeholder="Enter Username"/>
                            <small id="UserHelp2" className="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword2">Password</label>
                            <input type="password" className="form-control" id="InputPassword2" aria-describedby="UserHelp2" placeholder="Password"/>
                            <small id="UserHelp2" className="form-text text-muted">Please make sure that both passwords match.</small>

                        </div>
                        <div className="form-group">
                            <label for="InputPassword3">Confirm Password</label>
                            <input type="password" className="form-control" id="InputPassword3" placeholder="Confirm Password"/>
                        </div>

                        <br/>Set your monthly budget! Round to the nearest dollar.

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input id="newBudget" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                        <button type="submit" onClick={this.newUserCreate} className="btn btn-primary" data-dismiss="modal">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
};

export default Login;