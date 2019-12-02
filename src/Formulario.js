import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Formulario extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: '',
         age: '',
         status: ''
      } 
   }

   changeName = (ev) =>{}

   render() {
      return (
         <form>
            <label>
               Name:
                    <input type='text'
                  onChange={this.changeName}
                  value={this.state.name} />
            </label>
            <p>{this.state.name}</p>
            <label>
               Age:
                    <input type='number'
                  onChange={this.changeAge}
                  value={this.state.age} />
            </label>
            <label>
               Status:
                    <input type='text'
                  onChange={this.changeStatus}
                  value={this.state.status} />
            </label>
         </form>
      )
   }

}



export default Formulario;