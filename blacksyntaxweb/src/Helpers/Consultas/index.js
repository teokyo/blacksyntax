import axios from 'axios';
class Consultas {
    static  getCategory=()=> {
        return axios.get('http://localhost:81/blacksyntax/api/sales/recent',{
            responseType: 'json'
        });
    };
    static getVentasID=(id)=>{
        return axios.get('http://localhost:81/blacksyntax/api/sales/venta/'+id,{
            responseType: 'json'
        });
    };
    static getVentasRangoFechas=(FechaI,FechaF)=>{
        return axios.post('http://localhost:81/blacksyntax/api/sales',{
            inicio:FechaI,
            final:FechaF
        },{responseType: 'json'});
    };



}

export default Consultas;
