import { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Socials from '../components/Socials'
import SocialShort from '../components/SocialShort'
import { ISOToDate } from '../utils'
import Footer from '../components/Footer'
import Head from 'next/head'
import Skills from '../components/Skills'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WorkExperience from '../components/WorkExperience'
import HeaderText from '../components/Introduction'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

import { getAllPosts } from '../utils/api'
// Local Data
import data from '../data/portfolio.json'

export default function Home({ posts }) {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()

  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme

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

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`relative`}>
      {mounted && (
        <div className='ml-2'>
          <ToastContainer />
          <Head>
            <title>{data.name}</title>
          </Head>

          <div
            className={`${
              currentTheme === 'dark'
                ? 'gradient-circle-dark'
                : 'gradient-circle'
            }`}
          ></div>
          <div
            className={`${
              currentTheme === 'dark'
                ? 'gradient-circle-bottom-dark'
                : 'gradient-circle-bottom'
            }`}
          ></div>

          <Header
            handleProjectScroll={handleProjectScroll}
            handleAboutScroll={handleAboutScroll}
            handleWorkScroll={handleWorkScroll}
          />
          <div className='container mx-px mb-10'>
            <div className='laptop:mt-20 mt-10 p-10'>
              <div className='mt-5 mx-0'>
                <HeaderText text={data.headerTaglineOne} />
                <HeaderText text={data.headerTaglineTwo} />
                <HeaderText text={data.headerTaglineThree} />
                <HeaderText text={data.headerTaglineFour} />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div
                className='mt-10 laptop:mt-10 p-2 laptop:p-10 flex flex-col laptop:flex-row'
                ref={aboutRef}
              >
                <div className='w-full laptop:w-2/5 flex justify-center items-center'>
                  <img
                    src='/images/photo.png'
                    alt='Your Name'
                    className='rounded-full w-3/4 laptop:w-full max-w-xs  hover:scale-105 duration-300'
                  />
                </div>
                <div className='w-full laptop:w-3/5 mt-5 laptop:mt-0 laptop:ml-10'>
                  <h1 className='text-2xl font-bold text-primary'>About Me</h1>
                  <p className='mt-2 text-xl laptop:text-3xl'>
                    {data.aboutpara}
                  </p>
                  <SocialShort className='mt-10 laptop:mt-10' />
                </div>
              </div>
            </motion.div>

            <div className='mt-10 laptop:mt-30 p-2 laptop:p-10' ref={workRef}>
              <h1 className='text-2xl text-bold'>Work Experiences</h1>

              {data.resume.experiences.map((experience) => (
                <>
                  <WorkExperience
                    dates={experience.dates}
                    type={experience.type}
                    position={experience.position}
                    bullets={experience.bullets}
                    logo={experience.logo}
                  />
                  <br />
                  <br />
                </>
              ))}
              <h1 className='text-2xl text-bold'>Research Experience</h1>

              {data.resume.research.map((experience) => (
                <>
                  <WorkExperience
                    dates={experience.dates}
                    type={experience.type}
                    position={experience.position}
                    bullets={experience.bullets}
                    logo={experience.logo}
                  />
                  <br />
                  <br />
                </>
              ))}
              <div className='mt-3 text-lg'>
                Please check my resume for more details about my work :)
              </div>
            </div>
            <div className='mt-10 laptop:mt-10 p-2 laptop:p-10'>
              <h1 className='text-2xl text-bold'>Skills.</h1>
              <Skills />
            </div>
            <div
              className='mt-10 laptop:mt-30 p-2 laptop:p-10'
              ref={projectRef}
            >
              <h1 className='text-2xl text-bold'>Projects & Design Docs.</h1>
              <div className='mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4'>
                {data.projects &&
                  data.projects.map((post) => (
                    <div
                      className='cursor-pointer relative hover:scale-105 active:scale-100  transition-all ease-out duration-300'
                      key={post.slug}
                      onClick={() => window.open(post.link)}
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
                    </div>
                  ))}
              </div>
              <Footer />
              <p
                className={`text-center ${
                  currentTheme === 'dark' ? 'text-black' : 'text-white'
                } p-2`}
              >
                Congratulations, this is a secret text
              </p>
            </div>
          </div>
        </div>
      )}
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
