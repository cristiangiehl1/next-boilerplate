import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { CodePreview } from '@/components/pages/(home)/code-preview'
import { Features } from '@/components/pages/(home)/features'
import { GetStarted } from '@/components/pages/(home)/get-started'
import { Hero } from '@/components/pages/(home)/hero'
import { TechStack } from '@/components/pages/(home)/tech-stack'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Features />
        <CodePreview />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
