//demander un mot clef
//le concatener dans la chaine de caractère de l'url d'e621
//ouvrir le lien au clic "search"
document.getElementById("myBtn").addEventListener("click", test);
function test() {
  let keyword = (document.getElementById("keywords").value)
  let url = "https://e621.net/post?tags="+keyword
  window.open(url);
}
