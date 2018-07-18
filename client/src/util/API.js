import axios from "axios";

export default {
    // User routing --- Create user, retrieve user data (includes to-dos), update budget
    createUser: (userData) => {
        return axios.post("/api/users", userData);
    },
    getUser: (userData) => {
        console.log("got here, ", userData)
        return axios.get("/api/users/" + userData.username)
    },
    updateBudget: (id) => {
        return axios.put("/api/users/" + id)
    },
    // 
    // 
    // 
    // To-do routing --- Create to-do, update to-do, and delete
    createTodo: (id) => {
        return axios.post("/api/users/todos/" + id)
    },
    updateTodo: (id) => {
        return axios.put("/api/users/todos/" + id)
    },
    deleteTodo: (id) => {
        return axios.delete("/api/users/todos/" + id)
    }
}