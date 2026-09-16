import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import SafeImage from '../ui/SafeImage';
import { media } from '../../styles/theme';
import { galleryImages } from '../../data/galleryData';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.bg};

  ${media.md} {
    padding: 70px 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled(motion.div)`
  position: relative;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '5 / 4'};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  ${({ $center }) => $center && 'grid-column: 2;'}

  ${media.md} {
    grid-column: auto;
  }

  img {
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(28, 20, 16, 0.55) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Gallery = () => {
  return (
    <Section id="galeria">
      <Container $wide>
        <SectionHeading
          kicker="Galeria"
          title={
            <>
              Um gostinho <span>do nosso mundo</span>
            </>
          }
          subtitle="Momentos, texturas e sabores que fazem a experiência Cactus Burguer."
        />

        <Grid>
          {galleryImages.map((img, i) => (
            <Item
              key={img.id}
              $aspectRatio={img.aspectRatio}
              $center={galleryImages.length % 3 === 1 && i === galleryImages.length - 1}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <SafeImage src={img.src} alt={img.alt} fit="contain" />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Gallery;
