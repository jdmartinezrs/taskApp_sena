import {TASKS_ICON, CLOSE_ICON} from "../../shared/components/icons.js"

function createNavigationLink({id,label,href,icon}){
    
return `<li>
<a class="app-sidebar__link" href="${href}">
${icon}<span class= "app-sidebar__label">${label}</span>
</a>
</li>`;
}

export function createAppSideBar(navigationItems) {
    

  const navigationLinks = navigationItems.map(createNavigationLink).join("")
  

  return `
    <div class="app-layout__backdrop" data-action="close-sidebar" aria-hidden="true"></div>
    <aside id="app-sidebar" class="app-sidebar" aria-label="Menú principal">
      <div class="app-sidebar__header">
        <div class="app-sidebar__brand">
          <p class="app-sidebar__title">Gestor de Tareas</p>
          <p class="app-sidebar__subtitle">Institucional SENA</p>
        </div>
        <button type="button" class="app-sidebar__close-button" data-action="close-sidebar" aria-label="Cerrar menú">${CLOSE_ICON}</button>
      </div>
      <nav aria-label="Secciones">
        <ul class="app-sidebar__list">
        ${navigationLinks}
        </ul>
      </nav>
    </aside>
  `.trim();
}