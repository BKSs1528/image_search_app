import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ children }) => {
    // const nav = useNavigate()
    return (
        <div className="bg-gray-300 flex items-center py-10">
            <div className='max-w-md mx-auto w-full'>
                <h1 className='text-white text-center text-2xl font-bold mb-5'>Find Images</h1>
                <button
                    className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled-bg-gray-400"
                // onClick={()=>{ return nav("/book")}}
                >+Add bookmarks</button>
                {children}
            </div>
        </div>
    )
}

export default Header;