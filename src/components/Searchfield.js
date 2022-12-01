import { useContext, useState } from "react"
import { ImageContext } from "../Main"

const Searchfield = () => {
    const [value, setValue] = useState("")
    const { fetchData, setSearchImage } = useContext(ImageContext)
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const handleButton = () => {
        fetchData(`search/photos?query=${value}&client_id=_7HolOHaWClv8x0pkH4ftSBmYRAXg2aLzp9s38IO65Q`)
        setValue("")
        setSearchImage(value)
    }
    function handleENter(e) {
        if (e.key === "Enter") {
            fetchData(`search/photos?query=${value}&client_id=_7HolOHaWClv8x0pkH4ftSBmYRAXg2aLzp9s38IO65Q`)
            setValue("")
            setSearchImage(value)
        }
    }
    return (
        <>
            <div className="flex">
                <input
                    className="bg-gray-500 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus;border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                    type="search"
                    placeholder="Please sercah for image"
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={handleENter}
                />
                <button
                    disabled={!value}
                    className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled-bg-gray-400"
                    onClick={handleButton}
                >Search</button>
            </div>
        </>
    )
}

export default Searchfield;