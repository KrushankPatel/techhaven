import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Price } from '../../_components/Price'
import { RemoveFromCartButton } from '../../_components/RemoveFromCartButton'

import classes from './index.module.scss'

// Function to generate random product rating
const generateRandomRating = () => {
  // Generate a random rating between 3 to 5
  return Math.floor(Math.random() * 3) + 3
}

const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const { title, categories, meta: { image: metaImage, description } = {} } = product

  // Generate a random rating for the product
  const rating = generateRandomRating()

  // Function to generate star icons and rating points based on rating
  const renderStars = () => {
    const MAX_STARS = 5
    const filledStars = Math.floor(rating) // Extract integer part
    const remainder = rating - filledStars // Extract decimal part
    const unfilledStars = MAX_STARS - filledStars - Math.ceil(remainder) // Calculate unfilled stars

    const stars = []

    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className={`${classes.star} ${classes.yellow}`}>
          &#9733;
        </span>,
      )
    }

    // Partial star
    if (remainder > 0) {
      stars.push(
        <span key={filledStars} className={`${classes.star} ${classes.yellow}`}>
          &#9733;
        </span>,
      )
    }

    // Unfilled stars
    for (let i = 0; i < unfilledStars; i++) {
      stars.push(
        <span key={filledStars + i} className={`${classes.star} ${classes.yellow}`}>
          &#9734;
        </span>,
      )
    }

    // Display rating points
    const ratingPoints = rating.toFixed(1)

    return (
      <Fragment>
        <span className={classes.ratingNumber}>{ratingPoints}</span>
        {stars}
      </Fragment>
    )
  }

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              const { title: categoryTitle } = category as Category

              const titleToUse = categoryTitle || 'Generic'
              const isLast = index === categories.length - 1

              return (
                <p key={index} className={classes.category}>
                  {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                  <span className={classes.separator}>|</span>
                </p>
              )
            })}
          </div>
          <p className={classes.stock}> In stock</p>
        </div>

        <Price product={product} button={false} />

        {/* Display the product rating */}
        <div className={classes.rating}> {renderStars()}</div>

        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description}</p>
        </div>

        <AddToCartButton product={product} className={classes.addToCartButton} />

        {/* Insert CartItem component here */}
      </div>
    </Gutter>
  )
}

export default ProductHero // Make sure to export ProductHero
