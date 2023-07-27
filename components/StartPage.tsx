'use client'
import React from 'react';
import {TypeAnimation} from 'react-type-animation'
import {FaDiscord, FaGithub, FaTelegramPlane} from "react-icons/fa";
import Link from "next/link";
import Animation from "@/utils/Animation";

const links = [
    {name: 'github', path: 'https://github.com/Rigelion154/', icon: <FaGithub/>},
    {name: 'telegram', path: 'https://t.me/Rigelion154', icon: <FaTelegramPlane/>},
    {name: 'discord', path: 'https://discordapp.com/users/580826430804459533/', icon: <FaDiscord/>},
]

const StartPage = () => {
    return (
      <div id='start-section' className='min-h-[85vh] flex items-center justify-center pb-[15vh]'>
          <div className='container flex flex-col gap-y-9 items-center md:items-start text-center md:text-left'>
              <div>
                  <Animation direction={'up'} delay={0.3}>
                      <h1 className='text-3xl md:text-5xl uppercase'>Ilya <span>Kuznetsov</span></h1>
                  </Animation>
                  <Animation direction={'up'} delay={0.4}>
                      <div className='text-2xl md:text-4xl font-secondary font-semibold leading-[1]'>
                          <span className='mr-4'>I'm a</span>
                          <TypeAnimation sequence={['ЛООООХ', 2000, 'ПИДР', 2000,]}
                                         speed={50}
                                         className='text-accent'
                                         wrapper='span'
                                         repeat={Infinity}/>
                      </div>
                  </Animation>
              </div>
              <Animation direction={'up'} delay={0.5}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio dolorum et fugit
                      itaque quas quo, sed voluptatem. Aspernatur dolorem eius pariatur, provident quia sapiente.</p>
              </Animation>
              <Animation direction={'up'} delay={0.6}>
                  <div className='flex gap-x-4 items-center'>
                      <button className="btn btn-sm md:btn-me">Contact me</button>
                      <a href="#" className='text-gradient'>My CV</a>
                  </div>
              </Animation>
              <Animation direction={'up'} delay={0.7}>
                  <div className='flex gap-x-5 text-4xl'>
                      {links.map(link => <Link href={link.path} key={link.name} target={'_blank'}>{link.icon}</Link>)}
                  </div>
              </Animation>
          </div>
      </div>
    );
};

export default StartPage;