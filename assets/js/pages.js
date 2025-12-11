// Datos de especies (JSON estático incluido directamente)
const especiesData = [
  {
    "id": 1,
    "categoria": "animal",
    "imagen": "https://www.peru.travel/Contenido/Uploads/oso-andino-interior-1_637708492669784910.jpg",
    "nombre": "Oso de Anteojos",
    "nombreCientifico": "Tremarctos ornatus",
    "especie": "Mamífero",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-15",
    "descripcion": "El oso de anteojos es el único oso nativo de Sudamérica y es una especie en peligro de extinción. Habita en los bosques montanos del parque, entre los 1,800 y 3,800 metros de altitud. Se caracteriza por las manchas blancas alrededor de los ojos que le dan su nombre distintivo."
  },
  {
    "id": 2,
    "categoria": "animal",
    "imagen": "https://perujungletrips.com/wp-content/uploads/2025/06/Gallito-de-las-rocas-Rupicola-peruvianus-Ave-Naciona-del-Peru-2.webp",
    "nombre": "Gallito de las Rocas",
    "nombreCientifico": "Rupicola peruviana",
    "especie": "Ave",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-20",
    "descripcion": "También conocido como tunqui, es el ave nacional del Perú. El macho presenta un plumaje de color rojo intenso y una cresta prominente. Habita en los bosques nublados del parque, especialmente en zonas rocosas y acantilados donde construye sus nidos."
  },
  {
    "id": 3,
    "categoria": "animal",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle6ez7ayeXuldiVhltWAIYH3Zz39jpEC4XA&s",
    "nombre": "Jaguar",
    "nombreCientifico": "Panthera onca",
    "especie": "Mamífero",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-02",
    "descripcion": "El jaguar es el felino más grande de América y un depredador tope en el ecosistema del parque. Habita en las zonas de selva baja y media, siendo un indicador de la salud del ecosistema. Su presencia es crucial para mantener el equilibrio ecológico."
  },
  {
    "id": 4,
    "categoria": "animal",
    "imagen": "https://yunkawasiperu.org/wp-content/uploads/2023/04/1.-Mono-choro-de-cola-amarilla-Wilhelm-1-scaled.jpg",
    "nombre": "Mono Choro",
    "nombreCientifico": "Lagothrix lagotricha",
    "especie": "Mamífero",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-10",
    "descripcion": "El mono choro es un primate de gran tamaño que habita en los bosques del parque. Vive en grupos familiares y se alimenta principalmente de frutos. Es una especie vulnerable debido a la pérdida de hábitat y la caza furtiva."
  },
  {
    "id": 5,
    "categoria": "animal",
    "imagen": "https://www.actualidadambiental.pe/wp-content/uploads/2024/05/pudu_yunga_andina.jpeg",
    "nombre": "Venado Enano",
    "nombreCientifico": "Pudu mephistophiles",
    "especie": "Mamífero",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-18",
    "descripcion": "El venado enano o pudú es el ciervo más pequeño de América. Habita en los bosques montanos del parque, entre los 2,000 y 3,500 metros de altitud. Es una especie tímida y difícil de observar, prefiriendo áreas con densa vegetación."
  },
  {
    "id": 6,
    "categoria": "planta",
    "imagen": "https://elcomercio.pe/resizer/gWbMbKNFogEVtEekort--dlmieY=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/L5VJFAGZOZFVXJGR3DQG2E2JSY.jpg",
    "nombre": "Orquídea",
    "nombreCientifico": "Epidendrum secundum",
    "especie": "Orquidácea",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-12",
    "descripcion": "El parque alberga más de 800 especies de orquídeas, siendo uno de los ecosistemas con mayor diversidad de estas plantas en el mundo. Las orquídeas crecen principalmente como epífitas en los árboles del bosque nublado, entre los 1,500 y 3,000 metros de altitud."
  },
  {
    "id": 7,
    "categoria": "planta",
    "imagen": "https://vendeplantas.tiendada.com/api/scrooge/file/FL-48E83957?v=-1",
    "nombre": "Ulcumano",
    "nombreCientifico": "Retrophyllum rospigliosii",
    "especie": "Conífera",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-25",
    "descripcion": "El ulcumano es un árbol nativo de los bosques montanos peruanos que puede alcanzar hasta 30 metros de altura. Es una especie endémica de la región y forma parte importante del dosel del bosque nublado del parque, proporcionando hábitat para diversas especies."
  },
  {
    "id": 8,
    "categoria": "planta",
    "imagen": "https://static.inaturalist.org/photos/165471853/large.jpeg",
    "nombre": "Cedro",
    "nombreCientifico": "Cedrela odorata",
    "especie": "Árbol",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-05",
    "descripcion": "El cedro es un árbol de gran valor comercial y ecológico que crece en las zonas de selva alta del parque. Su madera es muy apreciada, pero también es importante para la conservación del suelo y como hábitat para la fauna. Puede alcanzar hasta 40 metros de altura."
  },
  {
    "id": 9,
    "categoria": "planta",
    "imagen": "https://campograndeperu.com/wp-content/uploads/2024/02/nogal-1.jpg",
    "nombre": "Nogal",
    "nombreCientifico": "Juglans neotropica",
    "especie": "Árbol",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-12",
    "descripcion": "El nogal andino es un árbol nativo que crece en los bosques montanos del parque, entre los 1,500 y 3,000 metros de altitud. Produce nueces comestibles y su madera es de alta calidad. Es una especie importante para la conservación de la biodiversidad del ecosistema."
  },
  {
    "id": 10,
    "categoria": "planta",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hd0eyDyMH4b-X3pxr7AedxA2JyjdbOV3dg&s",
    "nombre": "Roble",
    "nombreCientifico": "Quercus humboldtii",
    "especie": "Árbol",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-04-22",
    "descripcion": "El roble andino es un árbol característico de los bosques montanos del parque. Forma parte del dosel forestal y proporciona alimento y refugio para numerosas especies de fauna. Sus hojas y corteza son importantes para el ciclo de nutrientes del ecosistema."
  }
];

