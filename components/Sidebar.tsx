'use client'

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/icons/logo.svg'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import path from 'path'


const Sidebar = ({user}: SiderbarProps ) => {
  const pathname = usePathname()
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' 
        className='mb-12 cursor-pointer items-center gap-2 flex'>
          <Image
            src={Logo}
            width={44}
            height={44}
            alt='Horizon Logo'
            className='size-[24] max-lx:size-14'
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        {sidebarLinks.map((link, index) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
          return (
            <Link
            href={link.route} 
            key={link.label}
            className={cn('sidebar-link', {'bg-bank-gradient' : isActive} )} >
              <div className='relative size-6'>
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({'brightness-[3] invert-0' : isActive})}

                
                />


              </div>
              <p className={cn('sidebar-label', {'!text-white': isActive})}>
                {link.label}
              </p>
            </Link>
          );
        })}

        USER

      </nav>
      FOOTER

    </section>
  )
}

export default Sidebar