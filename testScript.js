function inserirTextosNasLinhas(listaTexto) {
  const textos = listaTexto.split(',').map(t => t.replace('MLB', 'MLB-'));
  const linhas = document.querySelectorAll('tr.pick_pack_product_row');

  linhas.forEach((linha, index) => {
    if (index === 0) return;

    const span = linha.querySelector('td div div div span.cell_container_product_warning');
    if (span) {
      span.innerHTML = `<a href=https://produto.mercadolivre.com.br/${textos[index - 1]}>${textos[index - 1]}</a>`
    }
  });
}

function getTextoLista() {
  const div = document.querySelector('div.pick_pack_sale_detail_info:has(> script) + div');
  if (!div) return '';
  return div.textContent.trim();
}

const listaTexto = getTextoLista();
inserirTextosNasLinhas(listaTexto);
