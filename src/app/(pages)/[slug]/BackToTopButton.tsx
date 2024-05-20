'use client'
// components/BackToTopButton.tsx
import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

import './backToTop.css' // Ensure this path is correct

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const checkScrollPosition = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Show the button after 40% of the page is scrolled
    if (scrollPosition > (documentHeight - windowHeight) * 0.4) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition)
    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <div className="back-to-top-div" onClick={scrollToTop}>
        <FaChevronUp color="white" size="1.3em" />
      </div>
    )
  )
}

export default BackToTopButton
