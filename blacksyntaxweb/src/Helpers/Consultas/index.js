import axios from 'axios';
class Consultas {
    static  getCategory=()=> {
        return axios.get('http://192.168.0.21/blacksyntax/api/sales/recent',{
            responseType: 'json'
        });
    }

}

export default Consultas;
