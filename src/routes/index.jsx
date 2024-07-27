import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";
import { OrderProvider } from "../hooks/order";
import { useEffect } from "react";
import { api } from "../service/api";

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if(error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AccessRoute() {
    switch(user.role) {
      case USER_ROLE.ADMIN: 
        return <AdminRoutes />
      case USER_ROLE.USER:
        return (
            <OrderProvider>
              <UserRoutes />
            </OrderProvider>
          )
      default:
        return (
          <OrderProvider>
            <UserRoutes />
          </OrderProvider>
        )
    }
   }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}