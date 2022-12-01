import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';
import Searchfield from './components/Searchfield';
import useAxios from './hook/useAxios';
export const ImageContext = createContext()
function Main() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=qZ66HLIvHdgCG2XrCrdP9QO1xKDn3lct86wFv8Z_U4A`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <Searchfield />
      </Header>
      <Images />
    </ImageContext.Provider>
  );
}


export default Main;
