import React, { Component } from 'react';

export default class AddItem extends Component {
    
        state =  {
            currentItem:[
            {
                title: "Get out of bed, Wed Sep 13 2017",
            },
            {
                title: "Brush teeth, Sep 14 2017",
            },
            {
                title: "Eat breakfast, Fri Sep 15 2017"
            }
        ]};        

   render() { 
        return (
            <div>             
            {this.state.currentItem.map((todo, index) => (
                <ul>
                    <li className="list">{todo.title}</li>
                </ul>
                //<Todo key={todo.index} index={todo.index} todo=/>
            ))}
            </div>
         );
    
    }
}
 
