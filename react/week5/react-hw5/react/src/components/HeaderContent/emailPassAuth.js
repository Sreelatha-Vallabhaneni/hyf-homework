import React, { useState } from 'react';

var firebase = require("firebase/app");
require("firebase/auth");

function EmailPassSignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const user = useContext(UserContext);
    const signIn= async(e)=> {
       console.log(e)
       e.preventDefault();
        try{
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(result);
            } catch (err){
                console.log(err)
               }
            }
    return (
      <React.Fragment>
        <form onSubmit={signIn} className="email-pass">
          <label> Email:
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </label>
          <label> Password:
            <input
              type="password"
              placeholder="enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Sign In</button>
        </form>
      </React.Fragment>
    );
}
export default EmailPassSignIn;
