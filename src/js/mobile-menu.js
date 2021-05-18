
;(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")
    const mobileNavList = document.querySelector('[data-menu-list]');
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
      menuBtnRef.classList.toggle("is-open")
      menuBtnRef.setAttribute("aria-expanded", !expanded)
      mobileMenuRef.classList.toggle("is-open")
    })
    mobileNavList.addEventListener("click", () => {
      const expanded = mobileNavList.getAttribute("aria-expanded") === "true" || false
      mobileMenuRef.classList.toggle('is-open');
      mobileNavList.setAttribute("aria-expanded", !expanded)
      menuBtnRef.classList.toggle('is-open');
    })
  })()