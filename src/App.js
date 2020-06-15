import React from 'react';
import PostImage from './component/postImage';
import ImageList from './component/imageList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageDetails from './component/imageDetails';

function App() {

  return (
    <Router>
      <Route exact path="/" component={ImageList} />
      <Route path="/postimage" component={PostImage} />
      <Route path="/imagedetails/:id" component={ImageDetails} />
    </Router>
  );
}

export default App;
