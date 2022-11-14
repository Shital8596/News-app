import React, { useContext, useState } from 'react'
import { NewsContext } from '../NewsContext';

function Navbar() {
  const {text,  setFilterData, data, setText} = useContext(NewsContext)
  const [input, setInput] = useState("")


  const handleChange = (e) => {
    setInput(e.target.value)
    setText(e.target.value);
  }

  return (
      <div className='navbar'>
        <div className='leftNav'>
          <ul className='listDiv'>
            <li>Country</li>
            <li>Tech</li>
            <li>Tesla</li>
          </ul>
        </div>
        <div className='rightNav'>
          <div className="searchBar">
            <div className="nav-item">
              <input type="text" name="product" value={input} id="inputVal"
                onChange={handleChange}
                placeholder="Search Your Products" />
            </div>
            <div className="search_icon">
              <i className="fa-solid fa-magnifying-glass" id="search"></i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar