import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { Order } from "../pages/Order";
import { Payment } from "../pages/Payment";
import { Favorite } from "../pages/Favorite";
import { SearchProvider } from "../hooks/search";

export function UserRoutes() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dish/:id" element={<Dish />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </SearchProvider>
  )
}