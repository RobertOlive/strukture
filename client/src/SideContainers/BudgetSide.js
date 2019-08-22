import React, {Component} from "react";

class BudgetSide extends Component {

    render() {
        return (
            <div className="card budgetSide">

                <div className="card-header">
                    <a href="/budget">
                        Remaining Monthly Budget
                    </a>
                </div>
                <div className="card-body budgetBody">
                    {/* <p> */}
                        <h1 className="card-text">
                            {this.props.userData.user? (

                            "$" + JSON.stringify(this.props.userData.user.moneyLeft)

                            ) : (
                                    
                            "waiting on info")}
                        </h1>
                    {/* </p> */}
                </div>
            </div>
        )
    }
};

export default BudgetSide;