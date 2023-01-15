import React, { useState } from "react"
import SubItem from "./subItem"

const Select = ({
  sectors,
  selected,
  setSelected,
  inputValue,
  setInputValue,
}) => {
  const [subItem, setSubItem] = useState([])
  const [currentItem, setCurrentItem] = useState(null)

  const onItemClick = (item, i) => {
    if (item.length > 0) {
      setSubItem(item)
      setCurrentItem(i)
    } else {
      setSelected(false)
      // setInputValue((prev) => ({
      //   ...prev,
      //   [e.target.name]: e.target.value
      // }))
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setSelected(!selected)}
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="px-4 py-2 text-center inline-flex items-center justify-between w-full border rounded-lg border-gray-400"
        type="button"
      >
        {inputValue.sectorName.trim().length > 0
          ? inputValue.sectorName
          : "Please Select one"}
        <svg
          className="w-4 h-4 ml-2"
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
      </button>
      {selected && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 w-full">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 flex flex-col h-52 overflow-y-auto">
            {sectors &&
              sectors.map((item, index) => (
                <li
                  key={index}
                  value={item.value}
                  name={item.name}
                  className="block hover:bg-gray-50 px-2 py-2 relative cursor-pointer"
                  onClick={() => onItemClick(item.child, index, item)}
                >
                  <div className="grid grid-cols-12">
                    <a href="#!" className="col-span-11">
                      {item.name}
                    </a>
                    <div className="col-span-1">
                      {item.child && item.child.length > 0 && (
                        <svg
                          className={`w-4 h-4 ml-2 ${
                            currentItem === index
                              ? "transition-all rotate-180 delay-75"
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
                  </div>
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
          </ul>
        </div>
      )}
    </div>
  )
}

export default Select
