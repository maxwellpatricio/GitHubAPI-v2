import React, {useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({}); 
    const [userRepos, setUserRepos] = useState({}); 

    return(
        <context.Provider value={{
            userData, setUserData, userRepos, setUserRepos
        }}>
            {props.children}
        </context.Provider>
    );
}