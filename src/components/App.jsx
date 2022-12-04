import React from "react"
import LandingPage from "../pages/LandingPage"
import MovieDetails from "../pages/MovieDetails"
import styles from'../css/App.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App (){

    return(
        <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </Router>
    )
}
export default App
