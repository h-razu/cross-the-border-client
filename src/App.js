import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './router/Routes/Routes';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
