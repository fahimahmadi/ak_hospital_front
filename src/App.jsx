import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { context } from './context/ContextProvider'
import Home from './pages/Home'
import AdminDashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import AddUser from './components/admin/comps/AddUser'


// private route
export function PrivateRotue({children, ...rest}){
  const {state} = useContext(context);

  return state.token ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <PrivateRotue>
              <AdminDashboard />
            </PrivateRotue>
          }
        >
          <Route path="user/create" element={<AddUser />} />
        </Route>
        <Route path="/login" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App