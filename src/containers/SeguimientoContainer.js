import React, { Component } from 'react';
import { Table, Tooltip, Button } from 'antd';

const Column = Table.Column;

class SeguimientoContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 467829, type: "Fallas en servicio", description: "Texto que se mostrara en el tooltip", creationDate: "04/07/2019", updateDate: "08/07/2019", status: "FINISHED" },
                { id: 462746, type: "Capacitacion", description: "Texto que se mostrara en el tooltip", creationDate: "09/10/2019", updateDate: "10/10/2019", status: "RECEIVED" },
                { id: 462746, type: "Reemplazo equipamiento", description: "Texto que se mostrara en el tooltip", creationDate: "05/10/2019", updateDate: "07/10/2019", status: "IN PROGRESS" }
            ]
        }
    }

    getColor(status){
        if(status ==="FINISHED"){
            return "#43af43"
        }else if(status ==="IN PROGRESS"){
            return "#5656da"
        }else{
            return "#00bcd4"
        }
    }
    render() {
        return (
            <div style={{padding:40}}>
                <Table dataSource={this.state.data} pagination={true} size='small' bordered={true} rowKey="id" scroll={{ x: 'max-content' }}>
                    <Column align='center' key='nReclamo' title='Nº Reclamo' dataIndex='id' />
                    <Column align='center' key='type' title='Solicitud' dataIndex='type' />
                    <Column align='center' key='status' title='Status' render={ data =>{
                        return <b style={{color:this.getColor(data.status)}}>{data.status}</b>
                    }
                    }/>
                    <Column align='center' key='description' title='Descripcion' render={data => {
                        return <Tooltip placement="top" title={data.description}> <u style={{cursor:'pointer', color:'blue'}}>Mostrar mas...</u> </Tooltip>
                    }} />
                    <Column align='center' key='creation' title='Fecha Creacion' dataIndex='creationDate' />
                    <Column align='center' key='update' title='Utlima Actualizacion' dataIndex='updateDate' />
                    <Column align='center' key='actions' title="Acciones" render={data => {
                        return (
                            <React.Fragment>
                                <Button icon="customer-service" style={{marginRight:10}} type='primary' title="Contactar con Soporte"/>  
                                <Button icon="unordered-list" title="Detalles"/>
                            </React.Fragment>
                        )
                    }} 
                    />
                </Table>

            </div>
        );
    }
}

export default SeguimientoContainer;