const config =  {
  "title": "My App",
  "description": "Created by Aviv Issachar",
  "image": "",
  "url": ""
}

for (let key in config) {
  const meta = document.createElement('meta');
  meta.property = `og:${key}`;
  meta.content = config[key];
  document.head.appendChild(meta);
}