import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../firebase"

const Dashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const userCollectionRef = collection(db, "users")
      const data = await getDocs(userCollectionRef)
      const list = data.docs.map((item) => ({ ...item.data(), id: item.id }))
      setUsers(list)
    }

    getUser()
  }, [])

  const onUserDelete = async (id) => {
    const userCollectionRef = doc(db, "users", id)
    await deleteDoc(userCollectionRef)
      .then(() => {
        toast.success("User deleted successfully")
        const userList = users.filter((user) => user.id !== id)
        setUsers(userList)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            {/* <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Email</th> */}

            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Sector</th>
            <th className="px-4 py-2">Agreement</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {users.length > 0 ? (
            users.map((item, index) => (
              <tr key={index} className="text-gray-700">
                <td className="border px-4 py-2">
                  <p>{index + 1}</p>
                </td>
                <td className="border px-4 py-2">
                  <p>{item.name}</p>
                </td>
                <td className="border px-4 py-2">{item.sectorName}</td>
                <td className="border px-4 py-2">
                  {item.tosAgreement === true ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2 flex flex-wrap gap-2 justify-center items-center">
                  <Link
                    to={`/user`}
                    state={item.id}
                    className="px-6 py-1 rounded-full border border-gray-300 hover:bg-gray-200 hover:font-medium cursor-pointer"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onUserDelete(item.id)}
                    className="px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-200 hover:font-medium cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 text-center"></td>
              <td className="px-4 py-2 text-center"></td>
              <td className="px-4 py-2 text-center">No data available</td>
              <td className="px-4 py-2 text-center"></td>
              <td className="px-4 py-2 text-center"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
