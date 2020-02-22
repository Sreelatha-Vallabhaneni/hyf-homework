import React, {useEffect, useState } from "react";
import RepoList from './repoList';

function MyRepos(){
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        const ROOT_URL = `https://api.github.com/users/Sreelatha-Vallabhaneni/repos`;
        (async () => {
          try {
            const response = await fetch(`${ROOT_URL}`);
            const result = await response.json();
            const newResult = result;
            setRepo(newResult);
          } catch (error) {
            console.log(error);
          }
        })(); 
    }, [setRepo]);
    console.log(repo)
    return (
        <div>
            <RepoList render={repo}/>
        </div>
    );
}


export default MyRepos;
