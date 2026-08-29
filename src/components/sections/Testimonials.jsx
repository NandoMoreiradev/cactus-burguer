import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { media } from '../../styles/theme';
import { testimonials } from '../../data/testimonialsData';

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.bg}, ${({ theme }) => theme.colors.kraft});
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 32px;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.cactus};
  opacity: 0.35;
  margin-bottom: 14px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 14px;

  svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 0.9rem;
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 22px;
  font-style: italic;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.cactusLight}, ${({ theme }) => theme.colors.cactus});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.charcoal};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
`;

const PersonInfo = styled.div`
  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.95rem;
  }

  span {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

const Testimonials = () => {
  return (
    <Section id="depoimentos">
      <Container>
        <SectionHeading
          kicker="Depoimentos"
          title={
            <>
              Quem prova, <span>vira cliente</span>
            </>
          }
          subtitle="A opinião de quem já sentiu o sabor da Cactus Burguer."
        />

        <Grid>
          {testimonials.map((t, i) => (
            <Card
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <QuoteIcon />
              <Stars>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </Stars>
              <Quote>“{t.quote}”</Quote>
              <Person>
                <Avatar>{initials(t.name)}</Avatar>
                <PersonInfo>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </PersonInfo>
              </Person>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Testimonials;
