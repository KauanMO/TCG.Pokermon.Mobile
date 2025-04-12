function getFormattedCurrency(value) {
    return "P" + value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export {
    getFormattedCurrency
}