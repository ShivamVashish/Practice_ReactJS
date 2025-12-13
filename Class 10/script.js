import React,{useEffect,useState,useCallback} from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";
function GithubProfile(){
// Header
// Body = > 10 card show krege 
    return(
        <>
<Header></Header>
<Body></Body>
        </>
    )
}

const Root = ReactDOM.createRoot(document.querySelector("#root"))
Root.render(<GithubProfile/>)