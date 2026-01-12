import { socials } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h5>Copyrighted...All Rights Reserved.</h5>
        <div>
          {
            socials?.map((social) => {
              return(
                <Link key={social.id} href={social.url}>
                  <Image
                     src={social.src}
                     alt={social.alt}
                     width={35}
                     height={35}
                  ></Image>
                </Link>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Footer;
