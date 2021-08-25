import React, { Component } from 'react';

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => clearInterval(this.interval)}
        >
          Clear Timer
        </button>
        <button
          onClick={() =>
            (this.interval = setInterval(() => {
              this.setState((prevState) => ({ timer: prevState.timer + 1 }));
            }, 1000))
          }
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        >
          Resume
        </button>
      </div>
    );
  }
}

export default ClassTimer;
