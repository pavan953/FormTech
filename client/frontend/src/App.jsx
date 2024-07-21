// src/App.jsx
// import {} from 'react';
import Register from './components/Register';
import CropList from './components/Croplist';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">Marketplace App</h1>
      <Register />
      <CropList />
    </div>
  );
};

export default App;