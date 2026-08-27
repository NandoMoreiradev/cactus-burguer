// ⚠️ DADOS DE EXEMPLO — troque pelas informações reais da Cactus Burguer antes de publicar.
const siteConfig = {
  name: 'Cactus Burguer',
  tagline: 'Hambúrguer artesanal com atitude',
  whatsapp: '5579999999999', // troque pelo número real (formato: 55 + DDD + número)
  whatsappDisplay: '(79) 99999-9999',
  phoneDisplay: '(79) 3222-2222',
  email: 'contato@cactusburguer.com.br',
  address: {
    street: 'Av. Ivo do Prado, 1200 — Centro',
    city: 'Aracaju - SE',
    cep: '49010-000',
    mapsQuery: 'Aracaju, SE',
  },
  hours: [
    { day: 'Terça a Quinta', time: '18h às 23h' },
    { day: 'Sexta e Sábado', time: '18h às 00h' },
    { day: 'Domingo', time: '18h às 22h' },
    { day: 'Segunda', time: 'Fechado' },
  ],
  socials: {
    instagram: 'https://instagram.com/cactusburguer',
    facebook: 'https://facebook.com/cactusburguer',
    tiktok: 'https://tiktok.com/@cactusburguer',
  },
};

export const whatsappLink = (message) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export default siteConfig;
