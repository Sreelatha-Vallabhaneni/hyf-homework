import React, {useContext, useEffect, useState} from 'react';
//import getPrivateContent from "../helpers/ajax.js"
import {UserContext} from "../App.js"
import Loader from "./Loader.js"
import Shifts from "./timeRegistration/shifts";

export default function Main () {

    const user = useContext(UserContext);
    const [content, setContent] = useState("");
    const [loadingState, setLoadingState] = useState(false);

    var errorMsg = "Oops! Something went wrong";
    
    useEffect(() => { 
        if (user) {
            setLoadingState(true);
            ;(async () => {
                try {
                   // const result = await getPrivateContent();
                    //setContent(result.body);
                    await setContent(<Shifts/>);
                } catch (err) {
                    if (typeof err === "string") {
                        setContent(err);
                    }
                    else {
                        setContent(errorMsg);
                    }
                }
                setLoadingState(false)
            })();
        } else {
            setContent("Please login to see main content");
        }
    }, [user, errorMsg])

    return (
        <>
            {loadingState ? <Loader/> : ""} 
            {content}
            
        </>
    )
}