function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.body.className = theme;
}
setTheme('light'); // Try 'dark' for dark mode
