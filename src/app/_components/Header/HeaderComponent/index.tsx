'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi' // Import the close icon
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
import { products } from './data'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [showProductList, setShowProductList] = useState(false)
  const productContainerRef = useRef(null)

  useEffect(() => {
    // Add event listener to handle clicks outside of the product list
    const handleClickOutside = event => {
      if (productContainerRef.current && !productContainerRef.current.contains(event.target)) {
        setShowProductList(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    // Filter products based on the search term
    const filtered = products.filter(product =>
      // eslint-disable-next-line prettier/prettier
      product.name.toLowerCase().includes(value.toLowerCase()),)
    setFilteredProducts(filtered)
    setShowProductList(true)
  }

  const handleCloseProductList = () => {
    setSearchTerm('') // Clear the search term
    setShowProductList(false)
    setFilteredProducts([]) // Clear the filtered products
  }

  const handleProductItemClick = (productName: string) => {
    setSearchTerm(productName) // Set clicked product name in the search bar
    setShowProductList(false) // Close the product list
  }

  return (
    <nav
      className={[
        classes.header,
        noHeaderFooterUrls.includes(pathname) && classes.hide,
        showProductList && classes.showProductList, // Apply class to show product list
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
        </Link>

        {/* Search Bar */}
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Close button */}
          {(searchTerm || showProductList) && ( // Show close button if search term or product list is visible
            <button className={classes.closeButton} onClick={handleCloseProductList}>
              <FiX />
            </button>
          )}

          {/* Render the filtered products */}
          {showProductList && (
            <div ref={productContainerRef} className={classes.productContainer}>
              <ul className={classes.productList}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <li key={product.id} className={classes.productItem}>
                      <Link
                        href={product.link}
                        onClick={() => handleProductItemClick(product.name)}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className={classes.productItem}>Item not found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
