'use client'
import { useState } from 'react'
import { Category } from '../types'
import styles from './page.module.css'
import { getCategories } from './utils/helpers'

export default function Home() {

  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState<Category[]>([])

  const handleSelectCatgory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const changedValue = e.target.value
    const activeCategory = categories.find((item: any) => item.id == changedValue)
    const { children }: any = activeCategory
    setSubCategories(children || [])
  }

  // get data from api direct includes feature with next 13 insted getStaticProps
  getCategories().then((categories) => setCategories(categories.data.categories))

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <p className={styles.label}>Parent Catergory</p>
        <select onChange={handleSelectCatgory} className={styles.select}>
          <option>Select --</option>
          {categories.map((category: Category | any, index) => (
            <option className={styles.option} key={index} value={category.id}>{category.name}</option>
          ))}
        </select>
        <p className={styles.label}>Select Sub-Category</p>
        <select className={styles.select}>
          <option>Select --</option>

          {subCategories.map((subCategory: Category | any, index) => (
            <option className={styles.option} key={index} value={subCategory}>{subCategory.name}</option>
          ))}
        </select>
      </form>
    </main>
  )
}


 

 