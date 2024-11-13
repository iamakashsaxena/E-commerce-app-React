import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
// import { ImCart  } from 'react-icons/Im';

const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    // console.log(element)
    setData(element)
  }
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }



  return (

    <>
      <header>
        <div className='nav-bar'>
          <Link to={"/"} className='brand'>E-app</Link>


          <form onSubmit={handleSubmit} className='search-bar'>
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder='Search products' />
          </form>

          <Link to={"/cart"} className='cart'>
            <button type="button" className="btn btn-primary position-relative">
            {/* <ImCart/> */}  Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link >
        </div>
        {
          location.pathname == '/' && (
            <div className='nav-bar-wrapper'>
              <div className=''>Filter by {"->"}</div>
              <div onClick={() => setData(items)} className='item'>No filter</div>
              <div onClick={() => filterByCategory('mobiles')} className='item'>Mobiles</div>
              <div onClick={() => filterByCategory('laptops')} className='item'>Laptops</div>
              <div onClick={() => filterByCategory('tablets')} className='item'>Tablets</div>
              <div onClick={() => filterByPrice('29,999')} className='item'>{">"}29,999</div>
              <div onClick={() => filterByPrice('49,999')} className='item'>{">"}49,999</div>
              <div onClick={() => filterByPrice('69,999')} className='item'>{">"}69,999</div>
              <div onClick={() => filterByPrice('89,999')} className='item'>{">"}89,999</div>

            </div>
          )
        }

      </header>
    </>
  )
}

export default Navbar