// Datos de especies (JSON estático incluido directamente)
// Hacer disponible globalmente para app.js
window.especiesData = [
  {
    "id": 1,
    "categoria": "animal",
    "imagen": "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2017/08/oso-andino-anteojos.jpg",
    "nombre": "Oso de Anteojos",
    "nombreCientifico": "Tremarctos ornatus",
    "especie": "Mamífero",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-15",
    "descripcion": "El oso de anteojos es el único oso nativo de Sudamérica y es una especie en peligro de extinción. Habita en los bosques montanos del parque, entre los 1,800 y 3,800 metros de altitud. Se caracteriza por las manchas blancas alrededor de los ojos que le dan su nombre distintivo.",
    "descripcionSimple": "Oso grande con manchas blancas en la cara. Vive en los bosques de montaña. Está en peligro de extinción.",
    "peligrosidad": "media",
    "recomendacionSeguridad": "Mantener distancia. No acercarse ni alimentar. Si se encuentra uno, retroceder lentamente sin hacer movimientos bruscos.",
    "nivelCerteza": 92,
    "genero": "Tremarctos",
    "familia": "Ursidae",
    "habitat": ["bosque-montano", "bosque-nublado"],
    "altitud": { "min": 1800, "max": 3800 },
    "caracteristicas": ["manchas-blancas", "grande", "pelaje-negro", "cara-redonda"],
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
    "descripcion": "El jaguar es el felino más grande de América y un depredador tope en el ecosistema del parque. Habita en las zonas de selva baja y media, siendo un indicador de la salud del ecosistema. Su presencia es crucial para mantener el equilibrio ecológico.",
    "descripcionSimple": "Felino grande y peligroso. Es el depredador más grande de América. Muy raro de ver.",
    "peligrosidad": "alta",
    "recomendacionSeguridad": "⚠️ PELIGRO: Mantener distancia extrema. No acercarse bajo ninguna circunstancia. Si se encuentra uno, no correr, retroceder lentamente manteniendo contacto visual. Buscar refugio elevado si es posible.",
    "nivelCerteza": 95,
    "genero": "Panthera",
    "familia": "Felidae",
    "habitat": ["selva-baja", "selva-media"],
    "altitud": { "min": 0, "max": 2000 },
    "caracteristicas": ["manchas", "grande", "felino", "pelaje-amarillo"],
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
    "descripcion": "El mono choro es un primate de gran tamaño que habita en los bosques del parque. Vive en grupos familiares y se alimenta principalmente de frutos. Es una especie vulnerable debido a la pérdida de hábitat y la caza furtiva.",
    "descripcionSimple": "Mono grande que vive en grupos. Come frutas. Está en peligro.",
    "peligrosidad": "baja",
    "recomendacionSeguridad": "Especie generalmente inofensiva. Observar desde distancia. No alimentar ni acosar.",
    "nivelCerteza": 87,
    "genero": "Lagothrix",
    "familia": "Atelidae",
    "habitat": ["bosque-tropical", "selva-alta"],
    "altitud": { "min": 500, "max": 3000 },
    "caracteristicas": ["pelaje-gris", "cola-larga", "primate"],
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
    "descripcion": "El venado enano o pudú es el ciervo más pequeño de América. Habita en los bosques montanos del parque, entre los 2,000 y 3,500 metros de altitud. Es una especie tímida y difícil de observar, prefiriendo áreas con densa vegetación.",
    "descripcionSimple": "Venado muy pequeño. Es tímido y difícil de ver. Vive en los bosques de montaña.",
    "peligrosidad": "baja",
    "recomendacionSeguridad": "Especie inofensiva. Observar en silencio desde distancia. No perseguir ni molestar.",
    "nivelCerteza": 85,
    "genero": "Pudu",
    "familia": "Cervidae",
    "habitat": ["bosque-montano", "bosque-nublado"],
    "altitud": { "min": 2000, "max": 3500 },
    "caracteristicas": ["pequeño", "pelaje-marrón", "cuernos"],
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
    "descripcion": "El ulcumano es un árbol nativo de los bosques montanos peruanos que puede alcanzar hasta 30 metros de altura. Es una especie endémica de la región y forma parte importante del dosel del bosque nublado del parque, proporcionando hábitat para diversas especies.",
    "descripcionSimple": "Árbol grande nativo del Perú. Puede medir hasta 30 metros. Solo crece en esta región.",
    "peligrosidad": "ninguna",
    "recomendacionSeguridad": "Árbol inofensivo. No talar ni dañar. Especie endémica protegida.",
    "nivelCerteza": 91,
    "genero": "Retrophyllum",
    "familia": "Podocarpaceae",
    "habitat": ["bosque-montano", "bosque-nublado"],
    "altitud": { "min": 2000, "max": 3500 },
    "caracteristicas": ["conifera", "hojas-aciculares", "tronco-recto"],
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
    "descripcion": "El cedro es un árbol de gran valor comercial y ecológico que crece en las zonas de selva alta del parque. Su madera es muy apreciada, pero también es importante para la conservación del suelo y como hábitat para la fauna. Puede alcanzar hasta 40 metros de altura.",
    "descripcionSimple": "Árbol muy alto con madera valiosa. Ayuda a conservar el suelo y da hogar a animales.",
    "peligrosidad": "ninguna",
    "recomendacionSeguridad": "Árbol inofensivo. Su madera es valiosa pero está protegido en el parque.",
    "nivelCerteza": 89,
    "genero": "Cedrela",
    "familia": "Meliaceae",
    "habitat": ["selva-alta", "bosque-tropical"],
    "altitud": { "min": 500, "max": 2000 },
    "caracteristicas": ["hojas-compuestas", "tronco-grueso", "corteza-fisurada"],
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
    "descripcion": "El nogal andino es un árbol nativo que crece en los bosques montanos del parque, entre los 1,500 y 3,000 metros de altitud. Produce nueces comestibles y su madera es de alta calidad. Es una especie importante para la conservación de la biodiversidad del ecosistema.",
    "descripcionSimple": "Árbol que da nueces comestibles. Su madera es de buena calidad. Importante para el ecosistema.",
    "peligrosidad": "ninguna",
    "recomendacionSeguridad": "Árbol inofensivo. Sus nueces son comestibles. No dañar el árbol al recolectar.",
    "nivelCerteza": 86,
    "genero": "Juglans",
    "familia": "Juglandaceae",
    "habitat": ["bosque-montano", "bosque-nublado"],
    "altitud": { "min": 1500, "max": 3000 },
    "caracteristicas": ["hojas-compuestas", "fruto-nuez", "corteza-gris"],
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
    "descripcion": "El roble andino es un árbol característico de los bosques montanos del parque. Forma parte del dosel forestal y proporciona alimento y refugio para numerosas especies de fauna. Sus hojas y corteza son importantes para el ciclo de nutrientes del ecosistema.",
    "descripcionSimple": "Árbol común en los bosques de montaña. Da comida y refugio a muchos animales.",
    "peligrosidad": "ninguna",
    "recomendacionSeguridad": "Árbol inofensivo. Importante para el ecosistema. No dañar.",
    "nivelCerteza": 90,
    "genero": "Quercus",
    "familia": "Fagaceae",
    "habitat": ["bosque-montano", "bosque-nublado"],
    "altitud": { "min": 2000, "max": 3500 },
    "caracteristicas": ["hojas-lobuladas", "fruto-bellota", "corteza-rugosa"],
  }
];

