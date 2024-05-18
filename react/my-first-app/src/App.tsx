import {useState} from 'react';
import './App.css';
import Button from "./Button";
// import Text from "./Text";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import {TypesEnum} from "./Button";
import UserInfo from "./components/Userinfo";


const App = () => {
    const [openedPage, setOpenedPage] = useState("home")
    const handleOpenHome = () => {
        setOpenedPage("home")
    }
    const handleOpenCatalog = () => {
        setOpenedPage("catalog")
    }
    return (
        <div className="App">
            <Button title="Home page" onClick={handleOpenHome} type={TypesEnum.primary}/>
            <Button title="Catalog page" onClick={handleOpenCatalog} type={TypesEnum.secondary}/>
            <Button title="Catalog page" onClick={handleOpenCatalog} type={TypesEnum.secondary2} isDisable/>
            {openedPage === "home" ? <Home/> : <Catalog/>}
            <UserInfo username="Ivan Ivanov"/>
        </div>
    );
}

export default App;
