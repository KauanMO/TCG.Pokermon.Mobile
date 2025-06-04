function getFormattedCurrency(value: number): string {
    return value.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).slice(0);
}

export default {
    getFormattedCurrency
}