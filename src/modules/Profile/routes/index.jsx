import { Route, Routes } from "react-router-dom"
import { Profile } from "./Profile"

export const ProfileRoutes = () => {
       return <Routes>
              <Route path="" element={<Profile/>} />
       </Routes>
}