const people = [
{
"name" : "benoit",
"job" : "pompier",
"age" : "35 ans",
},
{
"name" : "louis",
"job" :"policier",
"age" :"29 ans",
},
{
"name" :"mathilde",
"job" :"pdg",
"age" :"28 ans",
},
{
"name" :"paul",
"job" :"électricien",
"age" :"45 ans",
},
{
"name" :"jérome",
"job" :"avocat",
"age" :"46 ans",
},
{
"name" :"john",
"job" :"banquier",
"age" :"52 ans",
},
{
"name" :"jordan",
"job" :"eboueur",
"age" :"19 ans",
},
{
"name" :"marie",
"job" :"serveuse",
"age" :"32 ans",
},
];
console.log(people);
const target = document.getElementById('gens');
const peopleHTML = people.map((code) => {
return `
<p>
  <code>${code.name}</code>
  <strong>${code.job}</strong> : ${code.age}
</p>
`
});
target.innerHTML = peopleHTML;
console.log(peopleHTML);
