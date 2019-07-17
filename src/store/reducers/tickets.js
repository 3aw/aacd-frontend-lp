const INITIAL_STATE = [
  {
    id: 1,
    pack: "1º lote",
    total: "40 ingressos",
    currency: "R$",
    price: "300,00",
    disabled: true,
    value: "Esgotado!"
  },
  {
    id: 2,
    pack: "2º lote",
    total: "220 ingressos",
    currency: "R$",
    price: "400,00",
    disabled: false,
    value: "Comprar!"
  },
  {
    id: 3,
    pack: "3º lote",
    total: "220 ingressos",
    currency: "R$",
    price: "450,00",
    disabled: false,
    value: "Aguarde"
  }
];
export default function tickets(state = INITIAL_STATE, action) {
  return state;
}
