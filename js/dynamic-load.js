async function carregarSecao(id, arquivo) {
  const elemento = document.getElementById(id);

  if (!elemento) {
    throw new Error(`Elemento #${id} não encontrado.`);
  }

  const resposta = await fetch(`./sections/${arquivo}`);

  if (!resposta.ok) {
    throw new Error(`Erro ao carregar ${arquivo}: ${resposta.status}`);
  }

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

  document.dispatchEvent(new Event("pageLoaded"));
}

initPage().catch((error) => {
  console.error("Erro ao carregar a página:", error);
});
