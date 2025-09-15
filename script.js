let bandNames = [
  'The Virupaksha Temple',
  'Victoria Memorial',
  'Tajmahal',
  'An Empire State',
  'A Red Fort'
];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bandNames.sort((a, b) => {
  let nameA = stripArticle(a).toLowerCase();
  let nameB = stripArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

window.onload = function () {
  const ul = document.getElementById("band");
  bandNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });
};
