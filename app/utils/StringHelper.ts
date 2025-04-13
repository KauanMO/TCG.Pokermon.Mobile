function getFormattedCurrency(value: number): string {
    return "P" + value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export default {
    getFormattedCurrency
}