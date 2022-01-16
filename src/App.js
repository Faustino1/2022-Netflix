import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//Se le coloca un alias a la libreria por que el nombre es muy largo BrowserRouter as Router
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Header from "./components/Header";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./firebase";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Paypal from  "./Pages/Paypal";
import Profile from "./Pages/Profile";


function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect( () => {
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else{
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className= {classes.root}>
     <Router>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/profile'>
                <Profile/>
              </Route>
              <Route path='/checkout'>
                <Paypal/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));
export default App;
