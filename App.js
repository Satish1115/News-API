// import logo from './logo.svg';
// import './App.css';

// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default class App extends Component {
 
//   render() {
//     return (
//       <div>
//         <Router>
//       <Navbar/>
//       {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="sports"/> */}
//       <Switch>
//           <Route path="/"><News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general"/></Route>
//         </Switch>
//       </Router>
//       </div>
//     )
//   }
// }

import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize=5;
  // apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }
 setProgress = (progress) => {
  this.setState({progress : progress})
 }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="sports"/> */}
          <Routes>
            {/* Use 'element' prop to pass the component as JSX */}
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
