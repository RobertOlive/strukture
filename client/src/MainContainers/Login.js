import React, {Component} from "react";

class Login extends Component {
    state = {
        newUser: {
            username: "",
            password: "",
            passConf: "",
            budget: ""
        },
        currentUser: {
            username: "",
            password: ""
        }
    }

    newUserCreate = event => {
        event.preventDefault();
        const newUsername = document.getElementById("InputUser2").innerHTML;
        const newPass = document.getElementById("InputPassword2").innerHTML;
        const newPassConf = document.getElementById("InputPassword3").innerHTML;
    }

    render () {
        return (
    <div className="login">
        <div>Welcome to strukture! <a href="#" data-toggle="modal" data-target="#ModalLogin">Login</a> or <a href="#" data-toggle="modal" data-target="#ModalSignUp">sign up</a> here.</div>

        <div>Everyone needs a little strukture in their life. Make your life simpler by scheduling your day, planning your month, and easily creating a budget.</div>





        <div class="modal fade" id="ModalLogin" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">strukture login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="InputUser1">Username</label>
                            <input type="email" class="form-control" id="InputUser1" aria-describedby="UserHelp" placeholder="Enter Username"/>
                            <small id="UserHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ModalSignUp" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">strukture account creation</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="InputUser2">Username</label>
                            <input type="email" class="form-control" id="InputUser2" aria-describedby="UserHelp" placeholder="Enter Username"/>
                            <small id="UserHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword2">Password</label>
                            <input type="password" class="form-control" id="InputPassword2" aria-describedby="UserHelp2" placeholder="Password"/>
                            <small id="UserHelp2" class="form-text text-muted">Please make sure that both passwords match.</small>

                        </div>
                        <div class="form-group">
                            <label for="InputPassword3">Confirm Password</label>
                            <input type="password" class="form-control" id="InputPassword3" placeholder="Confirm Password"/>
                        </div>

                        <br/>Set your monthly budget! Round to the nearest dollar.

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
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