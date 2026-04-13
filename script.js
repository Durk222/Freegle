function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme');
    
    // Determinamos el nuevo tema
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    
    // 1. Lo aplicamos visualmente
    body.setAttribute('data-theme', newTheme);
    
    // 2. Lo guardamos en la memoria del navegador
    localStorage.setItem('themePreference', newTheme);
}
