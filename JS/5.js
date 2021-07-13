var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

function arrayToObject(arr) {
  let rezult = {};

  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i][1])) {
      rezult[arr[i][0]]=arrayToObject(arr[i][1]);
    } else {
      rezult[arr[i][0]] = arr[i][1];
    }
  }
  return rezult;
}

console.log(arrayToObject(arr));
