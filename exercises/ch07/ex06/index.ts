const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// `math`の点数が高い順にソート
data.sort((a, b) => b.math - a.math);

// `math`が同点数の場合は`chemistry`の点数が高い順にソート
data.sort((a, b) => (a.math === b.math ? b.chemistry - a.chemistry : 1));

// さらに同点数の場合は`geography`の点数が高い順にソート
data.sort((a, b) =>
  a.math === b.math && a.chemistry === b.chemistry
    ? b.geography - a.geography
    : 1
);

console.log(data);

/**
[
  { name: 'Frank', class: 'B', math: 90, chemistry: 70, geography: 80 },
  { name: 'Justin', class: 'C', math: 80, chemistry: 40, geography: 30 },
  { name: 'Carol', class: 'A', math: 70, chemistry: 55, geography: 30 },
  { name: 'Isaac', class: 'C', math: 70, chemistry: 40, geography: 50 },
  { name: 'Mallet', class: 'C', math: 60, chemistry: 70, geography: 90 },
  { name: 'Ellen', class: 'B', math: 60, chemistry: 70, geography: 40 },
  { name: 'Bob', class: 'A', math: 50, chemistry: 50, geography: 60 },
  { name: 'Dave', class: 'B', math: 40, chemistry: 20, geography: 60 },
  { name: 'Alice', class: 'A', math: 10, chemistry: 30, geography: 20 }
]
**/
