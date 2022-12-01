import React from "react"
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate()
    function bookmark (){
        navigate("/bookmark")
    }
    return (
        <div className="nav">
            <div className="bookmarks">
                <button type="button" onClick={()=>bookmark()} >Bookmarks</button>
            </div>
        </div>
    );
}


export default Nav;