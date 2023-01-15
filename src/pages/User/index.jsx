import { addDoc, collection } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import Form from "../../components/Form"
import { db } from "../../firebase"

function User() {
  const location = useLocation()
  const id = location.state || ""
  // const userCollectionRef = collection(db, "users")
  const sectorCollectionRef = collection(db, "sectors")
  // useEffect(() => {
  //   const getUser = async () => {
  //     const data = await getDocs(sectorCollectionRef)
  //     const list = data.docs.map((item) => ({ ...item.data(), id: item.id }))
  //     console.log(list)
  //   }

  //   getUser()
  // }, [sectorCollectionRef])

  const addData = async () => {
    await addDoc(sectorCollectionRef, {
      name: "Manufaturing",
      value: 1,
      child: [
        {
          name: "Construction Materials",
          value: 19,
          child: [],
        },
        {
          name: "Electronics and Optics",
          value: "18",
          child: [],
        },
        {
          name: "Food & Beverage",
          value: "6",
          child: [
            {
              name: "Bakery & Confectionery products",
              value: "342",
              child: [],
            },
            {
              name: "Beverages",
              value: "43",
              child: [],
            },
            {
              name: "Fish & Fish products",
              value: "42",
              child: [],
            },
            {
              name: "Meat & meat Products",
              value: "40",
              child: [],
            },
            {
              name: "Milk & Dairy products",
              value: "39",
              child: [],
            },
            {
              name: "Other",
              value: "437",
              child: [],
            },
            {
              name: "Sweets & snack food",
              value: "378",
              child: [],
            },
          ],
        },
        {
          name: "Furniture",
          value: "13",
          child: [
            {
              name: "Bathroom / Sauna",
              value: "389",
              child: [],
            },
            {
              name: "Bedroom",
              value: "385",
              child: [],
            },
            {
              name: "Children's room",
              value: "390",
              child: [],
            },
            {
              name: "Kitchen",
              value: "98",
              child: [],
            },
            {
              name: "Living Room",
              value: "101",
              child: [],
            },
            {
              name: "Office",
              value: "392",
              child: [],
            },
            {
              name: "Other",
              value: "394",
              child: [],
            },
            {
              name: "Outdoor",
              value: "341",
              child: [],
            },
            {
              name: "Project furniture",
              value: "99",
              child: [],
            },
          ],
        },
        {
          name: "Machenery",
          value: "12",
          child: [
            {
              name: "Machenery components",
              value: "94",
              child: [],
            },
            {
              name: "Machiney equipment/tools",
              value: "91",
              child: [],
            },
            {
              name: "Manufacture of machinery",
              value: "224",
              child: [],
            },
            {
              name: "Maritime",
              value: "94",
              child: [
                {
                  name: "Aluminium and steel workboats",
                  value: "271",
                  child: [],
                },
                {
                  name: "Boat/Yatch building",
                  value: "269",
                  child: [],
                },
                {
                  name: "Ship repair and conversion",
                  value: "230",
                  child: [],
                },
              ],
            },
            {
              name: "Metal structures",
              value: "93",
              child: [],
            },
            {
              name: "Other",
              value: "508",
              child: [],
            },
            {
              name: "Repair and maintenance service",
              value: "",
              child: [],
            },
          ],
        },
        {
          name: "Metalworking",
          value: "11",
          child: [
            {
              name: "Construction of metal structures",
              value: "67",
              child: [],
            },
            {
              name: "Houses and buildings",
              value: "263",
              child: [],
            },
            {
              name: "Metal products",
              value: "267",
              child: [],
            },
            {
              name: "Metal works",
              value: "542",
              child: [
                {
                  name: "CNC-Maching",
                  value: "75",
                  child: [],
                },
                {
                  name: "Forging, Fastners",
                  value: "62",
                  child: [],
                },
                {
                  name: "Gas, Plasma, Laser cutting",
                  value: "69",
                  child: [],
                },
                {
                  name: "MIG, TIG, Aluminum welding",
                  value: "",
                  child: [],
                },
              ],
            },
            {
              name: "",
              value: "",
              child: [],
            },
          ],
        },
        {
          name: "Plastic & rubber",
          value: "9",
          child: [
            {
              name: "Packaging",
              value: "54",
              child: [],
            },
            {
              name: "Plastic goods",
              value: "556",
              child: [],
            },
            {
              name: "Plastic processing technology",
              value: "559",
              child: [
                {
                  name: "Blowing",
                  value: "55",
                  child: [],
                },
                {
                  name: "Moulding",
                  value: "57",
                  child: [],
                },
                {
                  name: "Plastics welding and processing",
                  value: "560",
                  child: [],
                },
              ],
            },
            {
              name: "Plastic profiles",
              value: "560",
              child: [],
            },
          ],
        },
        {
          name: "Printing",
          value: "5",
          child: [
            {
              name: "avdertising",
              value: "148",
              child: [],
            },
            {
              name: "Book / Periodicals printing",
              value: "",
              child: [],
            },
            {
              name: "Labelling and packaging printing",
              value: "",
              child: [],
            },
          ],
        },
        {
          name: "Textile and Cloting",
          value: "7",
          child: [
            {
              name: "Cloting",
              value: "44",
              child: [],
            },
            {
              name: "Textile",
              value: "45",
              child: [],
            },
          ],
        },
        {
          name: "Wood",
          value: "8",
          child: [
            {
              name: "Other (Wood)",
              value: "337",
              child: [],
            },
            {
              name: "Wooden building materials",
              value: "51",
              child: [],
            },
            {
              name: "Wooden houses",
              value: "47",
              child: [],
            },
          ],
        },
      ],
    })
  }
  return (
    <div className="h-full">
      <Form id={id} />
      {/* <div>
        <button onClick={addData}>addDoc</button>
      </div> */}
    </div>
  )
}

export default User
