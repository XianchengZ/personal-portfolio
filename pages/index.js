import { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import Router, { useRouter } from 'next/router'
import Socials from '../components/Socials'
import { useIsomorphicLayoutEffect, ISOToDate } from '../utils'
import { stagger } from '../animations'
import Footer from '../components/Footer'
import Head from 'next/head'
import Button from '../components/Button'
import Link from 'next/link'
import Skills from '../components/Skills'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WorkExperience from '../components/WorkExperience'

import { getAllPosts } from '../utils/api'
// Local Data
import data from '../data/portfolio.json'

export default function Home({ posts }) {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const textFour = useRef()

  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
      { y: 0, x: 0, transform: 'scale(1)' }
    )
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV === 'development') {
      fetch('/api/projects', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname)
      })
    } else {
      alert('This thing only works in development mode.')
    }
  }

  return (
    <div className={`relative`}>
      {/* <div className={`relative ${data.showCursor && 'cursor-none'}`}> */}
      <ToastContainer />
      {/* {data.showCursor && <Cursor />} */}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className='gradient-circle'></div>
      <div className='gradient-circle-bottom'></div>

      <div className='container mx-auto mb-10'>
        <Header
          handleProjectScroll={handleProjectScroll}
          handleAboutScroll={handleAboutScroll}
          handleWorkScroll={handleWorkScroll}
        />
        <div className='laptop:mt-20 mt-10 p-10'>
          <div className='mt-5'>
            <h1
              ref={textOne}
              className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5'
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5'
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5'
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className='mt-2 laptop:mt-5' />
        </div>

        <div className='mt-10 laptop:mt-10 p-2 laptop:p-10' ref={aboutRef}>
          <h1 className='text-2xl text-bold'>About.</h1>
          <p className='tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5'>
            {data.aboutpara}
          </p>
        </div>

        <div className='mt-10 laptop:mt-10 p-2 laptop:p-10'>
          <h1 className='text-2xl text-bold'>Skills.</h1>
          <Skills />
        </div>

        <div className='mt-10 laptop:mt-30 p-2 laptop:p-10' ref={workRef}>
          <h1 className='text-2xl text-bold'>Work.</h1>

          {data.resume.experiences.map((experience) => (
            <>
              <WorkExperience
                dates={experience.dates}
                type={experience.type}
                position={experience.position}
                bullets={experience.bullets}
              />
              <br />
              <br />
            </>
          ))}
          <div className='mt-3 text-lg'>
            Please check my resume for more details about my work :)
          </div>
        </div>
        <div className='mt-10 laptop:mt-30 p-2 laptop:p-10' ref={projectRef}>
          <h1 className='text-2xl text-bold'>Projects & Design Docs.</h1>
          <h1 className='text-xl text-bold'>Coming soon...</h1>
          {/* <div className='mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4'>
            {posts &&
              posts.map((post) => (
                <div
                  className='cursor-pointer relative hover:scale-105 active:scale-100  transition-all ease-out duration-300'
                  key={post.slug}
                  onClick={() => Router.push(`/projects/${post.slug}`)}
                >
                  <img
                    className='w-full h-60 rounded-lg shadow-lg object-cover'
                    src={post.image}
                    alt={post.title}
                  ></img>
                  <h2 className='mt-5 text-4xl'>{post.title}</h2>
                  <p className='mt-2 opacity-50 text-lg'>{post.preview}</p>
                  <span className='text-sm mt-5 opacity-25'>
                    {ISOToDate(post.date)}
                  </span>
                  {process.env.NODE_ENV === 'development' && mounted && (
                    <div className='absolute top-0 right-0'>
                      <Button
                        onClick={(e) => {
                          deleteBlog(post.slug)
                          e.stopPropagation()
                        }}
                        type={'primary'}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              ))}
          </div> */}
          <Footer />
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === 'development' && (
          <div className='fixed bottom-5 right-5'>
            <Link href='/edit'>
              <Button type='primary'>Edit Data</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'title',
    'image',
    'preview',
    'author',
    'date',
  ])

  return {
    props: {
      posts: [...posts],
    },
  }
}
