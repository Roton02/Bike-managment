import ConsultationForm from '@/component/ConsultationForm'
import NewsSection from '@/component/NewsCard'
import RecentNews from '@/component/RecentNews'

export const News = () => {
  return (
    <div>
      <div>
      <NewsSection></NewsSection>
      <RecentNews></RecentNews>
      <ConsultationForm></ConsultationForm>
      </div>
    </div>
  )
}
