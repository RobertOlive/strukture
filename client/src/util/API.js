import axios from "axios";

export default {
    // User routing --- Create user, retrieve user data (includes to-dos), update budget
    createUser: userData => {
        return axios.post("/api/users", userData);
    },
    getUser: userData => {
        console.log("got here", userData)
        return axios.get("/api/users/" + userData.username, {params: userData})
    },
    updateTodo: userData => {
        return axios.put("/api/users/" +userData.username, userData);
    }

    // working on this: need to be able to update the budget
    // updateBudget: (id) => {
    //     return axios.put("/api/users/" + id)
    // },
}