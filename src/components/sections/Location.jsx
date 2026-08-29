import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaShoppingBag, FaInstagram, FaFacebook } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { media } from '../../styles/theme';
import siteConfig, { whatsappLink, orderLink } from '../../data/siteConfig';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.charcoal};
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: stretch;

  ${media.lg} {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.charcoalSoft};
  border: 1px solid rgba(244, 231, 211, 0.08);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;

  svg {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.cactusLight};
    margin-top: 3px;
    flex-shrink: 0;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.cream};
    font-size: 1rem;
    margin-bottom: 4px;
  }

  p, a {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.cactusLight};
  }
`;

const HoursList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HoursRow = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};

  span:last-child {
    color: ${({ theme }) => theme.colors.cream};
    font-weight: 600;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 14px;
  margin-top: auto;
  padding-top: 10px;
`;

const SocialIcon = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(244, 231, 211, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.cream};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cactus};
    border-color: ${({ theme }) => theme.colors.cactus};
    color: ${({ theme }) => theme.colors.charcoal};
    transform: translateY(-3px);
  }
`;

const MapWrap = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  min-height: 420px;
  position: relative;
  border: 1px solid rgba(244, 231, 211, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    min-height: 420px;
    border: 0;
    filter: grayscale(0.3) contrast(1.1);
  }
`;

const CtaBar = styled(motion.div)`
  margin-top: 60px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.cactusLight}, ${({ theme }) => theme.colors.cactus});
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: ${({ theme }) => theme.colors.charcoal};
    text-transform: uppercase;
  }

  p {
    color: rgba(28, 20, 16, 0.75);
    margin-top: 6px;
  }
`;

const Location = () => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.mapsQuery
  )}&output=embed`;

  return (
    <Section id="localizacao">
      <Container>
        <SectionHeading
          dark
          kicker="Localização"
          title={
            <>
              Venha nos <span>visitar</span>
            </>
          }
          subtitle="Estamos de portas abertas em Aracaju, esperando por você."
        />

        <Grid>
          <InfoCard initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <InfoRow>
              <FaMapMarkerAlt />
              <div>
                <h4>Endereço</h4>
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.city}</p>
              </div>
            </InfoRow>

            <InfoRow>
              <FaPhoneAlt />
              <div>
                <h4>Contato</h4>
                <p>{siteConfig.phoneDisplay}</p>
                <a href={whatsappLink('Olá! Vim pelo site da Cactus Burguer 🌵')} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </div>
            </InfoRow>

            <InfoRow>
              <FaClock />
              <div>
                <h4>Horário de funcionamento</h4>
                <HoursList>
                  {siteConfig.hours.map((h) => (
                    <HoursRow key={h.day}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </HoursRow>
                  ))}
                </HoursList>
              </div>
            </InfoRow>

            <Socials>
              <SocialIcon href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </SocialIcon>
            </Socials>
          </InfoCard>

          <MapWrap initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <iframe src={mapSrc} loading="lazy" title="Localização Cactus Burguer" allowFullScreen />
          </MapWrap>
        </Grid>

        <CtaBar initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div>
            <h3>Seu próximo hambúrguer favorito pode estar aqui</h3>
            <p>Peça seu Cactus pelo delivery ou venha viver essa experiência na nossa loja.</p>
          </div>
          <Button
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            $variant="dark"
            $size="lg"
          >
            <FaShoppingBag /> Fazer pedido
          </Button>
        </CtaBar>
      </Container>
    </Section>
  );
};

export default Location;
