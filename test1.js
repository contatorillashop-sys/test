function inserirTextosNasLinhas(listaTexto) {
  const textos = listaTexto.split(',');
  const linhas = document.querySelectorAll('tr.pick_pack_product_row');

  linhas.forEach((linha, index) => {
    if (index === 0) return; // pula a primeira

    const span = linha.querySelector('td div div div div span.cell_container_product_warning');
    if (span) {
      span.textContent = textos[index - 1] || '';
    }
  });
}
