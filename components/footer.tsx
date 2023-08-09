import { useEffect, useState } from 'react'
import { madeWith } from '../utils/data'
import FooterLinks from './footer-links'

const Footer = () => {
  return (
    <div className="bg-[#fefae0] border-t-4 border-black py-12 px-4">
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <FooterLinks />
      </div>
    </div>
  )
}

export default Footer
