import { Popover } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
// Local Data
import data from '../../data/portfolio.json'

const Header = ({
  handleWorkScroll,
  handleProjectScroll,
  handleAboutScroll,
  isBlog,
}) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { name, showBlog, showResume } = data

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Set to true when scrolled down 50px
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const resumeUrl =
    'https://d3us96m5nk8oz0.cloudfront.net/andrew-zang-resume.pdf'

  return (
    <>
      <Popover className='block tablet:hidden mt-5'>
        {({ open }) => (
          <>
            <div className='flex items-center justify-between p-2 laptop:p-0'>
              <h1
                onClick={() => router.push('/')}
                className='font-medium p-2 laptop:p-0 link ml-4'
              >
                {name}.
              </h1>

              <div className='flex items-center'>
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    <img
                      className='h-6'
                      src={`/images/${
                        theme === 'dark' ? 'moon.svg' : 'sun.svg'
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className='h-5'
                    src={`/images/${
                      !open
                        ? theme === 'dark'
                          ? 'menu-white.svg'
                          : 'menu.svg'
                        : theme === 'light'
                        ? 'cancel.svg'
                        : 'cancel-white.svg'
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className='grid grid-cols-1'>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleProjectScroll}>Project</Button>
                  {showResume && (
                    <Button onClick={() => window.open(resumeUrl)}>
                      Resume
                    </Button>
                  )}
                </div>
              ) : (
                <div className='grid grid-cols-1'>
                  <Button onClick={() => router.push('/')} classes='first:ml-1'>
                    Home
                  </Button>
                  {showResume && (
                    <Button
                      onClick={() => window.open(resumeUrl)}
                      classes='first:ml-1'
                    >
                      Resume
                    </Button>
                  )}
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-gradient-dark'
              : 'bg-gradient'
            : ''
        }`}
      >
        <h1
          onClick={() => router.push('/')}
          className='font-medium cursor-pointer mob:p-2 laptop:p-0 ml-4'
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className='flex'>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleWorkScroll}>Works</Button>
            <Button onClick={handleProjectScroll}>
              Projects & Design Docs
            </Button>
            {showResume && (
              <Button
                onClick={() => window.open(resumeUrl)}
                classes='first:ml-1'
              >
                Resume
              </Button>
            )}
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  className='h-6'
                  src={`/images/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className='flex'>
            <Button onClick={() => router.push('/')}>Home</Button>
            {showResume && (
              <Button
                onClick={() => window.open(resumeUrl)}
                classes='first:ml-1'
              >
                Resume
              </Button>
            )}

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  className='h-6'
                  src={`/images/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Header
