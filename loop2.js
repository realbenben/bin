const place = [
{
"name" : "benoit",
"city" :"lille",
},
{
"name" : "louis",
"city" :"paris",
},
{
"name" :"mathilde",
"city" :"faches",
},
{
"name" :"paul",
"city" :"calais",
},
{
"name" :"jérome",
"city" :"lambersart",
},
{
"name" :"john",
"city" :"dallas",
},
{
"name" :"jordan",
"city" :"boulogne",
},
{
"name" :"marie",
"city" :"lourdes",
},
];
console.log(place);
const target = document.getElementById('ville');
const placeHTML = place.map((code) => {
return `
<p>
  <code>${code.name}</code>
  ${code.city}
</p>
`
});
target.innerHTML = placeHTML;
console.log(placeHTML);
