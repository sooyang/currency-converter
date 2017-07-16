export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const swapCurrency = amount => ({
  type: SWAP_CURRENCY,
  amount: parseFloat(amount),
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount,
});