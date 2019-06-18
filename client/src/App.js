import React, {Component} from 'react'
import Routes from '../src/components/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

import TopNavigation from './components/TopNavigation'
import SideNavigation from './components/SideNavigation'
import Footer from './components/Footer'


import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './index.css'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="flexible-content">
                    <TopNavigation/>
                    <SideNavigation/>
                    <main id="content" className="p-5">
                        <Routes/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App
