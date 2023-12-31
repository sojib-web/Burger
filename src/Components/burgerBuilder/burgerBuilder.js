import React , {Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Summary from "./Summary/Summary";
import { Navigate} from "react-router-dom";
import {connect} from 'react-redux'
import { addIngredient, removeIngredient, updatePurchasable } from '../../Redux/actionCreators';

const mapStateToProps = state =>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}
 const mapDispatchToProps = dispatch =>{
    return{
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
 }

 class BurgerBuilder extends Component{

    state = {
        ModalOpen: false,
        onClickCheckOut: false
    }

    addIngredienthandle = type =>{
       this.props.addIngredient(type)
       this.props.updatePurchasable()
    }


    removeIngredientHandel = type =>{
       this.props.removeIngredient(type)
       this.props.updatePurchasable()
    }

    toggleModal= () =>{
        this.setState({
            ModalOpen: ! this.state.ModalOpen
        })
    }

    handleChekOut = () =>{
        this.setState({
            onClickCheckOut: true
        })
    }
    render (){
        return (
          <div>
              <div className="d-flex flex-md-row flex-column">
               <Burger ingredients={this.props.ingredients}/>
               <Controls
               ingredientAdded = {this.addIngredienthandle}
               ingredientRemove = {this.removeIngredientHandel}
               price ={this.props.totalPrice}
               toggleModal={this.toggleModal}
               purchasable={this.props.purchasable}
               />
            </div>
            <Modal isOpen={this.state.ModalOpen}>
                <ModalHeader>Your Order Summary</ModalHeader>
                <ModalBody>
                    <h5> Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                    <Summary ingredients={this.props.ingredients}/>
                </ModalBody>
                <ModalFooter>
                    <Button style={{backgroundColor: "#D70F64"}} onClick={this.handleChekOut}>Continue to checkout</Button>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
                {this.state.onClickCheckOut && <Navigate to='CheckOut' replace={true}/>}
            </Modal>
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)