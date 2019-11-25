import axios from 'axios';

class TodoService {

        getAllTodos(username){
            return axios.get(`http://localhost:8080/users/${username}/todos`)
        }

        deleteTodos(username,id){
            return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
        }

        updateTodos(username,id,todo){
            return axios.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
        }

        retriveTodo(username,id){
            return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
        }

        createTodo(username,todo){
            return axios.post(`http://localhost:8080/users/${username}/todos/`,todo)
        }
}

export default new TodoService();