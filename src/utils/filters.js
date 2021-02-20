import numeral from 'numeral';
export const formatNumber = v => (v ? numeral(v.toString()).format('0,0.[00]') : 0);