import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutUs  from '../pages/aboutUs/aboutUs.jsx'
import Contact  from '../pages/contact/contact.jsx'
import  Home  from '../pages/home/home.jsx'
import  Menu  from '../pages/menu/menu.jsx'
function AppRouter() {
    return(
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/aboutUs' exact>
                <AboutUs />
            </Route>
            <Route path='/contact' exact>
                <Contact />
            </Route>
            <Route path='/menu' exact>
                <Menu />
            </Route>
            </Switch>
    )
}
export default AppRouter