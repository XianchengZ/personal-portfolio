const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

// import typescript from 'images/typescript.png'

const skillsData = {
  Frameworks: [],
  'Technologies/Tools': [],
}
const Languages = [
  {
    id: 1,
    name: 'Typescript',
    imageSrc: '/skills/typescript.png',
    href: '#',
  },
  {
    id: 2,
    name: 'JavaScript',
    imageSrc: '/skills/javascript.png',
    href: '#',
  },
  {
    id: 3,
    name: 'C++',
    imageSrc: '/skills/c++_logo.png',
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
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-5 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {Languages.map((language) => (
          <a key={language.id} href={language.href} className='group'>
            <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
              <img
                src={language.imageSrc}
                alt={language.name}
                className='h-30 w-30 object-cover object-center group-hover:opacity-75'
              />
              <p>{language.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
