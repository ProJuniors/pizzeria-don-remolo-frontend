import React from "react"
import { Promotions } from "../components/Promotions"
import { Banner } from "../components/Banner"
import { Category } from "../components/Category"

export const HomePage = () => {
  return (
    <>
      <Banner />

      <Category />

      <Promotions />
    </>
  )
}
