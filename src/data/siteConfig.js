const siteConfig = {
  name: 'Cactus Burguer',
  tagline: 'Hambúrguer artesanal com sabor nordestino',
  whatsapp: '5579999400555',
  whatsappDisplay: '(79) 99940-0555',
  phoneDisplay: '(79) 99940-0555',
  careersEmail: 'cactus1burguer@gmail.com',
  address: {
    street: 'Rua Urquiza Leal, 122, Grageru',
    city: 'Aracaju - SE',
    mapsQuery: 'Rua Urquiza Leal, 122, Grageru, Aracaju - SE',
  },
  hours: [
    { day: 'Terça a Domingo', time: '18h às 22h45' },
    { day: 'Segunda', time: 'Fechado' },
  ],
  socials: {
    instagram: 'https://www.instagram.com/burguercactus/',
    facebook: 'https://www.facebook.com/burguercactus/?locale=pt_BR',
  },
};

export const whatsappLink = (message) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const orderLink = 'https://xmenu.com.br/pedidos/?loja=20996';

export default siteConfig;
