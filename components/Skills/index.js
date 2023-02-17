import { useTheme } from 'next-themes'

const skillsData = {
  Frameworks: [],
  'Technologies/Tools': [],
}
const Languages = [
  {
    id: 1,
    name: 'Typescript',
    imageSrc: '/skills/typescript.svg',
    href: 'https://www.typescriptlang.org/',
  },
  {
    id: 2,
    name: 'JavaScript',
    imageSrc: '/skills/javascript.svg',
    href: 'https://www.javascript.com/',
  },
  {
    id: 3,
    name: 'C++',
    imageSrc: '/skills/c.svg',
    href: 'https://cplusplus.com/',
  },
  {
    id: 4,
    name: 'Python',
    imageSrc: '/skills/python.svg',
    href: 'https://www.python.org/',
  },
  {
    id: 5,
    name: 'Solidity',
    imageSrc: '/skills/eth.svg',
    href: 'https://soliditylang.org/',
  },
]

const frameworks = [
  {
    id: 1,
    name: 'React',
    imageSrc: '/skills/react.svg',
    href: 'https://reactjs.org/',
  },
  {
    id: 2,
    name: 'NextJS',
    imageSrc: '/skills/nextjs2.svg',
    href: 'https://nextjs.org/',
  },
  {
    id: 3,
    name: 'Redux',
    imageSrc: '/skills/redux.svg',
    href: 'https://redux.js.org/',
  },
  {
    id: 4,
    name: 'ExpressJS',
    imageSrc: '/skills/expressjs.svg',
    href: 'https://expressjs.com/',
  },
  {
    id: 5,
    name: 'socket.io',
    imageSrc: '/skills/Socket-io.svg',
    href: 'https://socket.io/',
  },
]

const others = [
  {
    id: 1,
    name: 'NodeJS',
    imageSrc: '/skills/nodejs.svg',
    href: 'https://nodejs.org/en/',
  },
  {
    id: 2,
    name: 'MongoDB',
    imageSrc: '/skills/mongodb.svg',
    href: 'https://www.mongodb.com/',
  },
  {
    id: 3,
    name: 'PostgreSQL',
    imageSrc: '/skills/postgresql.svg',
    href: 'https://www.postgresql.org/',
  },
  {
    id: 4,
    name: 'GraphQL',
    imageSrc: '/skills/graphql.svg',
    href: 'https://graphql.org/',
  },
  {
    id: 5,
    name: 'Docker',
    imageSrc: '/skills/docker.svg',
    href: 'https://www.docker.com/',
  },
  {
    id: 6,
    name: 'Kubernetes',
    imageSrc: '/skills/k8s.svg',
    href: 'https://kubernetes.io/',
  },
  {
    id: 7,
    name: 'Redis',
    imageSrc: '/skills/redis.svg',
    href: 'https://redis.io/',
  },
  {
    id: 8,
    name: 'Nginx',
    imageSrc: '/skills/nginx.svg',
    href: 'https://www.nginx.com/',
  },
]

export default function Skills() {
  const { theme } = useTheme()
  return (
    // <div className='bg-white'>
    <div className='px-4 mx-auto max-w-screen-md'>
      <p className='align-baseline mt-10 text-lg'>Languages:</p>
      <div className='max-w-lg mt-3 grid grid-cols-5 gap-5 '>
        {Languages.map((language) => (
          <div
            className={`overflow-hidden rounded-lg shadow-2xl
          ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-50'} 
        pt-2 pb-2 
        text-center content-center
        hover:scale-105 active:scale-100 duration-300
        h-[100px] w-auto inline-block`}
            key={language.id}
          >
            <a
              key={language.id}
              href={language.href}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={language.imageSrc}
                alt={language.name}
                className='w-3/4 h-3/4 object-cover mx-auto'
              />
              <p className='mt-2 align-baseline'>{language.name}</p>
            </a>
          </div>
        ))}
      </div>
      <p className='align-baseline mt-10 text-lg'>Frameworks:</p>
      <div className='max-w-lg mt-3 grid grid-cols-5 gap-5 '>
        {frameworks.map((framework) => (
          <div
            className={`overflow-hidden rounded-lg shadow-2xl
            ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-50'} 
          pt-2 pb-2 
          text-center content-center
          hover:scale-105 active:scale-100 duration-300
          h-[100px] w-auto inline-block`}
            key={framework.id}
          >
            <a
              key={framework.id}
              href={framework.href}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={framework.imageSrc}
                alt={framework.name}
                className='w-3/4 h-3/4 object-cover mx-auto'
              />
              <p className='mt-2 align-baseline'>{framework.name}</p>
            </a>
          </div>
        ))}
      </div>
      <p className='align-baseline mt-10 text-lg'>Technologies:</p>
      <div className='max-w-lg mt-3 grid grid-cols-5 gap-5 '>
        {others.map((other) => (
          <div
            className={`overflow-hidden rounded-lg shadow-2xl
            ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-50'} 
          pt-2 pb-2 
          text-center content-center
          hover:scale-105 active:scale-100 duration-300
          h-[100px] w-auto inline-block`}
            key={other.id}
          >
            <a
              key={other.id}
              href={other.href}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={other.imageSrc}
                alt={other.name}
                className='w-3/4 h-3/4 object-cover mx-auto'
              />
              <p className='mt-2 align-baseline'>{other.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
