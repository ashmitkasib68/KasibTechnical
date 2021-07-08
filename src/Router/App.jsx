import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Service from './Service'



const App = () => {



  
   

    return (
        <>

            <Menu />

            <Switch>
                <Route exact path='/' render={ () => <About name='About' /> } />
                <Route exact path='/contact' render={() => <Contact name='Contact' />} />
                <Route exact path='/service' render={() => <Service name='Service' />} />
            </Switch>

        </>
    )


}


export default App;