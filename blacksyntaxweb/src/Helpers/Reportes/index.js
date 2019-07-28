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
        Object.values(Opt).forEach((item,index)=>{
            console.log(item);
            options.push({"value":item.id,"label":index.ciudad});
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
                        console.log("fail in index")
                        return null;
                    } else {
                        console.log(e.data)
                        console.log("Until here evth goes well")

                        return e.data['result'];
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
                return Consultas.getSucursalesBy().then( e => {
                    if(e.data.notFound){
                        console.log("fail in index sucursal")
                        return null;
                    }else{
                        return e.data['result'];
                    }
                }).catch((e) => {
                    return 1;
                });
                break;
            }
            case 'Productos': {
                return Consultas.getProductoCode().then(e => {
                    if (e.data.notFound) {
                        return null;
                    } else {
                        return e.data['result'];
                    }
                }).catch((e) => {
                    return 1;
                });
                break;
            }
            /*case 'Promociones': {
                
                
                return null;
                console.log("Taken")
                break;
            }*/
            case 'Empleados': {
                return Consultas.getEmpleadosPorSucursal().then(e => {
                    if (e.data.notFound) {
                        return null;
                    } else {
                        return e.data['result'];
                    }
                }).catch((e) => {
                    return 1;
                });
                break;
            }
            default :{
                console.log("defaul case is used");
            }
        }
        
        return null;
    }
}


export default ReportesA;


// index es el controlador y se modificará para poder hacer las consultas //crear metodos de consulta 
