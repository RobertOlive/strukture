import React, {Component} from "react";

class BudgetSide extends Component {
    

    componentDidMount() {
        // console.log(this.props.userData.user.budget);
    }

    componentDidUpdate() {
        console.log(this.props.userData.user.budget);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Remaining Monthly Budget
                </div>
                <div className="card-body">
                    <p className="card-text"><h1>{this.props.userData.user? 
                                                (this.props.userData.user.moneyLeft? 
                                                    ("$" + JSON.stringify(this.props.userData.user.moneyLeft)
                                                ) : ("$" + JSON.stringify(this.props.userData.user.budget))
                                            ) : ("waiting on info")}</h1></p>
                </div>
            </div>
        )
    }
};

export default BudgetSide;