import React, { Component } from 'react';
import Child from '@/components/Child';

class Parent extends Component {
  render() {
    return (
      <div>
        <Child/>
      </div>
    );
  }
}

export default Parent;
