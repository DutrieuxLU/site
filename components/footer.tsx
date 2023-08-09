import { useEffect, useState } from 'react'
import { madeWith } from '../utils/data'
import FooterLinks from './footer-links'

const Footer = () => {
  const [randomMadeWith, setRandomMadeWith] = useState('')
  useEffect(() => {
    setRandomMadeWith(madeWith[Math.floor(Math.random() * madeWith.length)])
  }, [])
  return (
    <div className="bg-amber-100 border-t-4 border-black py-12 px-4">
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <FooterLinks />
      </div>
    </div>
  )
}

export default Footer