// Función para cargar las especies (ahora solo renderiza, no hace fetch)
function loadEspecies() {
  renderEspecies();
}

// Función para renderizar las especies en las listas
function renderEspecies() {
  const listAnimals = document.getElementById("list-animals");
  const listPlants = document.getElementById("list-plants");
  
  if (!listAnimals || !listPlants) return;
  
  // Limpiar listas
  listAnimals.innerHTML = '';
  listPlants.innerHTML = '';
  
  // Filtrar y renderizar animales
  const animales = especiesData.filter(e => e.categoria === "animal");
  animales.forEach(especie => {
    const item = createEspecieItem(especie);
    listAnimals.appendChild(item);
  });
  
  // Filtrar y renderizar plantas
  const plantas = especiesData.filter(e => e.categoria === "planta");
  plantas.forEach(especie => {
    const item = createEspecieItem(especie);
    listPlants.appendChild(item);
  });
}

// Función para crear un item de especie
function createEspecieItem(especie) {
  const item = document.createElement('div');
  item.className = 'capture-item';
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    // Guardar el ID en localStorage y navegar a detalle
    localStorage.setItem('especieSeleccionada', JSON.stringify(especie));
    window.location.href = './detalle.html';
  });
  
  item.innerHTML = `
    <img class="capture-thumb" src="${especie.imagen}" alt="${especie.nombre}">
    <p class="capture-name">${especie.nombre}</p>
  `;
  
  return item;
}

// Simple tabs toggling for capturas
const tabButtons = document.querySelectorAll(".tabs button");
const listAnimals = document.getElementById("list-animals");
const listPlants = document.getElementById("list-plants");

const switchTab = (tabName) => {
  tabButtons.forEach((b) => b.classList.remove("active"));
  if (tabName === "animals") {
    const animalsBtn = document.querySelector('[data-tab="animals"]');
    if (animalsBtn) animalsBtn.classList.add("active");
    listAnimals?.classList.remove("hidden");
    listPlants?.classList.add("hidden");
    localStorage.setItem('tabActivo', 'animals');
  } else if (tabName === "plants") {
    const plantsBtn = document.querySelector('[data-tab="plants"]');
    if (plantsBtn) plantsBtn.classList.add("active");
    listPlants?.classList.remove("hidden");
    listAnimals?.classList.add("hidden");
    localStorage.setItem('tabActivo', 'plants');
  }
};

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");
    switchTab(tab);
    // Guardar el tab activo en localStorage
    localStorage.setItem('tabActivo', tab);
  });
});

// Detectar hash en la URL para activar el tab correspondiente
window.addEventListener("DOMContentLoaded", () => {
  // Cargar especies (solo si estamos en historial.html)
  if (window.location.pathname.includes('historial.html')) {
    loadEspecies();
    
    // Luego manejar el hash o el tab guardado
    const hash = window.location.hash;
    const tabGuardado = localStorage.getItem('tabActivo');
    
    if (hash === "#plants") {
      switchTab("plants");
    } else if (hash === "#animals") {
      switchTab("animals");
    } else if (tabGuardado) {
      switchTab(tabGuardado);
    }
  }
});

// También manejar cambios en el hash
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  if (hash === "#plants") {
    switchTab("plants");
  } else if (hash === "#animals") {
    switchTab("animals");
  }
});

// Cargar datos de especie en la página de detalle
function loadEspecieDetail() {
  const especieData = localStorage.getItem('especieSeleccionada');
  
  if (!especieData) {
    // Si no hay datos, redirigir a historial
    window.location.href = './historial.html';
    return;
  }
  
  try {
    const especie = JSON.parse(especieData);
    
    // Actualizar todos los elementos con los datos
    const nombreEl = document.getElementById('detail-nombre');
    const imagenEl = document.getElementById('detail-imagen');
    const nombreCientificoEl = document.getElementById('detail-nombre-cientifico');
    const especieEl = document.getElementById('detail-especie');
    const ubicacionEl = document.getElementById('detail-ubicacion');
    const fechaEl = document.getElementById('detail-fecha');
    const descripcionEl = document.getElementById('detail-descripcion');
    
    if (nombreEl) nombreEl.textContent = especie.nombre;
    if (imagenEl) {
      imagenEl.src = especie.imagen;
      imagenEl.alt = especie.nombre;
    }
    if (nombreCientificoEl) nombreCientificoEl.textContent = especie.nombreCientifico;
    if (especieEl) especieEl.textContent = especie.especie;
    if (ubicacionEl) ubicacionEl.textContent = especie.ubicacion;
    
    // Formatear fecha
    if (fechaEl && especie.fecha) {
      const fecha = new Date(especie.fecha);
      const fechaFormateada = fecha.toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      fechaEl.textContent = fechaFormateada;
    }
    
    if (descripcionEl) descripcionEl.textContent = especie.descripcion;
    
    // Actualizar título de la página
    document.title = `CapNat - ${especie.nombre}`;
    
  } catch (error) {
    console.error('Error al cargar datos de especie:', error);
    window.location.href = './historial.html';
  }
}

// Ejecutar carga de detalle si estamos en la página de detalle
if (window.location.pathname.includes('detalle.html')) {
  window.addEventListener("DOMContentLoaded", loadEspecieDetail);
}

