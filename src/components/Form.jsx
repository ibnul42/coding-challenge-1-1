import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore"
import React, { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { db } from "../firebase"
import Select from "./Select"

const Form = ({ id = "" }) => {
  const [sectors, setSectors] = useState(null)
  const [selected, setSelected] = useState(false)
  const [userId, setUserId] = useState(
    id.toString().trim().length > 0 ? id : null
  )

  const userCollectionRef = collection(db, "users")

  const [inputValue, setInputValue] = useState({
    name: "",
    sectorName: "",
    sectorValue: null,
    tosAgreement: false,
  })

  const { name, sectorName, sectorValue, tosAgreement } = inputValue

  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelected(false)
      }
    }

    const getUser = async () => {
      const sectorCollectionRef = collection(db, "sectors")
      const data = await getDocs(sectorCollectionRef)
      const list = data.docs.map((item) => ({ ...item.data(), id: item.id }))
      list && setSectors(list)
    }

    getUser()

    const getSingleUser = async () => {
      const singleUserRef = doc(db, "users", userId)
      const docSnap = await getDoc(singleUserRef)
      setInputValue({
        name: docSnap.data().name,
        sectorName: docSnap.data().sectorName,
        sectorValue: docSnap.data().sectorValue,
        tosAgreement: docSnap.data().tosAgreement,
      })
      console.log(
        docSnap.id,
        docSnap.data().tosAgreement,
        typeof docSnap.data().tosAgreement
      )
    }

    if (userId) {
      getSingleUser()
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [ref, userId])

  const onChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const addUser = async (e) => {
    e.preventDefault()
    if (inputValue.name.trim().length < 1) {
      toast.warning("Please input a name")
    } else if (inputValue.sectorName.length < 1) {
      toast.warning("Please select a sector")
    } else if (inputValue.tosAgreement !== true) {
      toast.warning("Please allow terms and conditions")
    } else {
      await addDoc(userCollectionRef, inputValue)
        .then((data) => {
          setUserId(data.id)
          toast.success("User added successfully!")
        })
        .catch(() => toast.error("Failed to add"))
    }
  }

  const updateUser = async (e) => {
    e.preventDefault()
    if (inputValue.name.trim().length < 1) {
      toast.warning("Please input a name")
    } else if (inputValue.sectorName.length < 1) {
      toast.warning("Please select a sector")
    } else if (inputValue.tosAgreement !== true) {
      toast.warning("Please allow terms and conditions")
    } else {
      const userDoc = doc(db, "users", userId)
      await updateDoc(userDoc, inputValue)
        .then(() => toast.success("User updated successfully!"))
        .catch(() => toast.error("Failed to update data"))
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="bg-white p-6 rounded-lg max-w-lg shadow-lg"
        onSubmit={
          id.toString().trim().length > 0 || userId ? updateUser : addUser
        }
      >
        <label className="block font-medium text-lg mb-2">
          Name:
          <input
            className="w-full border border-gray-400 px-2 py-1 rounded-lg font-semibold placeholder:text-gray-400"
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={name}
            onChange={onChange}
          />
        </label>
        <label className="block font-medium text-lg mb-2">
          Sectors:
          <div ref={ref}>
            <Select
              sectors={sectors}
              selected={selected}
              setSelected={setSelected}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </div>
        </label>
        <label className="block font-medium text-lg mb-2">
          <input
            type="checkbox"
            checked={tosAgreement}
            onChange={() =>
              setInputValue((prev) => ({
                ...prev,
                tosAgreement: !tosAgreement,
              }))
            }
            className="mr-3"
          />
          Agree to terms
        </label>
        <div className="flex justify-center">
          {id.toString().trim().length > 0 || userId ? (
            <button
              className="bg-blue-500 hover:bg-blue-700  text-white font-medium py-2 px-4 rounded-lg"
              type="submit"
            >
              Update
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700  text-white font-medium py-2 px-4 rounded-lg"
              type="submit"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
