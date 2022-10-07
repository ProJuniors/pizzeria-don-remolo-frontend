import React from "react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/components/LoginPage"
import { PizzeriaRoutes } from "../PizzeriaApp/routes/PizzeriaRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<PizzeriaRoutes />} />
      </Routes>
    </>
  )
}
