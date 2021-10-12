import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
    const [dark, setDark] = useState(false);
    console.log(dark);
    if (dark) {
        document.body.style.backgroundColor = 'black';
    } else document.body.style.backgroundColor = 'white';
    return (
        <Router>
            <div className="App">
                <Navbar setDark={setDark} dark={dark} />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home setDark={setDark} dark={dark} />
                        </Route>
                        <Route path="/create">
                            <Create setDark={setDark} dark={dark} />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails setDark={setDark} dark={dark} />
                        </Route>
                        <Route path="*">
                            <NotFound setDark={setDark} dark={dark} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
