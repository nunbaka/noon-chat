import React, { Component } from 'react';
import { TextInput } from './TextInput';
import { MessageList } from './MessageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextInput />
        <MessageList />
      </div>
    );
  }
}
export default App;
