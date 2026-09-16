import sertaoImg from '../assets/sertao.jpg';
import marmininoImg from '../assets/marminino.jpg';
import ducabruncoImg from '../assets/ducabrunco.jpg';

// Itens da categoria "Burguer" no cardápio oficial (xmenu) — mantenha sincronizado com
// https://xmenu.com.br/pedidos/?loja=20996 sempre que o cardápio mudar por lá.
export const menuHighlights = [
  {
    id: 1,
    name: 'Sertão',
    description: 'Pão de macaxeira, carne, queijo coalho, maionese de alho, coentro, cebola na manteiga, tomate e alface.',
    price: 'R$ 32,00',
    image: sertaoImg,
    tag: null,
  },
  {
    id: 2,
    name: 'Marminino',
    description: 'Pão de macaxeira, carne, cheddar, cebola caramelizada, bacon, picles de pepino, tomate e alface.',
    price: 'R$ 32,00',
    image: marmininoImg,
    tag: null,
  },
  {
    id: 3,
    name: 'Ducabrunco',
    description: 'Pão de macaxeira, carne, creme de queijo coalho, cebola roxa na manteiga, farofa de carne do sol, tomate e alface.',
    price: 'R$ 32,00',
    image: ducabruncoImg,
    tag: null,
  },
];
