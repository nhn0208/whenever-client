export const formatToVND = (amount: number): string => {
    // Convert the number to VND format
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    return formattedAmount;
}