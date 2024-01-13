import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

const Home = () => {
  return (
    <main className='h-full w-full relative'>
      <div className='w-full h-full overflow-x-hidden pt-4 pb-3 md:pt-6 px-2'>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
