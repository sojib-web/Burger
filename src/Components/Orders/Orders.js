import React, { Component } from 'react'
import{connect} from 'react-redux'
import { fetchOrders } from '../../Redux/actionCreators'
import Order from './Order/Order'
import Spinner from '../Spinner/Spinner.js'

const mapStateToProps = state =>{
  return{
    orders: state.orders,
    orderLoading: state.ordersLoading,
    orderErr: state.orderErr
  }
}

 const mapDispatchToProps = dispatch =>{
  return{
    fetchOrders: () => dispatch(fetchOrders())
  }
 }


export class Orders extends Component {
  componentDidMount(){
    this.props.fetchOrders();
  }

  componentDidUpdate(){
    console.log(this.props)
  }
  render() {
    let orders = null;
    if(this.props.orderErr){
        orders= <p style={{
          border:"1px solid grey",
          boxShadow: "1px 1px #888888",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "10px"
          
      }}>Sorry Failed to Load Orders !</p>
    } else{
      if (this.props.orders.length === 0){
        orders= <p style={{
          border:"1px solid grey",
          boxShadow: "1px 1px #888888",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "10px"
          
      }}>You Have no Orders !</p>
      } else{
        orders = this.props.orders.map(order =>{
          return <Order order={order} key= {order.id} />
        })
      }
    }

    return (
      <div>{ this.props.orderLoading ? <Spinner/> : orders}</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Orders)