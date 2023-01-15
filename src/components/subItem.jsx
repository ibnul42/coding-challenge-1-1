import { useState } from "react"

const SubItem = ({ items, setSelected, setInputValue, inputValue }) => {
  const [subItem, setSubItem] = useState([])
  const [currentItem, setCurrentItem] = useState(null)

  const onItemClick = (item, i, target) => {
    if (item.length > 0) {
      setSubItem(item)
      setCurrentItem(i)
    } else {
      setSelected(false)
      setInputValue((prev) => ({
        ...prev,
        sectorName: target.name,
        sectorValue: target.value,
      }))
    }
  }

  if (items.length > 0) {
    return (
      <div className="pl-3">
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              key={index}
              value={item.value}
              name={item.name}
              className={`relative cursor-pointer`}
              onClick={() => onItemClick(item.child, index, item)}
            >
              <li
                className={`grid grid-cols-12 ${
                  item.name === inputValue.sectorName
                    ? "font-bold border bg-gray-200"
                    : ""
                } hover:bg-gray-300 py-2 px-1`}
              >
                <a href="#!" className="col-span-11">
                  {item.name}
                </a>
                <div className="col-span-1">
                  {item.child && item.child.length > 0 && (
                    <svg
                      className={`w-4 h-4 ml-2 ${
                        currentItem === index
                          ? "transition-all delay-100 rotate-180"
                          : ""
                      }`}
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </div>
              </li>
              {currentItem === index && subItem && (
                <SubItem
                  items={subItem}
                  setSelected={setSelected}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                />
              )}
            </li>
          ))}
      </div>
    )
  }
}

export default SubItem
