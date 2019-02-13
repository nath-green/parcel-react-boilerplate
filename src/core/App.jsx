import React from 'react';

export default class App extends React.Component {
  state = {
    name: 'App'
  };

  render() {
    const { name } = this.state;

    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h1>{name}</h1>
      </React.Fragment>
    );
  }
}
