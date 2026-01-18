"use client";
import Link from 'next/link';
import React from 'react'
import { links } from '@/data/data';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="nav">
      <Link href="/">Logo</Link>
      <div>
        {
          links?.map(link => <Link href={link.url} key={link.id} className={`nav-item ${pathname === link.url ? 'active' : ''}`}>
              {link.title}
            </Link>)
        }
      </div>
    </div>
  )
}

export default Navbar;
