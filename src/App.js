import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import AddBook from './routes/add-book/add-book.component';
import Checkout from './routes/checkout/checkout.component';
import apiInstance from './api/apiInstance';


const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    apiInstance
      .get("/books")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => setBooks(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home books={books} />} />
        <Route path='shop' element={<Shop books={books} />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='add-book' element={<AddBook />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