// Función para cargar las especies
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
  
  // Obtener capturas del usuario
  const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
  
  // Obtener IDs de especies ya capturadas por el usuario
  const especiesCapturadasIds = new Set(misCapturas.map(c => c.especieId));
  
  // Obtener especies ocultas (eliminadas por el usuario)
  const especiesOcultas = JSON.parse(localStorage.getItem('especiesOcultas') || '[]');
  
  // Combinar: especies precargadas + capturas del usuario
  // Primero agregar todas las especies precargadas, excluyendo las ocultas
  const todasEspecies = especiesData.filter(e => !especiesOcultas.includes(e.id));
  
  // Datos de especies para el ejercicio estático
  const gallitoDeLasRocas = {
    "id": 2,
    "categoria": "animal",
    "imagen": "https://perujungletrips.com/wp-content/uploads/2025/06/Gallito-de-las-rocas-Rupicola-peruvianus-Ave-Naciona-del-Peru-2.webp",
    "nombre": "Gallito de las Rocas",
    "nombreCientifico": "Rupicola peruviana",
    "especie": "Ave",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-20",
    "descripcion": "También conocido como tunqui, es el ave nacional del Perú. El macho presenta un plumaje de color rojo intenso y una cresta prominente. Habita en los bosques nublados del parque, especialmente en zonas rocosas y acantilados donde construye sus nidos.",
    "descripcionSimple": "Ave roja con cresta grande. Es el ave nacional del Perú. Vive en zonas rocosas.",
    "peligrosidad": "baja",
    "recomendacionSeguridad": "Especie inofensiva. Observar desde distancia respetuosa. No molestar durante época de anidación.",
    "nivelCerteza": 88,
    "genero": "Rupicola",
    "familia": "Cotingidae",
    "habitat": ["bosque-nublado", "zonas-rocosas"],
    "altitud": { "min": 1500, "max": 3000 },
    "caracteristicas": ["rojo", "cresta", "plumaje-intenso"]
  };
  
  const orquidea = {
    "id": 6,
    "categoria": "planta",
    "imagen": "https://elcomercio.pe/resizer/gWbMbKNFogEVtEekort--dlmieY=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/L5VJFAGZOZFVXJGR3DQG2E2JSY.jpg",
    "nombre": "Orquídea",
    "nombreCientifico": "Epidendrum secundum",
    "especie": "Orquidácea",
    "ubicacion": "Parque Nacional Yanachaga Chemillén, Oxapampa, Pasco",
    "fecha": "2024-03-12",
    "descripcion": "El parque alberga más de 800 especies de orquídeas, siendo uno de los ecosistemas con mayor diversidad de estas plantas en el mundo. Las orquídeas crecen principalmente como epífitas en los árboles del bosque nublado, entre los 1,500 y 3,000 metros de altitud.",
    "descripcionSimple": "Flor bonita que crece en los árboles. Hay muchas especies diferentes en el parque.",
    "peligrosidad": "ninguna",
    "recomendacionSeguridad": "Planta inofensiva. No arrancar ni dañar. Algunas especies están protegidas.",
    "nivelCerteza": 78,
    "genero": "Epidendrum",
    "familia": "Orchidaceae",
    "habitat": ["bosque-nublado", "epifita"],
    "altitud": { "min": 1500, "max": 3000 },
    "caracteristicas": ["flor-colorida", "epifita", "petalos"]
  };
  
  // Agregar especies de las capturas que no estén en la lista precargada
  misCapturas.forEach(captura => {
    const especieEnLista = todasEspecies.find(e => e.id === captura.especieId);
    if (!especieEnLista) {
      // Si la especie de la captura no está en la lista precargada
      // Verificar si es "Gallito de las Rocas" o "Orquídea"
      if (captura.especieId === 2) {
        todasEspecies.push(gallitoDeLasRocas);
      } else if (captura.especieId === 6) {
        todasEspecies.push(orquidea);
      } else {
        // Intentar obtenerla desde window.especiesData
        const especie = window.especiesData?.find(e => e.id === captura.especieId);
        if (especie) {
          todasEspecies.push(especie);
        }
      }
    }
  });
  
  // Filtrar y renderizar animales
  const animales = todasEspecies.filter(e => e.categoria === "animal");
  // Ordenar: primero las capturadas por el usuario, luego las demás
  animales.sort((a, b) => {
    const aCapturada = especiesCapturadasIds.has(a.id);
    const bCapturada = especiesCapturadasIds.has(b.id);
    if (aCapturada && !bCapturada) return -1;
    if (!aCapturada && bCapturada) return 1;
    return 0;
  });
  
  animales.forEach(especie => {
    const item = createEspecieItem(especie, especiesCapturadasIds.has(especie.id));
    listAnimals.appendChild(item);
  });
  
  // Filtrar y renderizar plantas
  const plantas = todasEspecies.filter(e => e.categoria === "planta");
  // Ordenar: primero las capturadas por el usuario, luego las demás
  plantas.sort((a, b) => {
    const aCapturada = especiesCapturadasIds.has(a.id);
    const bCapturada = especiesCapturadasIds.has(b.id);
    if (aCapturada && !bCapturada) return -1;
    if (!aCapturada && bCapturada) return 1;
    return 0;
  });
  
  plantas.forEach(especie => {
    const item = createEspecieItem(especie, especiesCapturadasIds.has(especie.id));
    listPlants.appendChild(item);
  });
}

// Función para crear un item de especie
function createEspecieItem(especie, esCapturada = false) {
  const item = document.createElement('div');
  item.className = 'capture-item';
  item.style.cursor = 'pointer';
  
  // Obtener la captura si existe
  let captura = null;
  if (esCapturada) {
    const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
    captura = misCapturas.find(c => c.especieId === especie.id);
  }
  
  item.addEventListener('click', (e) => {
    // No navegar si se hizo clic en el botón de eliminar
    if (e.target.closest('.btn-delete-capture')) {
      return;
    }
    // Guardar el ID en localStorage y navegar a detalle
    localStorage.setItem('especieSeleccionada', JSON.stringify(especie));
    window.location.href = './detalle.html';
  });
  
  // Crear botón de eliminar para todos los items
  const deleteButton = `
    <button class="btn-delete-capture" data-especie-id="${especie.id}" data-captura-id="${captura ? captura.id : ''}" data-es-capturada="${esCapturada}" aria-label="Eliminar">
      <img src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="Eliminar" style="width: 20px; height: 20px;">
    </button>
  `;
  
  item.innerHTML = `
    <img class="capture-thumb" src="${especie.imagen}" alt="${especie.nombre}">
    <div class="flex-grow-1">
      <p class="capture-name mb-0">${especie.nombre}</p>
    </div>
    ${deleteButton}
  `;
  
  // Agregar evento al botón de eliminar para todos los items
  const deleteBtn = item.querySelector('.btn-delete-capture');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevenir que active el click del item
      
      // Mostrar modal de confirmación
      const deleteModalElement = document.getElementById('deleteConfirmModal');
      if (deleteModalElement) {
        const deleteModal = new bootstrap.Modal(deleteModalElement);
        const messageEl = document.getElementById('delete-confirm-message');
        const confirmBtn = document.getElementById('btn-confirm-delete');
        
        // Actualizar mensaje del modal
        if (messageEl) {
          messageEl.textContent = `¿Estás seguro de que deseas eliminar "${especie.nombre}" de la lista?`;
        }
        
        // Guardar información de la especie a eliminar en el botón de confirmar
        if (confirmBtn) {
          confirmBtn.setAttribute('data-especie-id', especie.id);
          confirmBtn.setAttribute('data-captura-id', deleteBtn.getAttribute('data-captura-id') || '');
          confirmBtn.setAttribute('data-es-capturada', deleteBtn.getAttribute('data-es-capturada') || 'false');
        }
        
        deleteModal.show();
      }
    });
  }
  
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

