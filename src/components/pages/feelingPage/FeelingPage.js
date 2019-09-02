import React, { Component } from 'react';


class FeelingPage extends Component {

  clickUnderstand =() => {
    this.props.history.push('/understand')
  }
  
  render() {
    return (
      <div>
        
        <p>How are you feeling?</p>
        <button>
          title="Next"
          onClick={() => this.props.navigation.navigate('understand')}
        </button>
      
      </div>
      


    )
  }



}
export default FeelingPage;