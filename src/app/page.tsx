
import Header from '../../components/header';
import Content from '../../components/content';
import Services from '../../components/services';
import Contact from '../../components/contact';
import '../../styles/global.scss';

export default function Home() {
  return (
    <main>
      <div className='home__container'>
        <Header />
        <Content />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
