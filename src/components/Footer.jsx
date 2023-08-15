const Footer = ({ items }) => {
  if (items == 0) return <footer className="stats">Daftar Belanjaan masih kosong</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentageItems = Math.round((checkedItems / totalItems) * 100);

  return (
    <>
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentageItems}%)
      </footer>
    </>
  );
};

export default Footer;
