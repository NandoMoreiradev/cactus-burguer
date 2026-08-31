import sertaoImg from '../assets/4.jpg';
import xiqueXiqueImg from '../assets/9.jpg';
import ducabruncoImg from '../assets/5.jpg';

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
    name: 'Xique Xique',
    description: 'Pão de macaxeira, carne, cheddar, cebola caramelizada, bacon, picles de pepino, tomate e alface.',
    price: 'R$ 32,00',
    image: xiqueXiqueImg,
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
