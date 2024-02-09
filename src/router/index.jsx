import { Navigate, Route, Routes } from "react-router-dom";
import { UsersRoutes } from "../modules/Users/routes";
import { MainLayout } from "../Layouts/MainLayout";
import { authStore } from "store/auth.store";
import { observer } from "mobx-react-lite";
import { AuthRoutes } from "modules/Auth/routes";
import { SubjectsRoutes } from "modules/Subjects/routes";
import { TestsRoutes } from "modules/Tests/routes";
import { DepartmentRoutes } from "modules/Department/routes";
import { ProfileRoutes } from "modules/Profile/routes";


export const Router = observer(() => {

  const isAuth = authStore.isAuth;
  const dataType = authStore.userData?.user_type
  console.log(dataType);

  if(!isAuth) {
    return <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>;
  }else if(dataType === 'admin'){
    return <Routes>
    <Route path="" element={<MainLayout />}>
      <Route index path="/users/*" element={<UsersRoutes />} />
      <Route path="/subjects/*" element={<SubjectsRoutes />} />
      <Route path="/test/*" element={<TestsRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
      <Route path="*" element={<Navigate to="/users" />} />
    </Route>
  </Routes>;
  }else if(dataType === 'user') {
    return <Routes>
        <Route index path="/department/*" element={<DepartmentRoutes/>} />
        <Route path="*" element={<Navigate to="/department" />} />
    </Routes>
  }


});
