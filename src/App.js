import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { OrdersScreen } from "./screens/ordersScreen";
import { ProductsScreen } from "./screens/productsScreen";
import { UsersScreen } from "./screens/usersScreen";
import { SignInForm } from "./forms/signInForm";

// Custom hook for fetching and storing data
function useFetchAndStoreData(url, dataKey) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const items = await response.json();
        setData(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return data;
}

function App() {
  const orders = useFetchAndStoreData(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
    "orders"
  );
  const products = useFetchAndStoreData(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
    "products"
  );
  const users = useFetchAndStoreData(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    "users"
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/Orders" element={<OrdersScreen orders={orders} />} />
          <Route path="/Products" element={<ProductsScreen products={products} />} />
          <Route path="/Users" element={<UsersScreen users={users} />} />
          <Route
            path="/"
            element={<SignInForm setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
