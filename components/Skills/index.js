const skillsData = {
  Frameworks: [],
  'Technologies/Tools': [],
}
const Languages = [
  {
    id: 1,
    name: 'Typescript',
    imageSrc: '/skills/typescript.svg',
    href: '#',
  },
  {
    id: 2,
    name: 'JavaScript',
    imageSrc: '/skills/javascript.svg',
    href: '#',
  },
  {
    id: 3,
    name: 'C++',
    imageSrc: '/skills/c.svg',
    href: '#',
  },
  {
    id: 4,
    name: 'Python',
    imageSrc: '/skills/python.svg',
    href: '#',
  },
  {
    id: 5,
    name: 'Solidity',
    imageSrc: '/skills/eth.svg',
    href: '#',
  },
  // {
  //   id: 1,
  //   name: 'Typescript',
  //   imageSrc: '/skills/typescript.png',
  //   href: '#',
  // },
]

// products.map((product) => (
//   <a key={product.id} href={product.href} className='group'>
//     <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
//       {/* <img
//         src={product.imageSrc}
//         alt={product.imageAlt}
//         className='h-full w-full object-cover object-center group-hover:opacity-75'
//       /> */}
//       <img
//         src={'/skills/typescript.png'}
//         alt={'typescript'}
//         className='h-full w-full object-cover object-center group-hover:opacity-75'
//       />
//     </div>
//   </a>
// ))

export default function Skills() {
  return (
    // <div className='bg-white'>
    <div className='px-4 mx-auto max-w-screen-md'>
      <p className='align-baseline mt-10 text-lg'>Languages:</p>
      <div className='max-w-lg mt-3 grid grid-cols-5 gap-5 '>
        {Languages.map((language) => (
          <div
            className='overflow-hidden rounded-lg shadow-2xl 
              pt-2 pb-2 
              text-center content-center
              hover:scale-105 active:scale-100 duration-300
              h-[100px] w-auto inline-block'
          >
            <a key={language.id} href={language.href}>
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
    </div>
  )
}
