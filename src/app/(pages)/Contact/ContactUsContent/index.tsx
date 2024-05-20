'use client'

import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import NextImage from 'next/image'
import Link from 'next/link'

import '../Contact.css'

config.autoAddCss = false

export default function ContactUsContent() {
  return (
    <>
      <hr style={{ margin: '0rem 4rem', border: '.01px solid lightgray' }} />
      <div className="Main-container">
        <div className="sub-flex-1">
          <h2 className="sub-heads">Opening Hours</h2>
          <div className="sub-div-flex-1">Mon - Fri: 8am - 8pm</div>
          <div className="sub-div-flex-1">Saturday: 9am - 7pm</div>
          <div className="sub-div-flex-1">Sunday: 9am - 8pm</div>
        </div>
        <div className="sub-flex-2">
          <h2 className="sub-heads-1">We're here to help!</h2>
          <div className="sub-div-flex-2">
            Fill out the form with any query on your mind and we'll get back to you as soon as
            possible
          </div>
        </div>
        <div className="sub-flex-3">
          <h2 className="sub-heads-1">Store Location</h2>
          <div className="sub-div-flex-3">
            4840 Town Center Pkwy, Jacksonville, FL 32246, United States
          </div>
          <div className="sub-div-flex-3">+19045155959</div>
        </div>
        <div className="sub-flex-4">
          <div className="Manin-input-div">
            <div className="Input-div-1">
              <label className="label-1">First Name</label>
              <input className="input-first" type="text" placeholder="Enter here" />
            </div>

            <div className="Input-div-2">
              <label className="label-1">Last Name</label>
              <input className="input-first" type="text" placeholder="Enter here" />
            </div>

            <div className="Input-div-3">
              <label className="label-1">Email *</label>
              <input className="input-first" type="email" placeholder="Enter here" />
            </div>

            <div className="Input-div-4">
              <label className="label-1">Subject</label>
              <input className="input-first" type="text" placeholder="Enter here" />
            </div>

            <div className="Input-div-5">
              <label className="label-1">Message</label>
              <input className="input-first" type="text" placeholder="Enter here" />
            </div>

            <div className="Input-div-6">
              <input className="carrer-button" type="button" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
