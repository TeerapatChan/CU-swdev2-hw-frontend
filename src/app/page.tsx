import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'


export default function Home() {
  return (
    <main>
      <Banner />
      <div className={styles.cardContainer}>
        <Card/>
      </div>
    </main>
  )
}
