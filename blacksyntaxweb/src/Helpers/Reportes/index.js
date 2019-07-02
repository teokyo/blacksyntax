import React from "react";
import Consultas from "../Consultas";
class ReportesA {
    static getEncabezado = (valor) => {
        let Encabezado = [];
        // console.log(valor);
        Object.keys(valor[0]).forEach((Frase, index) => {
            Encabezado.push(<td key={index}>{Frase}</td>);
        });
        return Encabezado;
    };
    static getTablaDianmica = (Array) => {
        let Valores = [];
        Object.values(Array).forEach((item, index) => {
            let Valor = [];
            this.getEncabezado(Array).forEach((frase, index) => {
                Valor.push(<td key={index}>{item[frase.props.children]}</td>);
            });
            //   console.log(Valor);
            Valores.push(<tr key={index}>{Valor}</tr>);
        });
        return Valores;
    };

    static getOpciones = (Opt) =>{
    let options = [];
        Opt.forEach((item,index)=>{
            console.log(item);
            options.push({"value":item.id,"label":item.ciudad});
        });
        return options;
    };

    //Ventas

    static getTablaFiltroFechas(FI, FF, CF) {//agregar parametro con switch case para decidir de donde entra la información (ventas,empleados etc) 
        switch (CF) {
            case 'Ventas': {
                let promises = [];
                promises.push(Consultas.getVentasRangoFechas(FI, FF).then(e => {
                    if (e.data.notFound) {
                        return null;
                    } else {
                        console.log(e.data)

                        return e.data['result']
                    }
                }).catch((e) => {
                    return 1;
                    console.log(e)
                }));
                return Promise.all(promises).then(values => {
                    return values[0];
                });
                break;
            }
            case 'Sucusal': {
                Consultas.getSucursalesBy().then( e => {
                    if(e.data.notFound){
                        return null;
                    }else{
                        return e.data['result']
                    }
                }).catch((e) => {
                    return;
                });
                break;
            }
            case 'Productos': {
                Consultas.getProductoCode().then(e => {
                    if (e.data.notFound) {
                        return null;
                    } else {
                        return e.data['result']
                    }
                }).catch((e) => {
                    return 1;
                });
                break;
            }
            case 'Promociones': {
                break;
            }
            case 'Empleados': {
                Consultas.getEmpleadosPorSucursal().then(e => {
                    if (e.data.notFound) {
                        return null;
                    } else {
                        return e.data['result']
                    }
                }).catch((e) => {
                    return 1;
                });
                break;
            }
        }
        return null;
    }
}


export default ReportesA;


// index es el controlador y se modificará para poder hacer las consultas //crear metodos de consulta 
