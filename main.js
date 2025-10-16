const API_BASE = 'https://ghibliapi.vercel.app';
let peliculas = [];
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Cargar películas
async function loadFilms() {
  const res = await fetch(`${API_BASE}/films`);
  const films= await res.json();
  peliculas= films;
  mostrarLista(peliculas);
  llenarFiltro();
  console.log(films);
  
  
  
}

// Mostrar lista
function mostrarLista(lista) {
  const div = document.getElementById('contenido');
  div.innerHTML = '';
  lista.forEach(peli => {
    const item = document.createElement('div');
    item.className = 'film';
    item.textContent = peli.title;
    item.onclick = () => mostrarDetalle(peli);
    div.appendChild(item);
  });
}

// Mostrar detalle
function mostrarDetalle(peli) {
  const div = document.getElementById('contenido');
  div.innerHTML = `
    <h2>${peli.title}</h2>
    <img src="${peli.image}" class="poster" alt="${peli.title}">
    <p><b>Director:</b> ${peli.director}</p>
    <p><b>Año:</b> ${peli.release_date}</p>
    <p>${peli.description}</p>
    <button id="btnFavorito">❤️ Agregar a favoritos</button>
    <button id="btnCompartir">📤 Compartir</button>
    <button id="btnVolver">🔙 Volver</button>
  `;

  // Botones detalle
  document.getElementById('btnFavorito').onclick = () => agregarFavorito(peli);
  document.getElementById('btnCompartir').onclick = () => compartirPelicula(peli);
  document.getElementById('btnVolver').onclick = () => mostrarLista(peliculas);
}

// Filtro por director
function llenarFiltro() {
  const select = document.getElementById('filtroDirector');
  const directores = [...new Set(peliculas.map(p => p.director))];
  directores.forEach(dir => {
    const opt = document.createElement('option');
    opt.value = dir;
    opt.textContent = dir;
    select.appendChild(opt);
  });
}

document.getElementById('filtroDirector').addEventListener('change', e => {
  const valor = e.target.value;
  if (valor === '') mostrarLista(peliculas);
  else {
    const filtradas = peliculas.filter(p => p.director === valor);
    mostrarLista(filtradas);
  }
});

// Buscador
document.getElementById('buscador').addEventListener('input', e => {
  const texto = e.target.value.toLowerCase();
  const resultado = peliculas.filter(p => p.title.toLowerCase().includes(texto));
  mostrarLista(resultado);
});

// Favoritos
function agregarFavorito(peli) {
  if (!favoritos.some(f => f.id === peli.id)) {
    favoritos.push(peli);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Agregado a favoritos');
  } else {
    alert('Ya está en favoritos');
  }
}

document.getElementById('verFavoritos').addEventListener('click', () => {
  if (favoritos.length === 0) {
    document.getElementById('contenido').innerHTML = '<p>No hay favoritos</p>';
  } else {
    mostrarLista(favoritos);
  }
});

// Página informativa
document.getElementById('btnInfo').addEventListener('click', () => {
  document.getElementById('contenido').innerHTML = `
    <h2>Studio Ghibli</h2>
    <p>Studio Ghibli es un estudio japonés de animación fundado por Hayao Miyazaki e Isao Takahata en 1985.</p>
    <p>Es reconocido mundialmente por sus películas llenas de fantasía, valores humanos y paisajes impresionantes.</p>
  `;
});

// Pestaña original (volver a inicio)
document.getElementById('btnInicio').addEventListener('click', () => {
  mostrarLista(peliculas);
});

// Compartir objeto
function compartirPelicula(peli) {
  if (navigator.share) {
    navigator.share({
      title: peli.title,
      text: 'Mira esta película de Studio Ghibli',
      url: peli.url || 'https://ghibliapi.vercel.app/',
    });
  } else {
    alert('Tu navegador no soporta compartir');
  }
}

// Iniciar
loadFilms();
