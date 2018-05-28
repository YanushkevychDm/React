import React from 'react';
import { format } from 'url';

class StorePicker extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* comment */}
        <form action="" className="store-selector"> 
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store &rarr; </button>
        </form>
        
      </React.Fragment>
    )

  }
}

export default StorePicker;