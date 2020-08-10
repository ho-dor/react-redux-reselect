import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import { increment,getData } from './store/number/actions';
import { getNumber, getName } from './store/number/selector';

const App = ({number, increment, loading, error, names, getData}) => {

  useEffect(()=>{
    getData()
  })

  const handleClick = ()=> increment(number+1);
  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Increase</button>
      </div>
      <div>
        <span>{number}</span>
      </div>
      <div>
        {loading ? <h1>Loading...</h1>: names}
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    number: getNumber(state),
    loading: state.number.loading,
    error: state.number.error,
    names: getName(state)
  }
  
}

const mapDispatchToProps = {
    increment,
    getData
  }

  


export default connect(mapStateToProps,mapDispatchToProps)(App);
