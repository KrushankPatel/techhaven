import React from 'react'
import { Metadata } from 'next'
import NextImage from 'next/image'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CarrerForm from './CareerForm'

import './about.css' // Import your CSS file here

export default async function About() {
  return (
    <Gutter>
      <main>
        <div className="Main-container">
          <h1 className="main-head">About TechHaven</h1>
          <hr style={{ margin: '0rem 4rem', border: '1px solid lightgray' }} />
          <div className="sub-container">
            <div className="sub-sub-1">
              <NextImage
                src="https://static.wixstatic.com/media/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg/v1/fill/w_825,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg"
                alt="product"
                width={500}
                height={100}
                className="mainImg"
              />
            </div>
            <div className="sub-sub-2">
              <div className="sub-sub-2-flex-1">
                Welcome to Tech Haven, your ultimate destination for the latest and greatest in
                technology products. Founded with a passion for innovation and a commitment to
                quality, Tech Haven strives to bring the best in tech directly to your doorstep.
                From cutting-edge smartphones and high-performance laptops to smart home devices and
                wearable tech, we offer a comprehensive selection of products designed to enhance
                your digital life. Our team of tech enthusiasts works tirelessly to source the
                newest and most reliable products, ensuring that our customers have access to the
                top technology brands and the latest trends.
              </div>
              <div className="sub-sub-2-flex-2">
                At Tech Haven, we believe that technology should be accessible to everyone, which is
                why we prioritize customer satisfaction and affordability. Our user-friendly online
                store is designed to provide a seamless shopping experience, with detailed product
                descriptions, customer reviews, and expert recommendations to help you make informed
                decisions.
              </div>
            </div>
          </div>
          <hr style={{ margin: '3rem 4rem', border: '1px solid lightgray' }} />
          <h1 id="sub-heading">Careers</h1>
          <p className="sub-para-main">
            Check out our job postings & opportunities waiting for you
          </p>
          {/* <div className="Manin-input-div">
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
              <label className="label-1">Phone</label>
              <input className="input-first" type="tel" placeholder="Enter here" />
            </div>
            <div className="Input-div-5">
              <label className="label-1">Position You Apply for</label>
              <input className="input-first" type="" placeholder="Enter here" />
            </div>
            <div className="Input-div-6">
              <label className="label-1">Available Start Date *</label>
              <input className="input-second" type="date" />
            </div>
            <div className="Input-div-7">
              <label className="label-1">Link to Resume</label>
              <input className="input-first" type="url" placeholder="Enter here" />
            </div>
            <div className="Input-div-8">
              <input className="carrer-button" type="button" value="Submit" />
            </div>
          </div> */}
          <CarrerForm />
        </div>
      </main>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'About page of website.',
  openGraph: mergeOpenGraph({
    title: 'About',
    url: '/About',
  }),
}
