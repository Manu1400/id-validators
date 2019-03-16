// partial code for extract /isim/all.json

// https://www.ismn-international.org/ranges/ranges
// Showing 1 to 10 of 6018 entries
// data: https://www.ismn-international.org/directory/search?search=

var rows = obj.similar.rows;
rows = rows.map(function(row) {
  delete row.commands;
  row.ISMN = row.ISMN.trim().split("<br>").filter(Boolean);
  return row;
})
JSON.stringify(rows)
