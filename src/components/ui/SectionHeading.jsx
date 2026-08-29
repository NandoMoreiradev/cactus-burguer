import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/theme';

const Wrapper = styled.div`
  text-align: ${({ $align }) => $align || 'center'};
  max-width: 680px;
  margin: ${({ $align }) => ($align === 'left' ? '0 0 48px' : '0 auto 48px')};
`;

const Kicker = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cactus};
  margin-bottom: 14px;

  &::before {
    content: '';
    width: 30px;
    height: 3px;
    background: ${({ theme }) => theme.colors.cactus};
    border-radius: 4px;
  }
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDark : theme.colors.charcoal)};

  span {
    color: ${({ theme }) => theme.colors.cactus};
  }

  ${media.sm} {
    font-size: clamp(1.9rem, 8vw, 2.6rem);
  }
`;

const Subtitle = styled(motion.p)`
  margin-top: 16px;
  font-size: 1.05rem;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.textOnDarkMuted : theme.colors.textMuted)};
`;

const SectionHeading = ({ kicker, title, subtitle, align, dark, id }) => (
  <Wrapper $align={align} id={id}>
    {kicker && (
      <Kicker
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {kicker}
      </Kicker>
    )}
    <Title
      $dark={dark}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.05 }}
    >
      {title}
    </Title>
    {subtitle && (
      <Subtitle
        $dark={dark}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {subtitle}
      </Subtitle>
    )}
  </Wrapper>
);

export default SectionHeading;
