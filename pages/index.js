import Head from 'next/head'

import { Inter } from '@next/font/google'

import {HomePage} from '../src/components/home/home-page.jsx';


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Event App</title>
        
      </Head>
      
      

      <HomePage data={data}/>
      
      
      
    </>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json');
  console.log(events_categories);

  return {
      props:{
          data: events_categories,
      },
  };
}
