import React, {Component} from 'react'
import { Button } from 'reactstrap'


class CheckOut extends Component {

state = {
  values : {
    deliveryAddres: "",
    phone: "",
    paymenttype: "Cash On Delivery",
  }
}

  render(){
    return (
      <div>
        <from>
          <textarea name='deliveryAddres' value={this.state.values.deliveryAddres} className='form-control' placeholder='Your Addres'></textarea>
          <br/>
          <input name='phone' placeholder='Your Phone Number' className='form-control' value={this.state.values.phone} />
          <br/>
          <select name='paymenttype' className='form-control' value={this.state.values.paymenttype}>
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Bkash">Bkash</option>
            </select>
            <br/>
            <Button style={{backgroundColor:"#D70F64"}} className='mr-auto' >Place Order</Button>
            <Button color='secondary' className='ml-1'>Cancel</Button>

        </from>
      </div>
    )
  }
}

export default CheckOut