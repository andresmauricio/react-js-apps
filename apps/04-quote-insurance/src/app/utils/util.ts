interface Payload {
  country: string | number;
  year: string;
  category: string;
}

const VALUE_INSURANCE = 5000;

export const calculateQuoteInsurance = (payload: Payload) => {
  let price = VALUE_INSURANCE;
  if (payload.country === 'Asia') {
    price = price - price * 0.1;
  }

  if (payload.country === 'Europa') {
    price = price - price * 0.3;
  }

  if (payload.country === 'America') {
    price = price + price * 0.2;
  }

  if (parseInt(payload.year) <= 2020) {
    price += 500;
  }

  if (payload.category == 'Completed') {
    price += 2000;
  }
  return price;
};

export const calculateQuoteInsurance2 = (payload: Payload) => {
  let price = VALUE_INSURANCE;
  const hashTable = {
    Asia: 0.1,
    Europa: 0.3,
    America: 0.2,
    minYearDisscount: 2020,
    Completed: 2000,
  } as any;

  price -= price * hashTable[payload.country];

  if (parseInt(payload.year) <= 2020) {
    price += 500;
  }

  if (payload.category == 'Completed') {
    price += 2000;
  }  
  return price;
};
