import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import { GiCactus } from 'react-icons/gi';
import Container from '../ui/Container';
import Button from '../ui/Button';
import SafeImage from '../ui/SafeImage';
import { media } from '../../styles/theme';
import { orderLink } from '../../data/siteConfig';
import heroBg from '../../assets/7.jpg';
import heroPlate from '../../assets/1.jpg';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.charcoal};
  padding-top: 100px;
`;

const BgImage = styled(SafeImage)`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    filter: brightness(0.55) saturate(1.1);
  }
`;

const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(circle at 20% 20%, rgba(193, 68, 14, 0.25), transparent 45%),
    linear-gradient(180deg, rgba(28, 20, 16, 0.4) 0%, rgba(28, 20, 16, 0.75) 55%, rgba(28, 20, 16, 0.98) 100%);
`;

const Content = styled(Container)`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding-bottom: 60px;

  ${media.lg} {
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 40px;
  }
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cream};
  margin-top: 40px;
  margin-bottom: 22px;

  span {
    display: block;
    color: transparent;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.cactusLight}, ${({ theme }) => theme.colors.cactus});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
  max-width: 480px;
  margin-bottom: 36px;

  ${media.lg} {
    margin-inline: auto;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;

  ${media.lg} {
    justify-content: center;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 40px;
  margin-top: 56px;

  ${media.lg} {
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }
`;

const Stat = styled.div`
  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.cream};
  }

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
  }
`;

const VisualWrap = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lg} {
    display: none;
  }
`;

const PlateCircle = styled.div`
  position: relative;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid rgba(244, 231, 211, 0.15);
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

const FloatBadge = styled(motion.div)`
  position: absolute;
  bottom: 12px;
  left: -30px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 16px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};

  svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gold};
  }

  strong {
    display: block;
    font-size: 1.1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.75rem;
  }
`;

const CactusIcon = styled(GiCactus)`
  position: absolute;
  top: -20px;
  right: -10px;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.cactusLight};
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.4));
`;

const ScrollHint = styled(motion.a)`
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.textOnDarkMuted}, transparent);
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      <BgImage
        src={heroBg}
        alt="Hambúrguer artesanal Cactus Burguer"
      />
      <Scrim />

      <Content>
        <div>
          <Title initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            O hambúrguer
            <span>Com Tempero Nordestino</span>
          </Title>

          <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Carne suculenta, queijo coalho, banana-da-terra, coentro e pimenta-de-cheiro —
            a mistura que deu certo e criou um hambúrguer com sabor marcante e muita personalidade.
          </Subtitle>

          <Actions initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Button href="#cardapio" $variant="primary" $size="lg">
              Ver Cardápio
            </Button>
            <Button
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              $variant="outline"
              $size="lg"
            >
              <FaShoppingBag /> Pedir agora
            </Button>
          </Actions>

          <Stats initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Stat>
              <strong>15k+</strong>
              <span>Burgers servidos</span>
            </Stat>
            <Stat>
              <strong>4.9</strong>
              <span>Avaliação média</span>
            </Stat>
            <Stat>
              <strong>100%</strong>
              <span>Ingredientes frescos</span>
            </Stat>
          </Stats>
        </div>

        <VisualWrap initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <PlateCircle>
            <SafeImage
              src={heroPlate}
              alt="Maria Bonita, hambúrguer com queijo coalho e banana-da-terra"
            />
          </PlateCircle>
          <CactusIcon />
          <FloatBadge
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GiCactus />
            <div>
              <strong>Maria Bonita</strong>
              <small>Queijo coalho, banana-da-terra e pimenta-de-cheiro</small>
            </div>
          </FloatBadge>
        </VisualWrap>
      </Content>

      <ScrollHint
        href="#sobre"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll
      </ScrollHint>
    </Section>
  );
};

export default Hero;
