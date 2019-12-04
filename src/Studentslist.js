import React from 'react';
//import logo from './logo.svg';
import './App.css';

class Studentslist extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
           students: [
            {
               name: 'Caroline',
               age: 19,
               status: 'single',
            },
            {
               name: 'Cleiton',
               age: 19,
               status: 'single',
            },
            {
               name: 'Erlane',
               age: 24,
               status: 'single',
            },
            {
               name: 'Estefania',
               age: 22,
               status: 'solteira',
            },
            {
               name: 'Gabriel',
               age: 22,
               status: 'married',
            },
            {
               name: 'Geysa',
               age: 20,
               status: 'single',
            },
            {
               name: 'João',
               age: 19,
               status: 'single', 
            },
            {
               name: 'Jorge Luiz',
               age: 58,
               status: 'married',
            },
            {
               name: 'Juan',
               age: 20,
               status: 'married',
            },
            {
               name: 'Luan',
               age: 25,
               status: 'married',
            },
            {
               name: 'Lucas',
               age: 24,
               status: 'single'
            },
            {
               name: 'Maicon',
               age: 23,
               status: 'single',
            },
            {
               name: 'Renan',
               age: 15,
               status: 'single',
            },
            {
               name: 'Vítor',
               age: 24,
               status: 'married',
            }            
         ]
      } 
   }
   
   showStudents = () => {
       this.state.students.map(item =>{
            console.log(item.name, item.age, item.status)
            return null
       })
   } 

   render() {
      return (
          <button onClick={this.showStudents}>Click me</button>        
      )
   }

}



export default Studentslist;