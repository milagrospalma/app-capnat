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
    alert(`Bienvenido, ${email}!`);
    loginForm.reset();
    showView("view-home");
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
    alert(`Cuenta creada para ${name}.`);
    signupForm.reset();
    showView("view-login");
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

// Camera flow
const cameraShot = document.getElementById("camera-shot");
if (cameraShot) {
  cameraShot.addEventListener("click", (e) => {
    e.preventDefault();
    showOverlay("dialog-recognition");
  });
}

const btnCaptureAgain = document.getElementById("btn-capture-again");
if (btnCaptureAgain) {
  btnCaptureAgain.addEventListener("click", (e) => {
    e.preventDefault();
    closeOverlays();
    showView("view-camera");
  });
}

const btnSaveFromRec = document.getElementById("btn-save-from-rec");
if (btnSaveFromRec) {
  btnSaveFromRec.addEventListener("click", (e) => {
    e.preventDefault();
    closeOverlays();
    showOverlay("dialog-save");
  });
}

const btnSaveConfirm = document.getElementById("btn-save-confirm");
if (btnSaveConfirm) {
  btnSaveConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    closeOverlays();
    const newPin = document.getElementById("pin-new");
    if (newPin) newPin.classList.remove("hidden");
    showView("view-home");
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

