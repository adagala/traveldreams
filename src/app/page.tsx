import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedTours from '@/components/FeaturedTours'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedTours />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

