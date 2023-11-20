import React from 'react'
import Header from './Header/Header';
import {Route, Switch } from 'react-router-dom'
import Orders from './Orders/Orders';
import BurgerBuilder from './burgerBuilder/burgerBuilder'
import CheckOut from './Orders/CheckOut/CheckOut'
import Auth from './Auth/Auth';
import {connect} from 'react-redux'

const mapStateToProps = state =>{
  return{
    token: state.token
  }
}

 const Main = props => {
  let routes = null;
  if(props.token === null) {
    routes= (
      <Switch>
            <Route path='/login' component={Auth}/>
      </Switch>
    ) 
  }  else{
    routes=(
      <Switch>
          <Route path='/' exact component={BurgerBuilder}/>
          <Route path='/Orders' component={Orders}/>
          <Route path='CheckOut' component={CheckOut}/>
      </Switch>
    )
  }
  

  return (
    <div>
        <Header/>
       <div className='container'>
      {routes}
       </div>
    </div>
  )
}
export default connect(mapStateToProps) (Main);
