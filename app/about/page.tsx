import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <main className='py-4 px-32'>
      <Link className='bg-teal-500 text-center text-black font-semibold' href="/dashboard">Dashboard</Link>
    </main>
  )
}

export default About