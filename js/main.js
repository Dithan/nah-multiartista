async function carregarSecao(id, arquivo) {
  const elemento = document.getElementById(id);

  const resposta = await fetch(`./sections/${arquivo}`);

  elemento.innerHTML = await resposta.text();
}

async function initPage() {
  await Promise.all([
    carregarSecao("header", "header.tpl"),
    carregarSecao("hero", "hero.tpl"),
    carregarSecao("about", "about.tpl"),
    carregarSecao("gallery", "gallery.tpl"),
    carregarSecao("process", "process.tpl"),
    carregarSecao("commissions", "commissions.tpl"),
    carregarSecao("contact", "contact.tpl"),
  ]);
}

initPage();
