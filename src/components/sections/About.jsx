import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GiBarbecue, GiWheat, GiChiliPepper } from 'react-icons/gi';
import Container from '../ui/Container';
import SafeImage from '../ui/SafeImage';
import SectionHeading from '../ui/SectionHeading';
import { media } from '../../styles/theme';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.bg};
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 70px;
  align-items: center;

  ${media.lg} {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const VisualGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: 480px;

  ${media.md} {
    height: 380px;
  }
`;

const ImgBox = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:first-child {
    margin-top: 60px;
  }
`;

const Badge = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.cactus};
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 20px 26px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  text-align: center;
  z-index: 2;
  width: 160px;

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.8rem;
  }

  span {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  ${media.md} {
    display: none;
  }
`;

const TextCol = styled.div``;

const Lead = styled(motion.p)`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 20px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cream};
  border: 1px solid rgba(28, 20, 16, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 24px 18px;
  text-align: center;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.cactus};
    margin-bottom: 12px;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  p {
    font-size: 0.82rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const features = [
  { icon: GiBarbecue, title: 'Grelha na Brasa', text: 'Carne suculenta no ponto certo, sempre.' },
  { icon: GiWheat, title: 'Pão Artesanal', text: 'Brioche fresquinho feito todos os dias.' },
  { icon: GiChiliPepper, title: 'Toque Nordestino', text: 'Coentro, pimenta-de-cheiro e ingredientes que vêm da nossa terra.' },
];

const About = () => {
  return (
    <Section id="sobre">
      <Container>
        <Grid>
          <div style={{ position: 'relative' }}>
            <Badge
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <strong>+8</strong>
              <span>Anos de sabor</span>
            </Badge>
            <VisualGrid>
              <ImgBox>
                <SafeImage
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80"
                  alt="Interior da hamburgueria Cactus Burguer"
                />
              </ImgBox>
              <ImgBox>
                <SafeImage
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                  alt="Preparo do hambúrguer artesanal"
                />
              </ImgBox>
            </VisualGrid>
          </div>

          <TextCol>
            <SectionHeading
              align="left"
              kicker="Nossa história"
              title={
                <>
                  A mistura que <span>deu certo</span>
                </>
              }
            />
            <Lead
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              A Cactus nasceu com uma ideia simples: pegar o hambúrguer que todo
              mundo ama e colocar nele os sabores que fazem parte da nossa terra.
              Carne suculenta, queijo coalho, banana-da-terra, coentro,
              pimenta-de-cheiro e outros ingredientes nordestinos criam combinações
              que você provavelmente nunca imaginou encontrar em um hambúrguer.
            </Lead>
            <Lead
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Foi aí que a Cactus ganhou seu jeito próprio: hambúrguer artesanal,
              sabor marcante e muita personalidade. Hoje somos ponto de encontro de
              quem gosta de experimentar sabores diferentes de verdade.
            </Lead>

            <Features>
              {features.map((f, i) => (
                <Feature
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <f.icon />
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </Feature>
              ))}
            </Features>
          </TextCol>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
