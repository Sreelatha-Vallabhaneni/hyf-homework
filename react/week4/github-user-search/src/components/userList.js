import React, { useContext } from 'react';
import {stateContext}  from '../App';
function UserList(){
    const {user} = useContext(stateContext);
    console.log(user.items)
    return(
        user.items === undefined ? <p>No items</p> :
         user.items.map(list => {
                return (
                  <a href={list.html_url} target="_">
                    <div key={list.id}>{list.login}</div>
                  </a>);
              }
        )
    )
}
export default UserList;