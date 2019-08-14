function multiplicationTable(row, col) {
  var mt = [];
  for (let i = 1; i <= row; i++) {
    let st = [];
    for (let j = 1; j <= col; j++) {
      st.push(j * i);
    }
    mt.push(st);
  }
  return mt;
}
