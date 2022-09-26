import {Route, Routes} from 'react-router-dom';

import './App.css';
import ListPage from './components/pages/listpage/listpage';
import DetailsPage from './components/pages/detailspage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage/>}/>
        <Route path="/crypto/:crypto" element={<DetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
