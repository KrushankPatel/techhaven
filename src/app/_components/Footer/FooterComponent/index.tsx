'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.topFooter}>
        <Gutter>
          <div className={classes.row}>
            <div className={classes.extra}>
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/logo-white.svg"
                  alt="logo"
                  width={170}
                  height={50}
                />
              </Link>
              <p className={classes.address}>
                4840 Town Center Pkwy, Jacksonville, FL 32246, United States
              </p>
              <p className={classes.phoneNumber}>Phone No: +19045155959</p>
              <p className={classes.connectPara}>Contect Us:</p>
              <div className={classes.socialLinks}>
                {navItems.map(item => {
                  const icon = item?.link?.icon as Media

                  return (
                    <Button
                      key={item.link.label}
                      el="link"
                      href={item.link.url}
                      newTab={true}
                      className={classes.socialLinkItem}
                    >
                      <Image
                        src={icon?.url}
                        alt={item.link.label}
                        width={24}
                        height={24}
                        className={classes.socialIcon}
                      />
                    </Button>
                  )
                })}
              </div>
            </div>
            <div className={classes.column}>
              <ul className={classes.footerLinks}>
                <li>
                  <h5 className={classes.subHead}>ABOUT</h5>
                </li>
                <li>
                  <Link href="/About" target="_blank">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" target="_blank">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/About#sub-heading" target="_blank">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="http://stories.flipkart.com/" target="_blank">
                    TechHaven Stories
                  </Link>
                </li>
                <li>
                  <Link href="/Helpcenter" target="_blank">
                    HelpCenter
                  </Link>
                </li>
                <li>
                  <Link href="https://www.flipkart.com/corporate-information" target="_blank">
                    Corporate Information
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.column}>
              <ul className={classes.footerLinks}>
                <li>
                  <h5 className={classes.subHead}>GROUP COMPANIES</h5>
                </li>
                <li>
                  <Link href="https://www.myntra.com/" target="_blank">
                    Myntra
                  </Link>
                </li>
                <li>
                  <Link href="https://www.flipkartwholesale.com/" target="_blank">
                    TechHaven Wholesale
                  </Link>
                </li>
                <li>
                  <Link href="https://www.cleartrip.com/" target="_blank">
                    Cleartrip
                  </Link>
                </li>
                <li>
                  <Link href="https://www.shopsy.in" target="_blank">
                    Shopsy
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.column}>
              <ul className={classes.footerLinks}>
                <li>
                  <h5 className={classes.subHead}>HELP</h5>
                </li>
                <li>
                  <Link href="https://www.flipkart.com/pages/payments" target="_blank">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="https://www.flipkart.com/pages/shipping" target="_blank">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
                    target="_blank"
                  >
                    Cancellation &amp; Returns
                  </Link>
                </li>
                <li>
                  <Link href="/Helpcenter" target="_blank">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://seller.flipkart.com/fiv?otracker=${otracker}_navlinks"
                    target="_blank"
                  >
                    Report Infringement
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.column}>
              <ul className={classes.footerLinks}>
                <li>
                  <h5 className={classes.subHead}>CONSUMER POLICY</h5>
                </li>
                <li>
                  <Link
                    href="https://www.flipkart.com/pages/returnpolicy?otracker=${otracker}_navlinks"
                    target="_blank"
                  >
                    Cancellation &amp; Returns
                  </Link>
                </li>
                <li>
                  <Link href="/pages/terms?otracker=${otracker}_navlinks" target="_blank">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.flipkart.com/pages/paymentsecurity?otracker=${otracker}_navlinks"
                    target="_blank"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.flipkart.com/pages/privacypolicy?otracker=${otracker}_navlinks"
                    target="_blank"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.flipkart.com/pages/ewaste-compliance-tnc?otracker=${otracker}_navlinks"
                    target="_blank"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.pay}>
            <h1 className={classes.payHead}>WE ACCEPT FOLLOWING METHODS</h1>
            <div className={classes.payMainDiv}>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
                  alt="Visa.png"
                  width={69}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"
                  alt=""
                  width={69}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"
                  alt=""
                  width={69}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png"
                  alt=""
                  width={69}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-jcb%403x.png"
                  alt=""
                  width={69}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
                  alt="Diners.png"
                  width={65}
                  height={43}
                />
              </div>
              <div>
                <Image
                  className={classes.imgstyle}
                  src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
                  alt="PayPal.png"
                  width={69}
                  height={43}
                />
              </div>
            </div>
          </div>
          <hr style={{ margin: '0 2%', color: '#fff' }} />
        </Gutter>
        <p className={classes.copyright}>{footer?.copyright}</p>
      </div>
    </footer>
  )
}

export default FooterComponent
