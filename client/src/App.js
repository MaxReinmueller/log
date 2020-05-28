
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import LandingPage from './pages/LandingPage';
import SolutionsPage from './pages/SolutionsPage';
import TechStacksPage from './pages/TechStacksPage';
import Log from './pages/Log';

const App = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path='/solutions' component={SolutionsPage}/>
				<Route exact path="/techstacks" component={TechStacksPage} />
				<Route exact path="/log" component={Log} />
				<Route exact path="/books" component={Books} />
				<Route exact path="/books/:id" component={Detail} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;
