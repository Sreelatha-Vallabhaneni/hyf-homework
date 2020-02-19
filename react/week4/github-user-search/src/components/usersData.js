import React, { useEffect, useContext } from 'react';
import { stateContext } from '../App';
import Loading from './loading';

function UsersData(){
    const {user, setUser, input, error, setError, loading, setLoading} = useContext(stateContext);
    useEffect(() => {
        const ROOT_URL = `https://api.github.com/search/users?q=${input}`;
        
      ;(async () => {
        try{
        const response = await fetch(`${ROOT_URL}`);
        const result = await response.json();
        const newResult = result;
        setUser(newResult);
        setLoading(false);
        setError(newResult.message);
         } catch (error)  {             
            console.log(error);
          }
      })();
    }, [input, setUser,error, setError, user.message, setLoading]);    
    
   console.log(error);
   
    return (
      <div className="list">
        {loading ? <Loading />
        :
        <ul>
            {user.total_count === undefined ? 
              <p>No items</p>
            : 
              user.items.map(list => {
                const newList = list;
                return (
                  <a href={newList.html_url} target="_">
                    <li key={list.id}>{newList.login}</li>
                  </a>
                );
              })
            }
        </ul>
        }
      </div>
    );
}
export default UsersData;

