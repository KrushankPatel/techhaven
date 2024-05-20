'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

export const UserInfo = () => {
  const { user } = useAuth()
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    // Retrieve stored image URL from localStorage on component mount
    const storedImage = localStorage.getItem('selectedImage')
    if (storedImage) {
      setSelectedImage(storedImage)
    }
  }, [])

  const handleImageChange = event => {
    const file = event.target.files[0]
    const imageURL = URL.createObjectURL(file)
    setSelectedImage(imageURL)
    // Store selected image URL in localStorage
    localStorage.setItem('selectedImage', imageURL)
  }

  const handleProfileClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className={classes.profile}>
      <div className={classes.imageContainer} onClick={handleProfileClick}>
        <img
          src={selectedImage || '/assets/icons/profile.svg'}
          alt="Selected"
          width={50}
          height={50}
          className={selectedImage ? classes.rounded : ''}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>

      <div className={classes.profileInfo}>
        <p className={classes.name}>{user?.name}</p>
        <p className={classes.email}>{user?.email}</p>
      </div>
    </div>
  )
}
