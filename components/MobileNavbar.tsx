'use client'

import React from 'react'
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import Image from 'next/image'
import Hamburger from '@/public/icons/hamburger.svg'
import Logo from '@/public/icons/logo.svg'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './Footer'


const MobileNavbar = ({user}: MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px] '>
        <Sheet>
            <SheetTrigger>
                <Image
                src={Hamburger}
                width={30}
                height={30}
                alt='menu'
                className='cursor-pointer'      
                />
            </SheetTrigger>
            <SheetContent side="left" className='border-none bg-white'>
                <Link href='/' 
                className='cursor-pointer items-center gap-1 px-4 flex'>
                <Image
                    src={Logo}
                    width={44}
                    height={44}
                    alt='Horizon Logo'
                    
                />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                </Link>

                <div className='mobilenav-sheet'>
                    <SheetClose asChild>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map((link, index) => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                return (
                                    <SheetClose asChild key={link.route}>

                                        <Link
                                        href={link.route} 
                                        key={link.label}
                                        className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient' : isActive} )} >
                                            <Image
                                            src={link.imgURL}
                                            alt={link.label}
                                            width={20}
                                            height={20}
                                            className={cn({'brightness-[3] invert-0' : isActive})}
                                            />
                                        <p className={cn('text-16 font-semibold text-black-2 ', {'text-white': isActive})}>
                                            {link.label}
                                        </p>
                                        </Link>
                                    </SheetClose>
                                );
                                })}

                                USER
                        </nav>
                    </SheetClose>
                    <Footer user={user} type='mobile'/>
                </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavbar