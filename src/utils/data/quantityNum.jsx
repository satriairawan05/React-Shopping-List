const quantityNum = [...Array(20)].map((_, i) => (
  <option value={i + 1} key={i + 1}>
    {i + 1}
  </option>
));

export default quantityNum;
