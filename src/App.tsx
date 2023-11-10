import { createContext, useState } from "react";
import { FooterWithLogo } from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Navigation";
import Stores from "./components/stores/Stores";
import MapContainer from "./components/map/Map";
import "./styles/tailwind.css";
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoginCard } from "./components/login/Login";
import { SimpleRegistrationForm } from "./components/signup/signup";
import RegisterSuccess from "./components/register_success/RegisterSuccess";

interface LocationType {
  name: string,
  latitude: number,
  longitude: number
}

interface AppContextType {
  location: LocationType
  setLocation: any
  languageFlag: string
  setLanguageFlag: any
}

export const AppContext = createContext<AppContextType>({
  location: {
    name: "",
    latitude: 39.542637,
    longitude: 116.232922
  },
  setLocation: undefined,
  languageFlag: "",
  setLanguageFlag: undefined
})

function App() {

  //全局信息 定位
  const [location, setLocation] = useState<LocationType>({
    name: "正在定位中...",
    latitude: 39.542637,
    longitude: 116.232922
  })

  //全局信息 语言
  const [languageFlag, setLanguageFlag] = useState<string>('zh')

  //全局信息 用户

  return (
    <AppContext.Provider value={{ location, setLocation, languageFlag, setLanguageFlag }}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Nav></Nav>
          <div className="mt-10 w-9/12 mx-auto">
            {/* 内容放在这个div里 */}
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Stores></Stores>}></Route>
                <Route path="/location" element={<MapContainer></MapContainer>}></Route>
                <Route path='/login' element={<LoginCard></LoginCard>}></Route>
                <Route path="/signup" element={<SimpleRegistrationForm></SimpleRegistrationForm>}></Route>
                <Route path='/register_success' element={<RegisterSuccess></RegisterSuccess>}></Route>
              </Routes>
            </div>
          </div>
          <FooterWithLogo></FooterWithLogo>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
