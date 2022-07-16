import NavBar from "./components/nav/nav";
import StockCard from "./components/products/StockCard";
import AddStock from "./components/addStock/addstock";
import {Switch,BrowserRouter as Router,Route,Redirect} from "react-router-dom"
function App(){
    return (
        <>  
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <StockCard/>
                    </Route>
                    <Route exact path="/addstocks">
                        <AddStock/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </>
    )
}
export default App;