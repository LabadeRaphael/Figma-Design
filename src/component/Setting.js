import React from 'react'
import Button from '@mui/material/Button'

import { Avatar} from '@mui/material'
import { IoBagHandle } from "react-icons/io5";

function Setting() {
  return (
    <section className='container ms-lg-3 ms-5 row mt-3'>
        <div className=''>User Profile</div>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='row mt-2'>

              <div className='col-lg-2 col-4'>
                <Avatar scr='https://randomuser.me/api/portraits/women/79.png'></Avatar>
              </div>

              <div className='col-lg-6 col-8'>
                <div>Alaa Nahamed</div>
                <div>Product Design</div>
                <div className='col-12'>
                  Eastern European Time(EEt),Cairo UTC +3
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-lg-0 mt-5'>
            <div className='d-lg-flex justify-content-between'>
              <Button variant='outlined' size='small'>
                Upload New Photo
              </Button>
              <Button variant='outlined' size='small' className='ms-lg-0 ms-4'>
                Delete
              </Button>
            </div>
          </div>
        </div>
        <hr className='mt-3'/>
        <section className='mt-3 row'>
          <div className='col-6'>
            <label htmlFor='firstName' className='fw-bold'>
              First Name
            </label>
            <input
              type='text'
              className='form-control mt-3'
              placeholder='eg.Alaa'
              id='firstName'
            />
          </div>
          <div className='col-6'>
            <label htmlFor='lastName' className='fw-bold'>
              First Name
            </label>
            <input
              type='text'
              className='form-control mt-3'
              placeholder='eg.Mohammed'
              id='lastName'
            />
          </div>
          <div className='col-12 mt-3'>
            <label htmlFor='userName' className='fw-bold'>
              First Name
            </label>
            <input
              type='text'
              className='form-control mt-3'
              placeholder='eg.alaa.mohammed'
              id='userName'
            />
          </div>
          <hr className='mt-4' />

          <section className='row mt-3'>
            <div className='col-6'>
              <label htmlFor='email' className='fw-bold'>
                Email Address
              </label>
              <input
                type='email'
                className='form-control mt-3'
                placeholder='&#9993'
                id='email'
              />
            </div>

            <div className='col-6'>
              <label htmlFor='number' className='fw-bold'>
                Phone Number
              </label>
              <input
                type='text'
                className='form-control mt-3'
                value='&phone'
                id='number'
              />
            </div>
          </section>
          <hr className='mt-4' />
          <div>Companies</div>
          <section>
            <div className='row col-4 mt-3'>
              <div className='col'>
               <Avatar>
                 <IoBagHandle />
               </Avatar>
              </div>
              <div className='col fw-bold'>Procrew</div>
            </div>
            <div className='row col-4 mt-3'>
            <div className='col'>
               <Avatar>
                <IoBagHandle />

               </Avatar>
              </div>
              <div className='col fw-bold'>Noon</div>
            </div>
            <div className='row col-4 mt-3 '>
            <div className='col'>
                <Avatar>
                  <IoBagHandle />
                </Avatar>
              </div>
              <div className='col fw-bold'>LamasaTech</div>
            </div>
            <hr className='mt-4' />

            <section>
              <div className='col-12 row'>
                <label htmlFor='location' className='fw-bold'>
                  Location
                </label>
                <input
                  type='text'
                  className='form-control mt-3'
                  value='&phone'
                  id='location'
                />
              </div>
              <div className='col-12 row'>
                <label htmlFor='timeZone' className='fw-bold'>
                  Time Zone
                </label>
                <input
                  type='text'
                  className='form-control mt-3'
                  value='&phone'
                  id='timeZone'
                />
              </div>
            </section>

            <hr className='mt-4' />
            <div className='row'>
              <div className='col-6'>
                <label htmlFor='currentPassword' className='fw-bold'>
                  Phone Number
                </label>
                <input
                  type='text'
                  className='form-control mt-3'
                  value='&phone'
                  id='currentPassword'
                />
              </div>
              <div className='col-6'>
                <label htmlFor='newPassword' className='fw-bold'>
                  New Password
                </label>
                <input
                  type='text'
                  className='form-control mt-3'
                  value='&phone'
                  id='newPassword'
                />
              </div>
              <div className='col-12'>
                <label htmlFor='confirmPassword' className='fw-bold'>
                  confirmPassword
                </label>
                <input
                  type='text'
                  className='form-control mt-3'
                  value='&phone'
                  id='confirmPassword'
                />
              </div>
              <section>
                <div className='d-flex float-end mt-5 mb-5'>
                  <Button variant='outlined' size='small' className='me-4'>
                    Cancel
                  </Button>
                  <Button variant='outlined' size='small'>
                    Save Changes
                  </Button>
                </div>
              </section>
            </div>
          </section>
        </section>
      </section> 

  )
}

export default Setting