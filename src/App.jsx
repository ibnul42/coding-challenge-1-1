import { Link, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import User from "./pages/User"

function App() {
  return (
    <>
      <div className="h-screen max-w-7xl mx-auto flex flex-col justify-between overflow-y-auto">
        <div className="px-3 py-2 flex justify-between">
          <Link
            to="/"
            className="border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 hover:font-medium"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 hover:font-medium"
          >
            Dashboard
          </Link>
        </div>
        <div className="h-full min-h-fit">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
