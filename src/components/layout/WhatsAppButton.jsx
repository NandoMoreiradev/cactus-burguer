import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import { orderLink } from '../../data/siteConfig';

const Float = styled(motion.a)`
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 90;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.cactusLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 1.7rem;
  box-shadow: 0 10px 24px rgba(182, 234, 81, 0.5);

  &:hover {
    filter: brightness(1.05);
  }
`;

const WhatsAppButton = () => (
  <Float
    href={orderLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fazer pedido"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaShoppingBag />
  </Float>
);

export default WhatsAppButton;
