async function carregarSecao(id, arquivo) {
  const elemento = document.getElementById(id);

  const resposta = await fetch(`./sections/${arquivo}`);

  elemento.innerHTML = await resposta.text();
}

async function initPage() {
  await Promise.all([
    carregarSecao("header", "header.html"),
    carregarSecao("hero", "hero.html"),
    carregarSecao("about", "about.html"),
    carregarSecao("gallery", "gallery.html"),
    carregarSecao("process", "process.html"),
    carregarSecao("commissions", "commissions.html"),
    carregarSecao("contact", "contact.html"),
  ]);
}

initPage();
