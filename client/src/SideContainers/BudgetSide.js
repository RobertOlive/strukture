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
            <div className="card budgetSide">

                <div className="card-header">
                <a href="/budget">
                    Remaining Monthly Budget
                </a>
                </div>
                {/* <a className="budgetLink" href="/budget"> */}
                    <div className="card-body budgetBody">
                        <p className="card-text"><h1>{this.props.userData.user? 
                                                    (this.props.userData.user.moneyLeft? 
                                                        ("$" + JSON.stringify(this.props.userData.user.moneyLeft)
                                                    ) : ("$" + JSON.stringify(this.props.userData.user.budget))
                                                ) : ("waiting on info")}</h1></p>
                    </div>
                {/* </a> */}
            </div>
        )
    }
};

export default BudgetSide;