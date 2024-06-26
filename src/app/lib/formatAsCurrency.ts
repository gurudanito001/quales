export default function formatAsCurrency(x: string | number | undefined | null) {
  if (!x) x = '';
  x = x.toString().replace(/,/g, '');
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}