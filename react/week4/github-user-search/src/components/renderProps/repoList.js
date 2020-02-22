import React from 'react';

export default function RepoList(props){    
    return (
      <React.Fragment>
        <h1 className="my-repos"><u>My Repos</u></h1>
        {props.render.map(newList => {
          return (
            <div className="my-repos" key={newList.id}>
              <a href={newList.html_url} target="_">
                {newList.name}
              </a>
            </div>
          );
        })}
      </React.Fragment>
    );

}

