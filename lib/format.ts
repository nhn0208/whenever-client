export const formatToVND = (amount: number): string => {
    // Convert the number to VND format
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    return formattedAmount;
}

export const normalizeGmail = (gmail: string): string => {
    let [local, domain] = gmail.toLowerCase().split('@')

    if (domain === 'gmail.com') {
      local = local.replace(/\./g, '')
    }
    return `${local}@${domain}`
  }