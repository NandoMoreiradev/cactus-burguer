const theme = {
  colors: {
    bg: '#F4E7D3',
    bgAlt: '#EADBC0',
    kraft: '#D9C4A0',
    charcoal: '#1C1410',
    charcoalSoft: '#241B14',
    espresso: '#3E2723',
    wood: '#6F4E37',
    woodLight: '#8B5E3C',
    fire: '#C1440E',
    fireLight: '#E4622B',
    ember: '#8C2F0E',
    // Cores oficiais da marca: verde usado como destaque principal (CTAs, links, ícones, badges)
    cactus: '#9FD93E',
    cactusLight: '#B6EA51',
    cream: '#FBF3E4',
    textDark: '#241B14',
    textMuted: '#5A4A3A',
    textOnDark: '#F4E7D3',
    textOnDarkMuted: '#C9B79C',
    gold: '#D9A441',
    danger: '#B23A2E',
  },
  fonts: {
    display: "'Anton', 'Bebas Neue', sans-serif",
    heading: "'Poppins', sans-serif",
    body: "'Nunito', sans-serif",
  },
  breakpoints: {
    xs: '380px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '28px',
    pill: '999px',
  },
  shadow: {
    sm: '0 4px 12px rgba(28, 20, 16, 0.15)',
    md: '0 10px 30px rgba(28, 20, 16, 0.25)',
    lg: '0 20px 50px rgba(28, 20, 16, 0.35)',
    inset: 'inset 0 2px 6px rgba(28, 20, 16, 0.2)',
  },
  maxWidth: '1280px',
};

export const media = {
  xs: `@media (max-width: ${theme.breakpoints.xs})`,
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`,
};

export default theme;
