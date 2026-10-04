import useTheme from './hooks/useTheme'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import HeroSection from './components/sections/HeroSection'
import EnquirySection from './components/sections/EnquirySection'
import QuoteSection from './components/sections/QuoteSection'
import SportsSection from './components/sections/SportsSection'
import DiningSection from './components/sections/DiningSection'
import SecretSection from './components/sections/SecretSection'
import RankingsSection from './components/sections/RankingsSection'
import PersonalitiesSection from './components/sections/PersonalitiesSection'
import ParentsSection from './components/sections/ParentsSection'
import ReviewsSection from './components/sections/ReviewsSection'
import CollaborationsSection from './components/sections/CollaborationsSection'

const App = () => {
  const { dark, toggle } = useTheme()
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onToggleTheme={toggle} />
      <FloatingActions />
      <main>
        <HeroSection />
        <EnquirySection />
        <QuoteSection />
        <SportsSection />
        <DiningSection />
        <SecretSection />
        <RankingsSection />
        <PersonalitiesSection />
        <ParentsSection />
        <ReviewsSection />
        <CollaborationsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
