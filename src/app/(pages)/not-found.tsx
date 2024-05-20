import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'

import classes from './not-found.module.scss'

export default function NotFound() {
  return (
    <Gutter>
      <div className={classes.container}>
        <h1 style={{ marginBottom: 0 }}>Opps!!! 404</h1>
        <p>This page could not be found.</p>
        <Button href="/" label="Go Home" appearance="primary" />
      </div>
    </Gutter>
  )
}
