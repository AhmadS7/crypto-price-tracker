// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import type { ReactElement } from 'react'

// export default function Layout({ children:ReactElement }) {
//   const router = useRouter();

//   const menuItems = [
//     {
//       href: '/',
//       title: 'Homepage',
//     },
//     {
//       href: '/about',
//       title: 'About',
//     },
//     {
//       href: '/contact',
//       title: 'Contact',
//     },
//   ];

//   return (
//     <div className='min-h-screen flex flex-col'>
//       <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
//         Next.js sidebar menu
//       </header>
//       <div className='flex flex-col md:flex-row flex-1'>
//         <aside className='bg-fuchsia-100 w-full md:w-60'>
//           <nav>
//             <ul>
//               {menuItems.map(({ href, title }) => (
//                 <li className='m-2' key={title}>
//                   <Link href={href}>
//                     <a
//                       className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
//                         router.asPath === href && 'bg-fuchsia-600 text-white'
//                       }`}
//                     >
//                       {title}
//                     </a>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>
//         <main className='flex-1'>{children}</main>
//       </div>
//     </div>
//   );
// }

// import useSWR from 'swr'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  // const { data, error } = useSWR('/api/navigation', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      {/* <Navbar links={data.links} /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
