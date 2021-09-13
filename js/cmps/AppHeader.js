export default {
  name: 'AppHeader',
  template: `
    <header class="app-header container flex align-center space-between">
      <h1>App</h1>
      <nav class="app-nav">
        <RouterLink url="/">Home</RouterLink> | 
        <RouterLink url="/about">About</RouterLink>
      </nav>
    </header>
  `
}