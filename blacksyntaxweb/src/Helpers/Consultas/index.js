import axios from 'axios';
class Consultas {
    static getVentas = () => {
        return axios.get('http://cuernavaca.xyz/sales/recent', {
            responseType: 'json'
        });
    };
    static getVentasID = (id) => {
        return axios.get('http://cuernavaca.xyz/sales/venta/' + id, {
            responseType: 'json'
        });
    };
    static getVentasRangoFechas = (FechaI, FechaF) => {
        return axios.post('http://cuernavaca.xyz/sales', {
            inicio: FechaI,
            final: FechaF
        }, { responseType: 'json' });
    };
    
    static getProductoCode = (code) => {
        return axios.get('http://cuernavaca.xyz/products/code/' + code, {
            responseType: 'json'
        });
    };

    static getPrombyIdLab = (id) => {
        return axios.get('http://cuernavaca.xyz/promotions/lab/' + id, {
            responseType: 'json'
        });
    }

    static getPrombyId = (id) => {
        return axios.get('http://cuernavaca.xyz/promotions/pro/' + id, {
            responseType: 'json'
        });
    }

    static getEmpleadosPorSucursal = (id) => {
        return axios.get('http://cuernavaca.xyz/...'+id, {
            responseType: 'json'
        });
    }
    static getSucursalesBy = () => {
        return axios.get('http://cuernavaca.xyz/',{
            responseType: 'json'
        });
    }

    static getDoctores = () => {
        return axios.get("http://cuernavaca.xyz/doctors",{
            responseType: 'json'
        });
    }

}



export default Consultas;
