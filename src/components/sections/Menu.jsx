import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import SafeImage from '../ui/SafeImage';
import Button from '../ui/Button';
import { media } from '../../styles/theme';
import { menuHighlights } from '../../data/menuData';
import { orderLink } from '../../data/siteConfig';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.charcoal};
  position: relative;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 56px;

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.charcoalSoft};
  border: 1px solid rgba(244, 231, 211, 0.08);
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
    border-color: rgba(182, 234, 81, 0.4);
  }
`;

const CardImage = styled.div`
  height: 210px;
  position: relative;
`;

const Tag = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  background: ${({ theme }) => theme.colors.cactus};
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 5px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardBody = styled.div`
  padding: 22px 22px 26px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.cream};
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gold};
    white-space: nowrap;
  }
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
  margin-bottom: 18px;
`;

const OrderLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.cactusLight};
  transition: gap 0.25s ease;

  &:hover {
    gap: 12px;
  }
`;

const FullMenuCta = styled(motion.div)`
  text-align: center;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
    margin-bottom: 22px;
  }
`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Menu = () => {
  return (
    <Section id="cardapio">
      <Container>
        <SectionHeading
          dark
          kicker="Cardápio"
          title={
            <>
              Um cardápio <span>diferente de verdade</span>
            </>
          }
          subtitle="Os destaques da casa. Para ver tudo — burgers, combos, bebidas e mais — é só conferir o cardápio completo."
        />

        <Grid variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {menuHighlights.map((item) => (
            <Card key={item.id} variants={cardVariants}>
              <CardImage>
                {item.tag && <Tag>{item.tag}</Tag>}
                <SafeImage src={item.image} alt={item.name} />
              </CardImage>
              <CardBody>
                <CardTop>
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </CardTop>
                {item.description && <CardDesc>{item.description}</CardDesc>}
                <OrderLink href={orderLink} target="_blank" rel="noopener noreferrer">
                  <FaShoppingBag /> Pedir esse
                </OrderLink>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <FullMenuCta
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>Quer ver tudo? Burgers, combos, bebidas e mais no nosso cardápio completo.</p>
          <Button href={orderLink} target="_blank" rel="noopener noreferrer" $variant="primary" $size="lg">
            <FaShoppingBag /> Ver cardápio completo e pedir
          </Button>
        </FullMenuCta>
      </Container>
    </Section>
  );
};

export default Menu;
