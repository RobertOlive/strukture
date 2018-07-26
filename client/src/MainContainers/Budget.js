import React, {Component} from "react";

class Budget extends Component {

    moneySpent = () => {
        return this.props.userData.user.budget - this.props.userData.user.moneyLeft
    }
    
    averageSpent = () => {
        const currentDay = new Date(),
                currentYear = currentDay.getYear(),
                currentMonth = currentDay.getMonth(),
                currentNumofDays = new Date(currentYear, currentMonth, 0).getDate();
        return (this.moneySpent() / currentNumofDays).toFixed(2);
    }

    render() {
        return (
            <div className="budget">
                <h2 className="budgetHead">Your Budget</h2>
                {this.props.userData.user? (
                        <div>
                            <div className="budgetContainer">
                                <h4>Your Monthly Budget is: </h4>
                                <div>
                                    <h1 className="budgetMoney">${this.props.userData.user.budget}</h1>
                                </div>
                            </div>
                            <div className="budgetContainer">
                                <h4>You have spent </h4>
                                <div>
                                    <h1 className="budgetMoney">${this.moneySpent()}.00</h1>
                                </div>
                                 <h4>of your budget, at an average of </h4>
                                <div>
                                    <h1 className="budgetMoney">${this.averageSpent()}</h1>
                                </div>
                                <h4>per day. </h4>
                            </div>
                            <div className="budgetContainer">
                                <h4>You have </h4>
                                <div>
                                    <h1 className="budgetMoney">${this.props.userData.user.moneyLeft}</h1>
                                </div>
                                <h4>left this month to spend. </h4>
                            </div>
                        </div>
                ) : (
                    "Waiting on data..."
                )}

            </div>
        )
    }
};

export default Budget;