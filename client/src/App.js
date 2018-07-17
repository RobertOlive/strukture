import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainCont from "./components/MainCont";
import Login from "./MainContainers/Login";
import NoMatch from "./MainContainers/NoMatch";
import Todos from "./MainContainers/Todos";
import Budget from "./MainContainers/Budget";
import Calendar from "./MainContainers/Calendar";
import SideCont from "./components/SideCont";
import NoMatchSide from "./SideContainers/NoMatchSide";
import BudgetSide from "./SideContainers/BudgetSide";
import CalendarSide from "./SideContainers/CalendarSide";
import TodosSide from "./SideContainers/TodosSide";


class App extends Component {
  state = {
    currentUser: {
      username: "",
      password: ""
    }
  }


  handleLogin = (userData) => {
    this.setState({currentUser: {username: userData.username, password: userData.password}})
  }


  render() {
    return (
      <Router>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="header"><strong>strukture</strong></div>
            </div>

            <div className="row">
            
              <div className="col-3">
                <SideCont className="leftSide">
                  <Switch>
                    <Route exact path="/" component={NoMatchSide}/>
                    <Route exact path="/todos" component={BudgetSide} onLogin={this.handleLogin}/>
                    <Route exact path="/budget" component={CalendarSide}/>
                    <Route exact path="/calendar" component={TodosSide}/>
                  </Switch>
                </SideCont>
              </div>

              <div className="col">
                <MainCont>
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/todos" component={Todos} />
                    <Route exact path="/budget" component={Budget} />
                    <Route exact path="/calendar" component={Calendar} />
                    {/* <Route exact path="/books/:id" component={Detail} /> */}
                    <Route component={NoMatch} />
                  </Switch>
                </MainCont>
              </div>

              <div className="col-3">
                <SideCont className="rightSide">
                  <Switch>
                    <Route exact path="/" component={NoMatchSide}/>
                    <Route exact path="/todos" component={CalendarSide}/>
                    <Route exact path="/budget" component={TodosSide}/>
                    <Route exact path="/calendar" component={BudgetSide}/>
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
