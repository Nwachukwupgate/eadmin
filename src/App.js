import Sidebar from './components/layouts/SideBar';
import './App.css';
import HeaderPage from './components/layouts/Header';
import ProductTable from './components/Table/ProductTable';
import AddProductForm from './pages/create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
    {/* Sidebar Component */}
    <Sidebar />

    <div className="flex flex-col">
        {/* Header Component */}
        <HeaderPage />

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
          {/* ProductTable Component */}
          <BrowserRouter>
            <Routes>    
              <Route path='/' element={<ProductTable />} />
              <Route path='/create' element={<AddProductForm />} />             
            </Routes>
          </BrowserRouter>
        </main>
      </div>    
  </div>
  );
}

export default App;
