import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Text from '../text';
import ContainerAboutSection from './style';

const AboutSection = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const revealFloatScroll = entries => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        setIsHidden(true);
        return;
      }

      setIsHidden(false);
    };

    const sectionObserver = new IntersectionObserver(revealFloatScroll, {
      root: null,
      threshold: 0.15,
    });

    sectionObserver.observe(aboutSection);
  }, []);

  return (
    <ContainerAboutSection id='about'>
      <h1>About</h1>
      <Text>
        If you want to cut your videos to be used in applications that have a limit of seconds for
        an upload, such as <span>whatsapp</span>, the source code of this project is on
        <a
          href='https://github.com/PedroXavibz/Easy-split'
          title='https://github.com/PedroXavibz/Easy-split'
        >
          <span> github</span>
        </a>
        , don&apos;t worry about the videos are all <span>encrypted</span>
      </Text>

      {!isHidden && (
        <a href='/#'>
          <BsFillArrowUpCircleFill />
        </a>
      )}
    </ContainerAboutSection>
  );
};

export default AboutSection;
