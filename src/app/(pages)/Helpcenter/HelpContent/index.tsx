'use client'

import React, { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextImage from 'next/image'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
import Link from 'next/link'

import '../HelpCenter.css'

export default function Helpcontent() {
  const [activeTab, setActiveTab] = useState('Professional Skills')
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  const handleAccordionClick = (accordionName: string) => {
    setActiveAccordion(activeAccordion === accordionName ? null : accordionName)
  }

  useEffect(() => {
    const defaultOpen = document.getElementById('defaultOpen') as HTMLElement
    if (defaultOpen) {
      defaultOpen.click()
    }
  }, [])

  return (
    <>
      <div className="tab inverted">
        <button
          className={`tablinks ${activeTab === 'Professional Skills' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('Professional Skills')}
          id="defaultOpen"
        >
          Professional Skills
        </button>
        <button
          className={`tablinks ${activeTab === 'Education' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('Education')}
        >
          Education
        </button>
      </div>
      <div
        id="Professional Skills"
        className="tabcontent"
        style={{ display: activeTab === 'Professional Skills' ? 'block' : 'none' }}
      >
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => handleAccordionClick('question1')}>
              How do I add a new question & answer?
              <span className="accordion-icon">
                <FontAwesomeIcon
                  icon={activeAccordion === 'question1' ? faAngleUp : faAngleDown}
                  bounce
                />
              </span>
            </div>
            <div
              className="accordion-content"
              style={{ display: activeAccordion === 'question1' ? 'block' : 'none' }}
            >
              <h3 className="accor-hrlp-head">To add a new FAQ follow these steps:</h3>
              <ul className="accor-hrlp-ul">
                <li className="accor-help-li">1. Click “Manage FAQs” button</li>
                <li className="accor-help-li">
                  2. From your site’s dashboard you can add, edit and manage all your questions and
                  answers
                </li>
                <li className="accor-help-li">
                  3. Each question and answer should be added to a category
                </li>
                <li className="accor-help-li">4. Save and publish.</li>
              </ul>
              <div className="social-help-links">
                <div className="icon-help-cont">
                  <div className="help-facebook">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-instagram">
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-linkedin">
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => handleAccordionClick('question2')}>
              Can I insert an image, video, or gif in my FAQ?
              <span className="accordion-icon">
                <FontAwesomeIcon
                  icon={activeAccordion === 'question2' ? faAngleUp : faAngleDown}
                  bounce
                />
              </span>
            </div>
            <div
              className="accordion-content"
              style={{ display: activeAccordion === 'question2' ? 'block' : 'none' }}
            >
              <h3 className="accor-hrlp-head">Yes. To add media follow these steps:</h3>
              <ul className="accor-hrlp-ul">
                <li className="accor-help-li">1. Enter the app’s Settings</li>
                <li className="accor-help-li">2. Click on the “Manage FAQs” button</li>
                <li className="accor-help-li">
                  3. Select the question you would like to add media to
                </li>
                <li className="accor-help-li">
                  4. When editing your answer click on the camera, video, or GIF icon
                </li>
                <li className="accor-help-li">5. Add media from your library.</li>
              </ul>
              <div className="social-help-links">
                <div className="icon-help-cont">
                  <div className="help-facebook">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-instagram">
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-linkedin">
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => handleAccordionClick('question3')}>
              How do I edit or remove the “FAQ” title?
              <span className="accordion-icon">
                <FontAwesomeIcon
                  icon={activeAccordion === 'question3' ? faAngleUp : faAngleDown}
                  bounce
                />
              </span>
            </div>
            <div
              className="accordion-content"
              style={{ display: activeAccordion === 'question3' ? 'block' : 'none' }}
            >
              <p className="accor-end-one">
                You can edit the title from the Settings tab in the app.
              </p>
              <p className="accor-end-two">
                If you don’t want to display the title, simply disable the Title under “Info to
                Display”.
              </p>
              <div className="social-help-links">
                <div className="icon-help-cont">
                  <div className="help-facebook">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-instagram">
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                  <div className="help-linkedin">
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} fade style={{ color: '#000000' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Education"
        className="tabcontent education-container"
        style={{ display: activeTab === 'Education' ? 'block' : 'none' }}
      >
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => handleAccordionClick('education')}>
            How do I edit or remove the “FAQ” title?
            <span className="accordion-icon">
              <FontAwesomeIcon
                icon={activeAccordion === 'education' ? faAngleUp : faAngleDown}
                bounce
              />
            </span>
          </div>
          <div
            className="accordion-content"
            style={{ display: activeAccordion === 'education' ? 'block' : 'none' }}
          >
            <p className="accor-end-one">
              An FAQ section can be used to quickly answer common questions about you or your
              business, such as “Where do you ship to?”, “What are your opening hours?” or “How can
              I book a service?”
            </p>
            <p className="accor-end-two">
              It’s a great way to help people navigate your site and can even boost your site’s SEO.
            </p>

            <NextImage
              src="https://static.wixstatic.com/media/452dfd_cebd1429c8454ae9a61bf85247a07391~mv2.jpeg/v1/fill/w_438,h_249,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/452dfd_cebd1429c8454ae9a61bf85247a07391~mv2.jpeg"
              alt=""
              width={350}
              height={199}
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            />

            <div className="social-help-links">
              <div className="icon-help-cont">
                <div className="help-facebook">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} fade style={{ color: '#000000' }} />
                  </Link>
                </div>
                <div className="help-instagram">
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} fade style={{ color: '#000000' }} />
                  </Link>
                </div>
                <div className="help-linkedin">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fade style={{ color: '#000000' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
