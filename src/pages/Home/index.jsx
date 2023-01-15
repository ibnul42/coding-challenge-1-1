import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-3 justify-center items-center">
      <Link
        to="/user"
        className="border bg-gray-50 border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 hover:font-medium"
      >
        Create User
      </Link>
      <Link
        to="/dashboard"
        className="border bg-gray-50 border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 hover:font-medium"
      >
        Dashboard
      </Link>
    </div>
  )
}

export default Home
