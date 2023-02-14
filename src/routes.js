import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './components/Provider';
import RouteWrapper from './components/RouteWrapper';
import Dashboard from './pages/Dashboard';
import DragonDetails from './pages/DragonDetails';
import Login from './pages/Login';
import NewDragon from './pages/NewDragon';

function Router() {
    return (
        <BrowserRouter>
            <Provider>
                <Routes>

                    <Route path='*' element={<Login />} />

                    <Route exact path='/' element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<Login />} />} />

                    <Route exact path='/Login' element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<Login />} />} />

                    <Route exact path='/Dashboard' element={<RouteWrapper isPrivate loggedComponent={<Dashboard />} defaultComponent={<Login />} />} />

                    <Route exact path='/DragonDetails/:id' element={<RouteWrapper isPrivate loggedComponent={<DragonDetails />} defaultComponent={<Login />} />} />

                    <Route exact path='/NewDragon' element={<RouteWrapper isPrivate loggedComponent={<NewDragon />} defaultComponent={<Login />} />} />

                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default Router;