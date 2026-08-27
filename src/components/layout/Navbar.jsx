import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { GiCactus } from 'react-icons/gi';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { media } from '../../styles/theme';
import { whatsappLink } from '../../data/siteConfig';

const links = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
];

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
  padding: ${({ $scrolled }) => ($scrolled ? '12px 0' : '22px 0')};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? 'rgba(28, 20, 16, 0.92)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ $scrolled, theme }) => ($scrolled ? theme.shadow.md : 'none')};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.6rem;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.cream};
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.colors.cactusLight};
    font-size: 1.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.fireLight};
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 34px;

  ${media.lg} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.fireLight};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.cream};
  }

  &:hover::after {
    width: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const CtaButton = styled(Button)`
  ${media.md} {
    display: none;
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.cream};
  font-size: 1.8rem;

  ${media.lg} {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.charcoal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const MobileLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.cream};

  &:hover {
    color: ${({ theme }) => theme.colors.fireLight};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <Bar $scrolled={scrolled}>
      <Container>
        <Inner>
          <Logo href="#home">
            <GiCactus />
            Cactus<span>Burguer</span>
          </Logo>

          <Links>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Links>

          <Actions>
            <CtaButton
              as="a"
              href={whatsappLink('Olá! Quero fazer um pedido na Cactus Burguer 🌵🍔')}
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="md"
            >
              Peça já
            </CtaButton>
            <Burger onClick={() => setOpen(true)} aria-label="Abrir menu">
              <HiMenu />
            </Burger>
          </Actions>
        </Inner>
      </Container>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Burger
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: 26, right: 26, display: 'flex' }}
              aria-label="Fechar menu"
            >
              <HiX />
            </Burger>
            {links.map((link, i) => (
              <MobileLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {link.label}
              </MobileLink>
            ))}
            <Button
              href={whatsappLink('Olá! Quero fazer um pedido na Cactus Burguer 🌵🍔')}
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="lg"
              onClick={() => setOpen(false)}
            >
              Peça pelo WhatsApp
            </Button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Bar>
  );
};

export default Navbar;
