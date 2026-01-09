fetch('index.json')
  .then(r => r.json())
  .then(lista => {
    lista.sort();
    const container = document.getElementById('fichas-container'); // nuevo contenedor

    for (let i = 0; i < lista.length; i++) {
      // Crear ficha como un div en vez de celda de tabla
      const ficha = document.createElement('div');
      ficha.className = 'ficha';

      const img = document.createElement('img');
      img.src = './fichas/' + lista[i] + '.jpg';
      img.alt = lista[i];

      const enlace = document.createElement('a');
      enlace.href = './ficha.html?nombre=' + lista[i];
      enlace.textContent = lista[i];
      enlace.target = '_blank';

      const texto = document.createElement('p');
      texto.style.margin = '0';
      texto.appendChild(enlace);

      ficha.appendChild(img);
      ficha.appendChild(texto);

      container.appendChild(ficha);
    }
  });
