import styled from 'styled-components';
import { GiCactus } from 'react-icons/gi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Container from '../ui/Container';
import { media } from '../../styles/theme';
import siteConfig from '../../data/siteConfig';

const Wrap = styled.footer`
  background: ${({ theme }) => theme.colors.espresso};
  padding: 60px 0 28px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(244, 231, 211, 0.12);

  ${media.md} {
    flex-direction: column;
    gap: 30px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cream};

  svg {
    color: ${({ theme }) => theme.colors.cactusLight};
    font-size: 1.7rem;
  }

  span {
    color: ${({ theme }) => theme.colors.cactusLight};
  }
`;

const Tagline = styled.p`
  margin-top: 10px;
  max-width: 280px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
`;

const Cols = styled.div`
  display: flex;
  gap: 70px;

  ${media.sm} {
    gap: 40px;
    flex-wrap: wrap;
  }
`;

const Col = styled.div`
  h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.cream};
    margin-bottom: 16px;
  }

  a, p {
    display: block;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
    margin-bottom: 10px;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.cactusLight};
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 16px;

  p {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(244, 231, 211, 0.15);
    color: ${({ theme }) => theme.colors.cream};
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.cactus};
      border-color: ${({ theme }) => theme.colors.cactus};
      color: ${({ theme }) => theme.colors.charcoal};
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrap>
      <Container>
        <Top>
          <div>
            <Logo>
              <GiCactus />
              Cactus<span>Burguer</span>
            </Logo>
            <Tagline>{siteConfig.tagline}, direto de Aracaju para você.</Tagline>
          </div>

          <Cols>
            <Col>
              <h5>Navegação</h5>
              <a href="#sobre">Sobre</a>
              <a href="#cardapio">Cardápio</a>
              <a href="#galeria">Galeria</a>
              <a href="#localizacao">Localização</a>
            </Col>
            <Col>
              <h5>Contato</h5>
              <p>{siteConfig.phoneDisplay}</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}</p>
            </Col>
            <Col>
              <h5>Trabalhe conosco</h5>
              <a href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent('Currículo - Trabalhe conosco')}`}>
                Envie seu currículo
              </a>
            </Col>
          </Cols>
        </Top>

        <Bottom>
          <p>© {year} Cactus Burguer. Todos os direitos reservados.</p>
          <Socials>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </Socials>
        </Bottom>
      </Container>
    </Wrap>
  );
};

export default Footer;
