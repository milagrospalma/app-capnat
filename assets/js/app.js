const views = document.querySelectorAll(".view");

const showView = (id) => {
  views.forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  // Cerrar menú flotante si está abierto
  const menuFlotante = document.getElementById("menu-flotante");
  if (menuFlotante) {
    menuFlotante.classList.add("hidden");
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
          cameraImage.src = "./assets/img/planta.webp";
          cameraImage.alt = "Vista de cámara - Planta";
        }
      }
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

// Login simulation
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    if (!email || !password) {
      alert("Completa ambos campos para continuar.");
      return;
    }
    
    // Mostrar modal de validación
    const validatingModalElement = document.getElementById("validatingModal");
    const validatingModal = new bootstrap.Modal(validatingModalElement);
    const validatingLabel = document.getElementById("validatingModalLabel");
    const validatingSpinner = validatingModalElement.querySelector(".spinner-grow");
    
    validatingModal.show();
    
    // Después de 2 segundos, cambiar a mensaje de éxito
    setTimeout(() => {
      validatingLabel.textContent = `¡Bienvenido!`;
      if (validatingSpinner) {
        validatingSpinner.style.display = "none";
      }
      
      // Después de otros 2 segundos, cerrar modal y cambiar a Home
      setTimeout(() => {
        validatingModal.hide();
        loginForm.reset();
        showView("view-home");
      }, 2000);
    }, 3000);
  });
}

// Signup simulation
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("su-name").value.trim();
    const email = document.getElementById("su-email").value.trim();
    const pass = document.getElementById("su-password").value.trim();
    if (!name || !email || !pass) {
      alert("Completa los campos obligatorios.");
      return;
    }
    
    // Mostrar modal de registro
    const registeringModalElement = document.getElementById("registeringModal");
    const registeringModal = new bootstrap.Modal(registeringModalElement);
    const registeringLabel = document.getElementById("registeringModalLabel");
    const registeringSpinner = registeringModalElement.querySelector(".spinner-grow");
    
    registeringModal.show();
    
    // Después de 3 segundos, cambiar a mensaje de éxito
    setTimeout(() => {
      registeringLabel.textContent = "Registro exitoso";
      if (registeringSpinner) {
        registeringSpinner.style.display = "none";
      }
      
      // Después de otros 2 segundos, cerrar modal y cambiar a Login
      setTimeout(() => {
        registeringModal.hide();
        signupForm.reset();
        showView("view-login");
      }, 2000);
    }, 3000);
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

// Camera flow - Simular reconocimiento con datos aleatorios
const cameraShot = document.getElementById("camera-shot");
if (cameraShot) {
  cameraShot.addEventListener("click", (e) => {
    e.preventDefault();
    // Simular reconocimiento: seleccionar una especie aleatoria del JSON
    // En producción, esto vendría de la API de IA
    // Acceder a especiesData desde window (definido en pages.js)
    const especiesData = window.especiesData || [];
    if (especiesData.length === 0) {
      console.warn('No hay datos de especies disponibles');
      return;
    }
    const animales = especiesData.filter(e => e.categoria === "animal");
    const plantas = especiesData.filter(e => e.categoria === "planta");
    const todasEspecies = [...animales, ...plantas];
    const especieAleatoria = todasEspecies[Math.floor(Math.random() * todasEspecies.length)];
    
    // Guardar especie reconocida en localStorage para el modal
    localStorage.setItem('especieReconocida', JSON.stringify(especieAleatoria));
    
    // Mostrar modal de reconocimiento
    const recognitionModalElement = document.getElementById("recognitionModal");
    const recognitionModal = new bootstrap.Modal(recognitionModalElement);
    const certaintyPercentage = document.getElementById("certainty-percentage");
    const speciesName = document.getElementById("recognition-species-name");
    
    if (certaintyPercentage && especieAleatoria.nivelCerteza) {
      certaintyPercentage.textContent = `${especieAleatoria.nivelCerteza}%`;
      // Cambiar color del badge según el nivel de certeza
      const certaintyBadge = document.querySelector('.certainty-badge');
      if (certaintyBadge) {
        certaintyBadge.classList.remove('medium', 'low');
        if (especieAleatoria.nivelCerteza < 70) {
          certaintyBadge.classList.add('low');
        } else if (especieAleatoria.nivelCerteza < 85) {
          certaintyBadge.classList.add('medium');
        }
      }
    }
    if (speciesName) {
      speciesName.textContent = especieAleatoria.nombre;
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
    // El modal se cierra automáticamente con data-bs-dismiss
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
    // Cerrar el Toast
    const saveMapToastElement = document.getElementById("saveMapToast");
    const saveMapToast = bootstrap.Toast.getInstance(saveMapToastElement);
    if (saveMapToast) {
      saveMapToast.hide();
    }
    
    // Calcular la posición del puntero relativa al mapa
    const mapPointer = document.querySelector(".map-pointer-icon");
    const mapBox = document.querySelector(".map-box");
    const newPin = document.getElementById("pin-new");
    
    if (mapPointer && mapBox && newPin) {
      // Obtener la posición del puntero en la pantalla
      const pointerRect = mapPointer.getBoundingClientRect();
      const pointerCenterX = pointerRect.left + pointerRect.width / 2;
      const pointerCenterY = pointerRect.top + pointerRect.height / 2;
      
      // Obtener la posición del mapa en la pantalla
      const mapRect = mapBox.getBoundingClientRect();
      
      // Calcular la posición relativa en porcentajes
      const relativeX = ((pointerCenterX - mapRect.left) / mapRect.width) * 100;
      const relativeY = ((pointerCenterY - mapRect.top) / mapRect.height) * 100;
      
      // Aplicar la posición al pin
      newPin.style.left = `${relativeX}%`;
      newPin.style.top = `${relativeY}%`;
      newPin.classList.remove("hidden");
    }
  });
}

// Manejar hash en la URL para activar vistas al cargar la página
window.addEventListener("DOMContentLoaded", () => {
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

// Manejar opción Salir del menú dropdown
window.addEventListener("DOMContentLoaded", () => {
  // Cargar notificaciones
  renderNotificaciones();
  
  const optionSalir = document.getElementById("option-salir");
  if (optionSalir) {
    optionSalir.addEventListener("click", (e) => {
      e.preventDefault();
      const target = optionSalir.getAttribute("data-target");
      if (target) {
        showView(target);
      }
      // Cerrar el dropdown usando Bootstrap
      const dropdownElement = document.getElementById("dropdownMenuButton");
      if (dropdownElement && typeof bootstrap !== 'undefined') {
        const dropdown = bootstrap.Dropdown.getInstance(dropdownElement);
        if (dropdown) {
          dropdown.hide();
        }
      }
    });
  }
});

