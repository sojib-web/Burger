import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button  } from 'react-bootstrap';
import './Control.css'

const controls = [
    { label: 'Salad',  type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat',   type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="Container">
            <div className="Label">{props.label}</div>
            <Button  className="btn btn-denger btn-sm m-1" onClick={props.removed}>Less</Button >
             <Button className="btn btn-success btn-sm m-1" onClick={props.added}>More</Button>
           
        </div>
    )
}


const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#D70F64",
                    color: "white"
                }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={ ()=> props.ingredientAdded(item.type)}
                                removed ={ () => props.ingredientRemove(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter><h5>Price: BDT</h5></CardFooter>
            </Card>
        </div>
    )
}

export default Controls;