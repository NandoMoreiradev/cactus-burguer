import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import SafeImage from '../ui/SafeImage';
import { media } from '../../styles/theme';
import { menuCategories, menuItems } from '../../data/menuData';
import { whatsappLink } from '../../data/siteConfig';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.charcoal};
  position: relative;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 56px;
`;

const Tab = styled.button`
  padding: 12px 26px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.fire : 'rgba(244,231,211,0.2)')};
  background: ${({ $active, theme }) => ($active ? theme.colors.fire : 'transparent')};
  color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.fire};
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

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
    border-color: rgba(228, 98, 43, 0.4);
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
  background: ${({ theme }) => theme.colors.fire};
  color: ${({ theme }) => theme.colors.cream};
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
  min-height: 42px;
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Menu = () => {
  const [active, setActive] = useState('classicos');
  const items = menuItems.filter((item) => item.category === active);

  return (
    <Section id="cardapio">
      <Container>
        <SectionHeading
          dark
          kicker="Cardápio"
          title={
            <>
              Feito na brasa, <span>com amor</span>
            </>
          }
          subtitle="Escolha sua categoria favorita e descubra os sabores que fazem da Cactus Burguer a queridinha de Aracaju."
        />

        <Tabs>
          {menuCategories.map((cat) => (
            <Tab key={cat.id} $active={active === cat.id} onClick={() => setActive(cat.id)}>
              {cat.label}
            </Tab>
          ))}
        </Tabs>

        <AnimatePresence mode="wait">
          <Grid key={active} variants={containerVariants} initial="hidden" animate="show">
            {items.map((item) => (
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
                  <CardDesc>{item.description}</CardDesc>
                  <OrderLink
                    href={whatsappLink(`Olá! Quero pedir: ${item.name} 🌵🍔`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> Pedir esse
                  </OrderLink>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Menu;
