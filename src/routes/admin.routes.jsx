import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { NewDish } from "../pages/NewDish"
import { Order } from "../pages/Order";
import { Payment } from "../pages/Payment";
import { Favorite } from "../pages/Favorite";
import { SearchProvider } from "../hooks/search";

export function AdminRoutes() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dish/:id" element={<Dish />}/>
        <Route path="/new" element={<NewDish />}/>
        <Route path="/new/:id" element={<NewDish />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </SearchProvider>
  )
}