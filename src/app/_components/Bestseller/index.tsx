import React from 'react'

import { shopItemsData } from './data'
import { Slider } from './slider'

import './index.module.scss'

function App() {
  return <Slider slides={shopItemsData} />
}

export default App
