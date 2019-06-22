import axios from 'axios';
class Consultas {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

}

export default Consultas;
