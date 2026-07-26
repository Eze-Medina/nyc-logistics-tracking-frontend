import { GuideForm } from '../components/form/guideForm/GuideForm'
import style from './homepage.module.css'

export const HomePage = () => {
  return (
    <section className={style.container}>
      <GuideForm />
    </section>
  )
}