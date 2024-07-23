import { useEffect, useRef, useState } from 'react';
import { default as sliceTexture, default as sliceTextureLarge, default as sliceTexturePlaceholder } from '../../assets/cycle.png';
import { default as sprTexture, default as sprTextureLarge, default as sprTexturePlaceholder } from '../../assets/speaker.png';
import { default as gamestackTexture2, default as gamestackTexture2Large, default as gamestackTexture2Placeholder } from '../../assets/weact.png';
import { default as gamestackTexture, default as gamestackTextureLarge, default as gamestackTexturePlaceholder } from '../../assets/weact1.png';
import { Footer } from '../../components/footer';
import config from '../../config.json';
import { baseMeta } from '../../utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';


// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/favicon.ico',
      as: 'image',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/favicon.ico',
      as: 'image',
      importance: 'low',
    },
  ];
  
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Speaker Haven: Discover Your Ideal Speakers and Events"
        description="Discover and book the perfect speakers for your events at Speaker Haven."
        buttonText="Visit website"
        buttonLink="https://speakerhaven-demo-website.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Weact Tech: Innovating the Digital Future"
        description="Explore cutting-edge technology solutions with Weact Tech. Transforming ideas into reality through innovation and expertise."
        buttonText="View website"
        buttonLink="https://weact-tech.vercel.app/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Ride Axis: Revolutionizing Urban Mobility"
        description="Experience the future of urban transportation with Ride Axis. Convenient, eco-friendly, and affordable rides for everyone."
        buttonText="Visit website"
        buttonLink="https://ride-axis.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
