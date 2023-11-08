import React , {Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

export default class BurgerBuilder extends Component{

    state = {
        ingredients: [
            {type: 'cheese' ,amount: 0},
            {type: 'salad', amount: 0},
            {type: 'meat', amount: 0},

        ]
    }

    addIngredienthandle = type =>{
       const ingredients = [...this.state.ingredients];
       for ( let item of ingredients){
        if (item.type === type) item.amount ++;
       }
       this.setState({ingredients: ingredients})
    }


    removeIngredientHandel = type =>{
        const ingredients = [...this.state.ingredients];
        for ( let item of ingredients){
         if (item.type === type) {
            if (item.amount  <= 0) return;
            item.amount --;
           }
        }
        this.setState({ingredients: ingredients})
    }
    render (){
        return (
            <div className="d-flex flex-md-row flex-column">
               <Burger ingredients={this.state.ingredients}/>
               <Controls
               ingredientAdded = {this.addIngredienthandle}
               ingredientRemove = {this.removeIngredientHandel}
               />
            </div>
        )
    }
}