import { Route, Routes } from "react-router-dom";
import { Test } from "./Test"
import { Menu } from "./Menu";


export const DepartmentRoutes = () => {
       return <Routes>
              <Route path=""  element={<Menu/>}/>
              <Route path=":id" element={<Test/>} />
       </Routes>
}
