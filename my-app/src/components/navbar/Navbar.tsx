import Link from 'next/link';
import React from 'react'
import { links } from '@/data/data';

const Navbar = () => {
  return (
    <div className="nav">
      <Link href="/">Logo</Link>
      <div>
        {
          links.map(link => <Link href={link.url} key={link.id}>{link.title}</Link>)
        }
      </div>
    </div>
  )
}

export default Navbar;
