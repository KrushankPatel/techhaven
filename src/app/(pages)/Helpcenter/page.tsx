import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import Helpcontent from './HelpContent/index'

import './HelpCenter.css' // Import your CSS file here

export default async function HelpCenter() {
  return (
    <Gutter>
      <div>
        <h5 className="main-head">TechHaven Help Center</h5>
        <Helpcontent />
      </div>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Helpcenter',
  description: 'HelpCenter page of website.',
  openGraph: mergeOpenGraph({
    title: 'Helpcenter',
    url: '/Helpcenter',
  }),
}
