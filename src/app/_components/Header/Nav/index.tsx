import React from 'react'
import { FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout() // Call the logout function provided by the Auth provider
  }

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      {user && <Link href="/account">Account</Link>}
      {user && <CartLink />} {/* Display CartLink only when user is logged in */}
      {user && <Button onClick={handleLogout} label="Logout" appearance="primary" />}{' '}
      {/* Logout button when user is logged in */}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
    </nav>
  )
}
