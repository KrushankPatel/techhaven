import React from 'react'
import { Metadata } from 'next'
import NextImage from 'next/image'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import ContactUsContent from './ContactUsContent'

import './Contact.css' // Import your CSS file here

export default async function Contact() {
  return (
    <>
      <h1 className="main-head">Get in Touch</h1>
      <ContactUsContent />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page of website.',
  openGraph: mergeOpenGraph({
    title: 'Contact',
    url: '/Contact',
  }),
}
