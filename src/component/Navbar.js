import React from 'react'
// import '../styles'
import { LuSunMedium } from 'react-icons/lu'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { Avatar } from '@mui/material'

function Navbar(props) {
  const {getRoute}=props
  return (
    <div className='mainBody'>
    <div className='mainNav row'>
      {/* displaying in small screen */}
      <div className='d-lg-none d-md-none d-block pt-3 row d-flex ms-1'>
        <h1 className='fw-bold col-3'>peak</h1>
        <div className='col-7 justify-content-end mt-1'>
          <div className='input-group mb-3 bg-light rounded-2'>
            <input
              type='search'
              class='form-control'
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby='button-addon2'
            />
            <button
              className='btn btn-outline-info'
              type='button'
              id='button-addon2'
            >
              Search
            </button>
          </div>
        </div>
        <div className='col-2 pt-2'>
          <IoIosNotificationsOutline size={30}/>
        </div>
      </div>
      {/* displaying in large screen */}
      <div className=' mt-3 d-none d-lg-block d-md-block'>
        <div className='row container'>
          <div className='col-3'>{getRoute}</div>

          <div className='col-5'>
            <div className='col-12'>
              <div className='input-group mb-3 bg-light rounded-2'>
                <input
                  type='search'
                  class='form-control'
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-outline-dark'
                  type='button'
                  id='button-addon2'
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className='col-4 d-flex'>
            <div className='col-5 ps-lg-5'>
              <LuSunMedium size={30}/>
            </div>
            <div className='col-3'>
              <IoIosNotificationsOutline size={30} />
            </div>
            <div className='col-3 ms-5'>
              <Avatar variant='rounded' scr='https://randomuser.me/api/portraits/women/79.png'></Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar