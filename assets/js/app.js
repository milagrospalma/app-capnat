const views = document.querySelectorAll(".view");

// Variable para rastrear la vista anterior
let vistaAnterior = null;

const showView = (id) => {
  // Obtener la vista activa actual antes de cambiar
  const vistaActual = document.querySelector('.view.active')?.id;
  
  views.forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  // Cerrar menú flotante si está abierto
  const menuFlotante = document.getElementById("menu-flotante");
  if (menuFlotante) {
    menuFlotante.classList.add("hidden");
  }
  
  // Si cambiamos de vista (hay una vista anterior y no es la primera carga), 
  // marcar todas las capturas como no nuevas
  // Esto hará que los pins cambien de negro a su color según categoría
  if (vistaAnterior && vistaAnterior !== id) {
    const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
    let hayCambios = false;
    misCapturas.forEach(captura => {
      if (captura.esNuevo) {
        captura.esNuevo = false;
        hayCambios = true;
      }
    });
    if (hayCambios) {
      localStorage.setItem('misCapturas', JSON.stringify(misCapturas));
    }
  }
  
  // Actualizar la vista anterior
  vistaAnterior = id;
  
  // Si es la vista Home, renderizar pins de las capturas
  if (id === 'view-home') {
    // Usar requestAnimationFrame para asegurar que el DOM esté listo
    requestAnimationFrame(() => {
      setTimeout(() => {
        renderMapPins();
      }, 50);
    });
  }
};

document.querySelectorAll("[data-target]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const target = el.getAttribute("data-target");
    const cameraType = el.getAttribute("data-camera-type");
    
    // Si es la vista de cámara y hay un tipo especificado, actualizar la imagen
    if (target === "view-camera" && cameraType) {
      const cameraImage = document.getElementById("camera-bg-image");
      if (cameraImage) {
        if (cameraType === "animal") {
          cameraImage.src = "./assets/img/animal-gallito.jpg";
          cameraImage.alt = "Vista de cámara - Animal";
        } else if (cameraType === "plant") {
          cameraImage.src = "./assets/img/planta-orquidea.jpg";
          cameraImage.alt = "Vista de cámara - Planta";
        }
      }
      // Guardar el tipo de cámara en localStorage para el reconocimiento
      localStorage.setItem('cameraType', cameraType);
    }
    
    showView(target);
  });
});

// Overlay helpers
const overlays = document.querySelectorAll(".overlay");
const showOverlay = (id) => {
  overlays.forEach((o) => o.classList.remove("active"));
  const ov = document.getElementById(id);
  if (ov) ov.classList.add("active");
};
const closeOverlays = () => overlays.forEach((o) => o.classList.remove("active"));

document.querySelectorAll("[data-overlay]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const overlayId = el.getAttribute("data-overlay");
    showOverlay(overlayId);
  });
});

document.querySelectorAll("[data-close-overlay]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    closeOverlays();
  });
});

// Login con Firebase Authentication
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    
    if (!email || !password) {
      alert("Completa ambos campos para continuar.");
      return;
    }
    
    // Verificar que Firebase esté disponible
    if (typeof firebase === 'undefined' || !firebase.auth) {
      alert("Error: Firebase no está disponible. Recarga la página.");
      console.error("Firebase no está disponible");
      return;
    }
    
    // Mostrar modal de validación
    const validatingModalElement = document.getElementById("validatingModal");
    const validatingModal = new bootstrap.Modal(validatingModalElement);
    const validatingLabel = document.getElementById("validatingModalLabel");
    const validatingSpinner = validatingModalElement.querySelector(".spinner-grow");
    
    validatingModal.show();
    validatingLabel.textContent = "Validando datos...";
    if (validatingSpinner) {
      validatingSpinner.style.display = "inline-block";
    }
    
    try {
      // Autenticar usuario con Firebase
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Guardar información del usuario en localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userId', user.uid);
      if (user.displayName) {
        localStorage.setItem('userName', user.displayName);
      }
      
      // Actualizar perfil en el menú
      updateUserProfile();
      
      // Cambiar mensaje a éxito
      validatingLabel.textContent = `¡Hola${user.displayName ? ', ' + user.displayName : ''}!`;
      if (validatingSpinner) {
        validatingSpinner.style.display = "none";
      }
      
      // Después de 2 segundos, cerrar modal y cambiar a Home
      setTimeout(() => {
        validatingModal.hide();
        loginForm.reset();
        showView("view-home");
        // Renderizar pins después de mostrar la vista Home
        setTimeout(() => {
          renderMapPins();
        }, 100);
      }, 2000);
      
    } catch (error) {
      // Manejar errores
      console.error("Error al iniciar sesión:", error);
      
      let errorMessage = "";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No existe una cuenta con este email.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Email o contraseña incorrectos";
          break;
        case "auth/too-many-requests":
          errorMessage = "Demasiados intentos fallidos. Intenta más tarde.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Error de conexión. Verifica tu internet.";
          break;
        default:
          errorMessage = error.message || "Error al iniciar sesión.";
      }
      
      // Mostrar error en el mismo modal
      validatingLabel.textContent = errorMessage;
      if (validatingSpinner) {
        validatingSpinner.style.display = "none";
      }
      
      // Agregar botón para cerrar el modal después de 3 segundos
      setTimeout(() => {
        validatingModal.hide();
        // Restaurar estilo y texto original
        validatingLabel.textContent = "Validando datos...";
        if (validatingSpinner) {
          validatingSpinner.style.display = "inline-block";
        }
      }, 3000);
    }
  });
}

// Signup con Firebase Authentication
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("su-name").value.trim();
    const email = document.getElementById("su-email").value.trim();
    const pass = document.getElementById("su-password").value.trim();
    
    if (!name || !email || !pass) {
      alert("Completa los campos obligatorios.");
      return;
    }
    
    // Validar que la contraseña tenga al menos 6 caracteres
    if (pass.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    
    // Verificar que Firebase esté disponible
    if (typeof firebase === 'undefined' || !firebase.auth) {
      alert("Error: Firebase no está disponible. Recarga la página.");
      console.error("Firebase no está disponible");
      return;
    }
    
    // Mostrar modal de registro
    const registeringModalElement = document.getElementById("registeringModal");
    const registeringModal = new bootstrap.Modal(registeringModalElement);
    const registeringLabel = document.getElementById("registeringModalLabel");
    const registeringSpinner = registeringModalElement.querySelector(".spinner-grow");
    
    registeringModal.show();
    registeringLabel.textContent = "Un momento, por favor...";
    if (registeringSpinner) {
      registeringSpinner.style.display = "inline-block";
    }
    
    try {
      // Registrar usuario en Firebase
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
      
      // Actualizar el perfil con el nombre
      await userCredential.user.updateProfile({
        displayName: name
      });
      
      // Guardar información del usuario en localStorage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userId', userCredential.user.uid);
      
      // Actualizar perfil en el menú
      updateUserProfile();
      
      // Cambiar mensaje a éxito
      registeringLabel.textContent = "¡Registro exitoso!";
      if (registeringSpinner) {
        registeringSpinner.style.display = "none";
      }
      
      // Después de 2 segundos, cerrar modal y cambiar a Login
      setTimeout(() => {
        registeringModal.hide();
        signupForm.reset();
        showView("view-login");
      }, 2000);
      
    } catch (error) {
      // Manejar errores
      console.error("Error al registrar:", error);
      
      let errorMessage = "Error al crear la cuenta. ";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage += "Este email ya está registrado.";
          break;
        case "auth/invalid-email":
          errorMessage += "El email no es válido.";
          break;
        case "auth/weak-password":
          errorMessage += "La contraseña es muy débil.";
          break;
        case "auth/network-request-failed":
          errorMessage += "Error de conexión. Verifica tu internet.";
          break;
        default:
          errorMessage += error.message;
      }
      
      // Cerrar modal y mostrar error
      registeringModal.hide();
      alert(errorMessage);
    }
  });
}

const forgot = document.getElementById("forgot");
if (forgot) {
  forgot.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Flujo de recuperación de contraseña.");
  });
}

// Splash delayed buttons
const splashActions = document.getElementById("splash-actions");
if (splashActions) {
  setTimeout(() => splashActions.classList.add("visible"), 2000);
}

// Especies para ejercicio estático
const especieEjercicio = {
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

const especieEjercicioPlanta = {
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

// Camera flow - Simular reconocimiento (siempre devuelve especie del ejercicio según tipo)
const cameraShot = document.getElementById("camera-shot");
if (cameraShot) {
  cameraShot.addEventListener("click", (e) => {
    e.preventDefault();
    // Para el ejercicio estático, reconocer según el tipo de cámara
    // En producción, esto vendría de la API de IA
    
    // Obtener el tipo de cámara guardado
    const cameraType = localStorage.getItem('cameraType') || 'animal';
    
    // Seleccionar la especie según el tipo
    const especieReconocida = cameraType === 'plant' ? especieEjercicioPlanta : especieEjercicio;
    
    // Guardar especie reconocida en localStorage para el modal
    localStorage.setItem('especieReconocida', JSON.stringify(especieReconocida));
    
    // Mostrar modal de reconocimiento
    const recognitionModalElement = document.getElementById("recognitionModal");
    const recognitionModal = new bootstrap.Modal(recognitionModalElement);
    const certaintyPercentage = document.getElementById("certainty-percentage");
    const speciesName = document.getElementById("recognition-species-name");
    
    // Usar especieReconocida
    if (certaintyPercentage && especieReconocida.nivelCerteza) {
      certaintyPercentage.textContent = `${especieReconocida.nivelCerteza}%`;
      // Cambiar color del badge según el nivel de certeza
      const certaintyBadge = document.querySelector('.certainty-badge');
      if (certaintyBadge) {
        certaintyBadge.classList.remove('medium', 'low');
        if (especieReconocida.nivelCerteza < 70) {
          certaintyBadge.classList.add('low');
        } else if (especieReconocida.nivelCerteza < 85) {
          certaintyBadge.classList.add('medium');
        }
      }
    }
    if (speciesName) {
      speciesName.textContent = especieReconocida.nombre;
    }
    
    recognitionModal.show();
  });
}

// Limpiar backdrop del modal de reconocimiento cuando se cierre de cualquier forma
// Ejecutar inmediatamente si el DOM ya está cargado, o esperar a DOMContentLoaded
function setupRecognitionModalCleanup() {
  const recognitionModalElement = document.getElementById("recognitionModal");
  if (recognitionModalElement) {
    // Remover listener anterior si existe para evitar duplicados
    recognitionModalElement.removeEventListener('hidden.bs.modal', cleanupModalBackdrop);
    recognitionModalElement.addEventListener('hidden.bs.modal', cleanupModalBackdrop);
  }
}

function cleanupModalBackdrop() {
  // Limpiar cualquier backdrop residual con un pequeño delay para asegurar que Bootstrap termine su limpieza
  setTimeout(() => {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, 50);
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupRecognitionModalCleanup);
} else {
  setupRecognitionModalCleanup();
}

const btnCaptureAgain = document.getElementById("btn-capture-again");
if (btnCaptureAgain) {
  btnCaptureAgain.addEventListener("click", (e) => {
    e.preventDefault();
    // El modal se cierra automáticamente con data-bs-dismiss
    showView("view-camera");
  });
}

const btnSaveFromRec = document.getElementById("btn-save-from-rec");
if (btnSaveFromRec) {
  btnSaveFromRec.addEventListener("click", (e) => {
    e.preventDefault();
    // Obtener la especie reconocida del localStorage
    const especieReconocidaData = localStorage.getItem('especieReconocida');
    if (especieReconocidaData) {
      const especieReconocida = JSON.parse(especieReconocidaData);
      // Guardar como especie seleccionada para que aparezca en el historial
      localStorage.setItem('especieSeleccionada', especieReconocidaData);
    }
    
    // Obtener la instancia del modal y cerrarlo manualmente
    const recognitionModalElement = document.getElementById("recognitionModal");
    const recognitionModal = bootstrap.Modal.getInstance(recognitionModalElement);
    
    if (recognitionModal) {
      // Cerrar el modal
      recognitionModal.hide();
      
      // Esperar a que el modal se cierre completamente (incluyendo el backdrop)
      recognitionModalElement.addEventListener('hidden.bs.modal', function onModalHidden() {
        // Remover el listener para evitar múltiples ejecuciones
        recognitionModalElement.removeEventListener('hidden.bs.modal', onModalHidden);
        
        // Ir a Home screen
        showView("view-home");
        
        // Renderizar pins existentes
        setTimeout(() => {
          renderMapPins();
        }, 100);
        
        // Mostrar el Toast después de un pequeño delay para asegurar que el backdrop se haya eliminado
        setTimeout(() => {
          // Asegurarse de que no haya backdrops residuales
          const backdrops = document.querySelectorAll('.modal-backdrop');
          backdrops.forEach(backdrop => backdrop.remove());
          document.body.classList.remove('modal-open');
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
          
          const saveMapToastElement = document.getElementById("saveMapToast");
          const saveMapToast = new bootstrap.Toast(saveMapToastElement);
          saveMapToast.show();
        }, 150);
      }, { once: true });
    } else {
      // Si no hay instancia del modal, proceder directamente
      showView("view-home");
      setTimeout(() => {
        renderMapPins();
        const saveMapToastElement = document.getElementById("saveMapToast");
        const saveMapToast = new bootstrap.Toast(saveMapToastElement);
        saveMapToast.show();
      }, 150);
    }
  });
}

const btnSaveConfirm = document.getElementById("btn-save-confirm");
if (btnSaveConfirm) {
  btnSaveConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    // El modal se cierra automáticamente
    const newPin = document.getElementById("pin-new");
    if (newPin) newPin.classList.remove("hidden");
    showView("view-home");
  });
}

// Botón Guardar del Toast
const btnSaveConfirmToast = document.getElementById("btn-save-confirm-toast");
if (btnSaveConfirmToast) {
  btnSaveConfirmToast.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Obtener la especie reconocida
    const especieReconocidaData = localStorage.getItem('especieReconocida');
    if (!especieReconocidaData) {
      alert("No hay especie para guardar.");
      return;
    }
    
    const especieReconocida = JSON.parse(especieReconocidaData);
    
    // Calcular la posición del puntero relativa al mapa
    const mapPointer = document.querySelector(".map-pointer-icon");
    const mapBox = document.querySelector(".map-box");
    const newPin = document.getElementById("pin-new");
    
    if (mapBox && newPin) {
      let relativeX = 50;
      let relativeY = 50;
      
      // Si hay puntero, calcular su posición
      if (mapPointer) {
        const pointerRect = mapPointer.getBoundingClientRect();
        const pointerCenterX = pointerRect.left + pointerRect.width / 2;
        const pointerCenterY = pointerRect.top + pointerRect.height / 2;
        
        // Obtener la posición del mapa en la pantalla
        const mapRect = mapBox.getBoundingClientRect();
        
        // Calcular la posición relativa en porcentajes
        relativeX = ((pointerCenterX - mapRect.left) / mapRect.width) * 100;
        relativeY = ((pointerCenterY - mapRect.top) / mapRect.height) * 100;
      }
      
      // Si es Orquídea (id: 6), posicionarla a 300px debajo del header (posición fija)
      if (especieReconocida.id === 6) {
        // Obtener el header de la vista Home
        const header = document.querySelector('#view-home header');
        const mapRect = mapBox.getBoundingClientRect();
        
        if (header && mapBox) {
          // Obtener la posición del header
          const headerRect = header.getBoundingClientRect();
          
          // Posición
          const alturaMapa = mapRect.height;
          const topOrquideaPx = 200;
          
          // Convertir a porcentaje relativo al map-box
          relativeY = (topOrquideaPx / alturaMapa) * 100;
          
          // Centrar horizontalmente (50% del ancho del mapa)
          relativeX = 50;
        }
      }
      
      // Crear registro de captura
      const captura = {
        id: `captura_${Date.now()}`,
        especieId: especieReconocida.id,
        fechaCaptura: new Date().toISOString(),
        ubicacion: {
          top: relativeY,
          left: relativeX,
          nombre: especieReconocida.ubicacion || "Parque Nacional Yanachaga Chemillén"
        },
        nivelCerteza: especieReconocida.nivelCerteza || 0,
        categoria: especieReconocida.categoria,
        esNuevo: true // Marcar como nuevo para usar color negro inicialmente
      };
      
      // Guardar en misCapturas
      const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
      misCapturas.push(captura);
      localStorage.setItem('misCapturas', JSON.stringify(misCapturas));
      
      // Actualizar el pin "Nueva" con el nombre de la especie y mostrarlo
      newPin.textContent = especieReconocida.nombre;
      newPin.style.top = `${relativeY}%`;
      newPin.style.left = `${relativeX}%`;
      // Mantener color negro inicialmente (cambiará después de visitar otras vistas)
      newPin.classList.remove('pin-orange', 'pin-green');
      newPin.classList.add('pin-black');
      newPin.classList.remove("hidden");
      
      // Limpiar especie reconocida
      localStorage.removeItem('especieReconocida');
      
      // Cerrar el Toast
      const saveMapToastElement = document.getElementById("saveMapToast");
      const saveMapToast = bootstrap.Toast.getInstance(saveMapToastElement);
      if (saveMapToast) {
        saveMapToast.hide();
        hideToastBackdrop();
      }
      
      // Recargar pins en el mapa
      renderMapPins();
    }
  });
}

// Función para renderizar pins en el mapa desde las capturas del usuario y especies precargadas
function renderMapPins() {
  const mapPinsContainer = document.getElementById("map-pins-container");
  if (!mapPinsContainer) {
    console.warn('map-pins-container no encontrado');
    return;
  }
  
  // Limpiar pins existentes (excepto pin-new)
  mapPinsContainer.innerHTML = '';
  
  // Obtener datos completos de especies
  const especiesData = window.especiesData || [];
  
  if (especiesData.length === 0) {
    console.warn('No hay datos de especies disponibles');
    return;
  }
  
  // Obtener capturas del usuario para saber cuáles tienen ubicación personalizada
  const misCapturas = JSON.parse(localStorage.getItem('misCapturas') || '[]');
  const capturasPorEspecieId = {};
  misCapturas.forEach(captura => {
    capturasPorEspecieId[captura.especieId] = captura;
  });
  
  // Obtener especies ocultas (eliminadas por el usuario de la lista)
  const especiesOcultas = JSON.parse(localStorage.getItem('especiesOcultas') || '[]');
  
  // Crear un Set de IDs de especies capturadas para verificación rápida
  const especiesCapturadasIds = new Set(misCapturas.map(c => c.especieId));
  
  // Posiciones predefinidas para las especies (distribuidas en el mapa)
  // Nota: Solo 8 posiciones porque "Gallito de las Rocas" y "Orquídea" se agregarán dinámicamente
  const posicionesPredefinidas = [
    { top: 22, left: 75 },  // Posición 1 - Oso de Anteojos
    { top: 80, left: 60 },  // Posición 2 - Jaguar
    { top: 32, left: 38 },  // Posición 3 - Mono Choro
    { top: 48, left: 64 },  // Posición 4 - Venado Enano
    { top: 55, left: 25 },  // Posición 5 - Ulcumano
    { top: 70, left: 80 },  // Posición 6 - Cedro
    { top: 40, left: 15 },  // Posición 7 - Nogal
    { top: 65, left: 50 }   // Posición 8 - Roble
  ];
  
  console.log(`Renderizando ${especiesData.length} especies en el mapa`);
  
  // Crear un pin por cada especie precargada
  especiesData.forEach((especie, index) => {
    // Si la especie está oculta, no mostrar su pin
    if (especiesOcultas.includes(especie.id)) {
      return;
    }
    
    // Verificar si la especie está capturada actualmente
    const captura = capturasPorEspecieId[especie.id];
    
    // Si la especie fue capturada (está en el historial) pero luego eliminada de misCapturas,
    // no mostrar su pin. Solo mostrar si:
    // 1. Está capturada actualmente (en misCapturas), O
    // 2. Nunca fue capturada (no está en especiesOcultas relacionadas con capturas)
    // Por ahora, mostramos todas las especies precargadas que no están ocultas
    // La lógica es: mostrar todas las precargadas, pero si fueron eliminadas de misCapturas
    // y están en especiesOcultas, no mostrarlas
    
    // Determinar color del pin: negro si es nuevo y está capturada, color según categoría si no
    let pinClass = 'pin-black';
    
    // Si tiene captura y es nueva, usar negro; si no, usar color según categoría
    if (captura && captura.esNuevo) {
      pinClass = 'pin-black';
    } else {
      pinClass = especie.categoria === 'animal' ? 'pin-orange' : 'pin-green';
    }
    
    // Crear elemento pin
    const pin = document.createElement('div');
    pin.className = `pin ${pinClass}`;
    
    // Si el usuario tiene una captura de esta especie con ubicación, usar esa ubicación
    // Si no, usar posición predefinida o aleatoria
    if (captura && captura.ubicacion && captura.ubicacion.top !== undefined && captura.ubicacion.left !== undefined) {
      // Usar ubicación de la captura del usuario
      pin.style.top = `${captura.ubicacion.top}%`;
      pin.style.left = `${captura.ubicacion.left}%`;
    } else {
      // Usar posición predefinida o aleatoria
      const posicion = posicionesPredefinidas[index] || {
        top: Math.random() * 60 + 20,
        left: Math.random() * 60 + 20
      };
      pin.style.top = `${posicion.top}%`;
      pin.style.left = `${posicion.left}%`;
    }
    
    pin.textContent = especie.nombre;
    pin.style.cursor = 'pointer';
    
    // Formatear tooltip
    let tooltipTexto = especie.nombre;
    if (captura && captura.fechaCaptura) {
      try {
        const fechaTexto = new Date(captura.fechaCaptura).toLocaleDateString('es-PE', {
          day: '2-digit',
          month: 'short'
        });
        tooltipTexto += ` - Capturado: ${fechaTexto}`;
      } catch (e) {
        // Ignorar error de fecha
      }
    }
    pin.title = tooltipTexto;
    
    // Agregar evento click para ver detalles
    pin.addEventListener('click', () => {
      localStorage.setItem('especieSeleccionada', JSON.stringify(especie));
      window.location.href = './pages/detalle.html';
    });
    
    mapPinsContainer.appendChild(pin);
  });
  
  // Agregar pins de especies capturadas que no están en la lista precargada
  // (por ejemplo, "Gallito de las Rocas" que se agregó dinámicamente)
  misCapturas.forEach(captura => {
    // Si la especie está oculta, no mostrar su pin
    if (especiesOcultas.includes(captura.especieId)) {
      return;
    }
    
    // Verificar si esta especie ya está en los pins (de especiesData)
    const yaExiste = especiesData.some(e => e.id === captura.especieId);
    if (yaExiste) return; // Ya se renderizó arriba
    
    // Buscar datos de la especie (puede estar en window.especiesData o en especieEjercicio)
    let especie = null;
    if (window.especiesData) {
      especie = window.especiesData.find(e => e.id === captura.especieId);
    }
    // Si no está en especiesData, puede ser una especie del ejercicio
    if (!especie) {
      if (captura.especieId === 2) {
        // Es "Gallito de las Rocas" del ejercicio
        especie = especieEjercicio;
      } else if (captura.especieId === 6) {
        // Es "Orquídea" del ejercicio
        especie = especieEjercicioPlanta;
      }
    }
    
    if (!especie) return; // No se encontró la especie
    
    // Determinar color del pin: negro si es nuevo, color según categoría si no
    let pinClass = 'pin-black';
    if (!captura.esNuevo) {
      pinClass = especie.categoria === 'animal' ? 'pin-orange' : 'pin-green';
    }
    
    // Crear elemento pin
    const pin = document.createElement('div');
    pin.className = `pin ${pinClass}`;
    
    // Usar ubicación de la captura (o centro del mapa por defecto)
    if (captura.ubicacion && captura.ubicacion.top !== undefined && captura.ubicacion.left !== undefined) {
      pin.style.top = `${captura.ubicacion.top}%`;
      pin.style.left = `${captura.ubicacion.left}%`;
    } else {
      // Por defecto, centro del mapa (ubicación original del pin "Nueva")
      pin.style.top = `50%`;
      pin.style.left = `50%`;
    }
    
    pin.textContent = especie.nombre;
    pin.style.cursor = 'pointer';
    
    // Formatear tooltip
    let tooltipTexto = especie.nombre;
    if (captura.fechaCaptura) {
      try {
        const fechaTexto = new Date(captura.fechaCaptura).toLocaleDateString('es-PE', {
          day: '2-digit',
          month: 'short'
        });
        tooltipTexto += ` - Capturado: ${fechaTexto}`;
      } catch (e) {
        // Ignorar error de fecha
      }
    }
    pin.title = tooltipTexto;
    
    // Agregar evento click para ver detalles
    pin.addEventListener('click', () => {
      localStorage.setItem('especieSeleccionada', JSON.stringify(especie));
      window.location.href = './pages/detalle.html';
    });
    
    mapPinsContainer.appendChild(pin);
  });
  
  console.log(`Pins renderizados: ${mapPinsContainer.children.length}`);
}

// Función para actualizar el perfil del usuario en el menú
function updateUserProfile() {
  const userName = localStorage.getItem('userName') || 'Usuario';
  const userInitial = userName.charAt(0).toUpperCase();
  const userInitialCircle = document.getElementById('user-initial-circle');
  const userInitialSpan = document.getElementById('user-initial');
  const userNameDisplay = document.getElementById('user-name-display');
  
  if (userInitialSpan) {
    userInitialSpan.textContent = userInitial;
  }
  
  if (userNameDisplay) {
    userNameDisplay.textContent = userName;
  }
}

// Manejar hash en la URL para activar vistas al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  // Actualizar perfil del usuario
  updateUserProfile();
  
  // Verificar si hay un usuario autenticado en Firebase
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.displayName) {
        localStorage.setItem('userName', user.displayName);
        updateUserProfile();
      }
    });
  }
  
  const hash = window.location.hash;
  if (hash) {
    const viewId = hash.substring(1); // Remover el #
    if (viewId && document.getElementById(viewId)) {
      showView(viewId);
    }
  }
});


// También manejar cambios en el hash
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  if (hash) {
    const viewId = hash.substring(1);
    if (viewId && document.getElementById(viewId)) {
      showView(viewId);
    }
  }
});

// Datos de notificaciones (JSON estático incluido directamente)
const notificacionesData = [
  {
    "id": 1,
    "titulo": "Nueva especie descubierta",
    "descripcion": "Se ha registrado una nueva especie de orquídea en el Parque Nacional Yanachaga Chemillén. Los investigadores están estudiando sus características únicas.",
    "fecha": "2024-04-20",
    "leida": false
  },
  {
    "id": 2,
    "titulo": "Actualización del mapa",
    "descripcion": "El mapa del parque ha sido actualizado con nuevas rutas y puntos de interés. Explora las nuevas áreas disponibles para capturar especies.",
    "fecha": "2024-04-18",
    "leida": false
  },
  {
    "id": 3,
    "titulo": "Evento de observación",
    "descripcion": "Únete al evento de observación de aves este fin de semana. Tendrás la oportunidad de capturar especies raras como el Gallito de las Rocas.",
    "fecha": "2024-04-15",
    "leida": true
  },
  {
    "id": 4,
    "titulo": "Logro desbloqueado",
    "descripcion": "¡Felicidades! Has desbloqueado el logro 'Explorador de Bosques' por capturar más de 10 especies diferentes en el parque.",
    "fecha": "2024-04-12",
    "leida": true
  },
  {
    "id": 5,
    "titulo": "Mantenimiento programado",
    "descripcion": "El sistema estará en mantenimiento el próximo martes de 2:00 AM a 4:00 AM. Durante este tiempo, algunas funciones pueden no estar disponibles.",
    "fecha": "2024-04-10",
    "leida": false
  },
  {
    "id": 6,
    "titulo": "Nueva función disponible",
    "descripcion": "Ahora puedes compartir tus capturas en redes sociales directamente desde la aplicación. Comparte tus descubrimientos con la comunidad.",
    "fecha": "2024-04-08",
    "leida": true
  }
];

// Función para renderizar notificaciones
function renderNotificaciones() {
  const notificationsList = document.getElementById("notifications-list");
  if (!notificationsList) return;
  
  notificationsList.innerHTML = '';
  
  if (notificacionesData.length === 0) {
    notificationsList.innerHTML = '<li><span class="dropdown-item-text text-muted">No hay notificaciones</span></li>';
    return;
  }
  
  notificacionesData.forEach(notif => {
    const li = document.createElement('li');
    li.className = 'notification-item' + (notif.leida ? '' : ' unread');
    
    const fecha = new Date(notif.fecha);
    const fechaFormateada = fecha.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    li.innerHTML = `
      <a class="dropdown-item notification-item-content" href="#">
        <div class="notif-title">${notif.titulo}</div>
        <div class="notif-body">${notif.descripcion}</div>
        <small class="text-muted" style="font-size: 11px;">${fechaFormateada}</small>
      </a>
    `;
    
    notificationsList.appendChild(li);
  });
}

// Función para mostrar el backdrop del Toast
function showToastBackdrop() {
  const backdrop = document.getElementById('toastBackdrop');
  if (backdrop) {
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

// Función para ocultar el backdrop del Toast
function hideToastBackdrop() {
  const backdrop = document.getElementById('toastBackdrop');
  if (backdrop) {
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Función para configurar el toggle de contraseña
function setupPasswordToggle(toggleBtnId, passwordInputId) {
  const toggleBtn = document.getElementById(toggleBtnId);
  const passwordInput = document.getElementById(passwordInputId);
  
  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      const icon = toggleBtn.querySelector('.password-icon');
      
      if (isPassword) {
        // Mostrar contraseña
        passwordInput.type = 'text';
        icon.src = 'https://img.icons8.com/?size=100&id=85028&format=png&color=000000';
        icon.alt = 'Ocultar';
        toggleBtn.setAttribute('aria-label', 'Ocultar contraseña');
      } else {
        // Ocultar contraseña
        passwordInput.type = 'password';
        icon.src = 'https://img.icons8.com/?size=100&id=96151&format=png&color=000000';
        icon.alt = 'Mostrar';
        toggleBtn.setAttribute('aria-label', 'Mostrar contraseña');
      }
    });
  }
}

// Manejar opción Salir del menú dropdown
window.addEventListener("DOMContentLoaded", () => {
  // Configurar toggles de contraseña
  setupPasswordToggle('toggle-login-password', 'login-password');
  setupPasswordToggle('toggle-su-password', 'su-password');
  
  // Configurar eventos del Toast para mostrar/ocultar backdrop
  const saveMapToastElement = document.getElementById("saveMapToast");
  if (saveMapToastElement) {
    saveMapToastElement.addEventListener('shown.bs.toast', () => {
      showToastBackdrop();
    });
    saveMapToastElement.addEventListener('hidden.bs.toast', () => {
      hideToastBackdrop();
    });
  }
  
  // Cargar notificaciones
  renderNotificaciones();
  
  const optionSalir = document.getElementById("option-salir");
  if (optionSalir) {
    optionSalir.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Cerrar el dropdown primero
      const dropdownElement = document.getElementById("dropdownMenuButton");
      if (dropdownElement && typeof bootstrap !== 'undefined') {
        const dropdown = bootstrap.Dropdown.getInstance(dropdownElement);
        if (dropdown) {
          dropdown.hide();
        }
      }
      
      // Limpiar todo el localStorage de forma explícita
      // Eliminar todas las claves relacionadas con la sesión
      const keysToRemove = [
        'misCapturas',
        'especieReconocida',
        'especieSeleccionada',
        'cameraType',
        'userName',
        'userEmail',
        'userId',
        'tabActivo',
        'modoAvanzado'
      ];
      
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
      
      // También limpiar cualquier otra clave que pueda existir
      localStorage.clear();
      
      // Verificar que se limpió correctamente
      console.log('localStorage limpiado. misCapturas:', localStorage.getItem('misCapturas'));
      
      // Cerrar sesión de Firebase si está autenticado
      if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().signOut().catch(error => {
          console.log('Error al cerrar sesión de Firebase:', error);
        });
      }
      
      // Limpiar el perfil del usuario en el menú
      updateUserProfile();
      
      // Limpiar pins del mapa inmediatamente
      const mapPinsContainer = document.getElementById("map-pins-container");
      if (mapPinsContainer) {
        mapPinsContainer.innerHTML = '';
      }
      
      // Ocultar pin "Nueva" si está visible
      const newPin = document.getElementById("pin-new");
      if (newPin) {
        newPin.classList.add("hidden");
        newPin.textContent = "Nueva";
        newPin.classList.remove('pin-orange', 'pin-green');
        newPin.classList.add('pin-black');
      }
      
      // Navegar a la vista splash
      const target = optionSalir.getAttribute("data-target");
      if (target) {
        showView(target);
      }
      
      // Renderizar pins después de limpiar (solo mostrará especies precargadas)
      setTimeout(() => {
        renderMapPins();
      }, 100);
    });
  }
});

