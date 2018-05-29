import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render () {
    console.log(this);
    return (
        <form className="store-selector" onSubmit={this.goToStore}> 
          <h2>Please enter a store</h2>
          <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store &rarr; </button>
        </form>
    )

  }
}

export default StorePicker;