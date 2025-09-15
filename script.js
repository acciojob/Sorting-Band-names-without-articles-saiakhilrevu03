//your code here

let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal', 'An Empire State', 'A Red Fort'];

// Function to strip leading articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort band names ignoring articles
bandNames.sort((a, b) => {
  let nameA = stripArticle(a).toLowerCase();
  let nameB = stripArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Display inside <ul id="band">
const ul = document.getElementById("band");
bandNames.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});
