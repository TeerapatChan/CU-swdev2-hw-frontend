import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'


export default function Home() {
  return (
    <main>
      <Banner />
      <div className='flex flex-row flex-wrap mr-15 ml-15 mt-8 mb-8 justify-center'>
        <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}