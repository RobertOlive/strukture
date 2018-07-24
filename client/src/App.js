import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MainCont from "./components/MainCont";
import Login from "./MainContainers/Login";
import NoMatch from "./MainContainers/NoMatch";
import Todos from "./MainContainers/Todos";
import Budget from "./MainContainers/Budget";
import MainCalendar from "./MainContainers/MainCalendar";
import SideCont from "./components/SideCont";
import NoMatchSide from "./SideContainers/NoMatchSide";
import BudgetSide from "./SideContainers/BudgetSide";
import CalendarSide from "./SideContainers/CalendarSide";
import TodosSide from "./SideContainers/TodosSide";


class App extends Component {
  state = {

  }

  componentDidMount() {
    let userInfo = JSON.parse(sessionStorage.getItem("user"));
    this.setState(userInfo);
    console.log(this.state);
  }

  componentDidUpdate() {
    if (this.state.user) {
      document.getElementById("username").innerHTML = this.state.user.info.username;
    }
    console.log(this.state);
  }

  handleLogin = (userData) => {
    this.setState(userData)
    console.log(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  }



  render() {
    return (
      <Router>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="header">
                <strong>strukture</strong>
                <div id="username"></div>
              </div>
            </div>

            <div className="row">
            
              <div className="col-3">
                <SideCont className="leftSide">
                  <Switch>

                    <Route exact path="/" render={props => (
                      this.state.user ? (
                        <Redirect to="/todos" userData={this.state}/>
                      ) : (
                        <NoMatchSide {...props} userData={this.state}/>
                      )
                    )}/>

                    <Route exact path="/todos" render={props => <BudgetSide {...props} userData={this.state}/>}/>
                    <Route exact path="/budget" render={props => <CalendarSide {...props} userData={this.state}/>}/>
                    <Route exact path="/calendar" render={props => <TodosSide {...props} userData={this.state}/>}/>
                  </Switch>
                </SideCont>
              </div>

              <div className="col">
                <MainCont>
                  <Switch>

                    <Route exact path="/" render={props => (
                      this.state.user ? (
                        <Redirect to="/todos" userData={this.state}/>
                      ) : (
                        <Login {...props} loggedIn={this.handleLogin} userData={this.state}/>
                      )
                    )}/>
                    
                    <Route exact path="/todos" render={props => <Todos {...props} loggedIn={this.handleLogin} userData={this.state}/>} />
                    <Route exact path="/budget" render={props => <Budget {...props} userData={this.state}/>}/>
                    <Route exact path="/calendar" render={props => <MainCalendar {...props} userData={this.state}/>}/>
                    <Route component={NoMatch} />
                  </Switch>
                </MainCont>
              </div>

              <div className="col-3">
                <SideCont className="rightSide">
                  <Switch>

                  <Route exact path="/" render={props => (
                      this.state.user ? (
                        <Redirect to="/todos" userData={this.state}/>
                      ) : (
                        <NoMatchSide {...props} userData={this.state}/>
                      )
                    )}/>

                    <Route exact path="/todos" render={props => <CalendarSide {...props} userData={this.state}/>}/>
                    <Route exact path="/budget" render={props => <TodosSide {...props} userData={this.state}/>}/>
                    <Route exact path="/calendar" render={props => <BudgetSide {...props} userData={this.state}/>}/>
                  </Switch>
                </SideCont>
              </div>

            </div>

            <div className="row">
              <div className="footer">
                <div className="about"><a href="#">About</a></div>
                <div className="copyright"><a href="#">Copyright</a></div>
              </div>
            </div>
          </div>
        </div>
    </Router>
    );
  }
}

export default App;
