const formatter = new Intl.NumberFormat(undefined, {
    currency: "IDR",
    style: "currency",
});

export function CurrencyFormat(number) {
    return formatter.format(number);
}
