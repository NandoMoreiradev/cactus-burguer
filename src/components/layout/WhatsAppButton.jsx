import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../../data/siteConfig';

const Float = styled(motion.a)`
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 90;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.7rem;
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.5);

  &:hover {
    filter: brightness(1.05);
  }
`;

const WhatsAppButton = () => (
  <Float
    href={whatsappLink('Olá! Quero fazer um pedido na Cactus Burguer 🌵🍔')}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Pedir pelo WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaWhatsapp />
  </Float>
);

export default WhatsAppButton;
