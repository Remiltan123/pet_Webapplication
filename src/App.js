import './App.css';
import { HomePage } from './Pages/HomePage';
import { Footer } from './Component/Fotter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category } from './Pages/Category';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Use Routes instead of Router */}
        <Routes>
          {/* Define your routes here */}
          <Route path='/' element={<HomePage />} />
          <Route path='/PetCetogary/:Cetogary' element={<Category />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