// Función para ejecutar la eliminación
function ejecutarEliminacion(especieId, capturaId, esCapturada) {
  if (esCapturada === 'true') {
    // Si está capturada, eliminar de misCapturas
    const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
    const nuevasCapturas = misCapturas.filter(c => c.id !== capturaId);
    localStorage.setItem('misCapturas', JSON.stringify(nuevasCapturas));
  } else {
    // Si no está capturada, agregar a especies ocultas
    const especiesOcultas = JSON.parse(localStorage.getItem('especiesOcultas') || '[]');
    if (!especiesOcultas.includes(especieId)) {
      especiesOcultas.push(especieId);
      localStorage.setItem('especiesOcultas', JSON.stringify(especiesOcultas));
    }
  }
  
  // Recargar la lista
  loadEspecies();
}

// Detectar hash en la URL para activar el tab correspondiente
window.addEventListener("DOMContentLoaded", () => {
  // Configurar botón de confirmar eliminación
  const btnConfirmDelete = document.getElementById('btn-confirm-delete');
  if (btnConfirmDelete) {
    btnConfirmDelete.addEventListener('click', () => {
      const especieId = parseInt(btnConfirmDelete.getAttribute('data-especie-id'));
      const capturaId = btnConfirmDelete.getAttribute('data-captura-id');
      const esCapturada = btnConfirmDelete.getAttribute('data-es-capturada');
      
      // Cerrar el modal
      const deleteModalElement = document.getElementById('deleteConfirmModal');
      if (deleteModalElement) {
        const deleteModal = bootstrap.Modal.getInstance(deleteModalElement);
        if (deleteModal) {
          deleteModal.hide();
        }
      }
      
      // Ejecutar eliminación
      ejecutarEliminacion(especieId, capturaId, esCapturada);
    });
  }
  
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
    
    // Configurar descripciones (simple y avanzada)
    const descripcionSimpleEl = document.getElementById('detail-descripcion-simple');
    const descripcionEl = document.getElementById('detail-descripcion');
    const toggleNivel = document.getElementById('toggle-nivel-info');
    
    // Cargar preferencia del usuario (por defecto: simple)
    const modoAvanzado = localStorage.getItem('modoAvanzado') === 'true';
    
    if (descripcionSimpleEl && especie.descripcionSimple) {
      descripcionSimpleEl.textContent = especie.descripcionSimple;
    } else if (descripcionSimpleEl && especie.descripcion) {
      // Si no hay descripción simple, usar la completa
      descripcionSimpleEl.textContent = especie.descripcion;
    }
    
    if (descripcionEl && especie.descripcion) {
      descripcionEl.textContent = especie.descripcion;
    }
    
    // Configurar toggle
    if (toggleNivel) {
      toggleNivel.checked = modoAvanzado;
      
      // Función para cambiar entre modos
      const cambiarModo = () => {
        const esAvanzado = toggleNivel.checked;
        localStorage.setItem('modoAvanzado', esAvanzado.toString());
        
        if (esAvanzado) {
          // Modo avanzado: mostrar descripción completa
          if (descripcionSimpleEl) descripcionSimpleEl.style.display = 'none';
          if (descripcionEl) descripcionEl.style.display = 'block';
        } else {
          // Modo simple: mostrar descripción simple
          if (descripcionSimpleEl) descripcionSimpleEl.style.display = 'block';
          if (descripcionEl) descripcionEl.style.display = 'none';
        }
      };
      
      // Aplicar modo inicial
      cambiarModo();
      
      // Listener para cambios
      toggleNivel.addEventListener('change', cambiarModo);
    } else {
      // Si no hay toggle, mostrar descripción simple por defecto
      if (descripcionSimpleEl) descripcionSimpleEl.style.display = 'block';
      if (descripcionEl) descripcionEl.style.display = 'none';
    }
    
    // Mostrar nivel de certeza
    const certezaEl = document.getElementById('detail-certeza');
    if (certezaEl && especie.nivelCerteza) {
      certezaEl.textContent = `${especie.nivelCerteza}%`;
    }
    
    // Mostrar información de seguridad
    const seguridadAlert = document.getElementById('detail-seguridad-alert');
    const recomendacionSeguridad = document.getElementById('detail-recomendacion-seguridad');
    
    if (especie.peligrosidad) {
      let alertClass = 'alert-info';
      let icon = 'ℹ️';
      
      if (especie.peligrosidad === 'alta') {
        alertClass = 'alert-danger';
        icon = '⚠️';
      } else if (especie.peligrosidad === 'media') {
        alertClass = 'alert-warning';
        icon = '⚠️';
      }
      
      if (seguridadAlert) {
        seguridadAlert.className = `alert ${alertClass} mb-3`;
        seguridadAlert.innerHTML = `<strong>${icon} Nivel de peligrosidad: ${especie.peligrosidad.toUpperCase()}</strong>`;
        seguridadAlert.style.display = 'block';
      }
      
      if (recomendacionSeguridad && especie.recomendacionSeguridad) {
        recomendacionSeguridad.className = `alert ${alertClass === 'alert-danger' ? 'alert-danger' : alertClass === 'alert-warning' ? 'alert-warning' : 'alert-info'}`;
        recomendacionSeguridad.innerHTML = `<strong>Recomendaciones de seguridad:</strong><br>${especie.recomendacionSeguridad}`;
        recomendacionSeguridad.style.display = 'block';
      }
    }
    
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

