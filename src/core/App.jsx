import React from 'react';

export default class App extends React.Component {
  state = {
    name: 'App'
  };

  render() {
    const { name } = this.state;

    return (
      <div className="o-container">
        <p className="c-heading-alpha u-text-primary u-margin-bottom--x2">{name}</p>
        <p className="c-heading-alpha">Heading Alpha</p>
        <p className="c-heading-bravo">Heading Bravo</p>
        <p className="c-heading-charlie">Heading Charlie</p>
        <p className="c-heading-delta">Heading Delta</p>
      </div>
    );
  }
}
