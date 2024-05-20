'use client'
import React, { useState } from 'react'

import '../about.css'

export default function CarrerForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    console.log('First name: ', firstname)
    console.log('Last name: ', lastname)
    console.log('Email: ', email)
    console.log('Phone: ', phone)
    console.log('Message: ', message)
    console.log('Date: ', date)
    console.log('Url: ', url)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/About`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        message,
        date,
        url,
      }),
    })

    const { msg, success } = await res.json()
    setError(msg)
    setSuccess(success)

    if (success) {
      setFirstname('')
      setLastname('')
      setEmail('')
      setPhone('')
      setMessage('')
      setDate('')
      setUrl('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Manin-input-div">
          {/* First name */}

          <div className="Input-div-1">
            <label className="label-1">First Name</label>
            <input
              id="firstname"
              className="input-first"
              type="text"
              onChange={e => setFirstname(e.target.value)}
              value={firstname}
              placeholder="Enter here"
            />
          </div>

          {/* Last name */}
          <div className="Input-div-2">
            <label className="label-1">Last Name</label>
            <input
              id="lastname"
              className="input-first"
              type="text"
              onChange={e => setLastname(e.target.value)}
              value={lastname}
              placeholder="Enter here"
            />
          </div>

          {/* Email */}
          <div className="Input-div-3">
            <label className="label-1">Email *</label>
            <input
              id="email"
              className="input-first"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Enter here"
            />
          </div>

          {/* Phone Number*/}
          <div className="Input-div-4">
            <label className="label-1">Phone</label>
            <input
              id="phone"
              className="input-first"
              type="tel"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter here"
            />
          </div>

          {/*Position*/}
          <div className="Input-div-5">
            <label className="label-1">Position You Apply for</label>
            <input
              id="position"
              className="input-first"
              type="text"
              onChange={e => setMessage(e.target.value)}
              value={message}
              placeholder="Enter here"
            />
          </div>

          {/* Date */}
          <div className="Input-div-6">
            <label className="label-1">Available Start Date *</label>
            <input
              id="date"
              className="input-second"
              onChange={e => setDate(e.target.value)}
              value={date}
              type="date"
            />
          </div>

          {/* Link */}
          <div className="Input-div-7">
            <label className="label-1">Link to Resume</label>
            <input
              id="url"
              className="input-first"
              type="url"
              onChange={e => setUrl(e.target.value)}
              value={url}
              placeholder="Enter here"
            />
          </div>

          <div className="Input-div-8">
            <input className="carrer-button" type="submit" value="Submit" />
          </div>
        </div>
      </form>

      <div className="">
        {error &&
          error.map(e => (
            <div className={`${success ? 'text-green-800' : 'text-red-600'}`}>{e}</div>
          ))}
      </div>
    </>
  )
}
