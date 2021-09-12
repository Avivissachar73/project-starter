const config =  {
  "title": "My App",
  "description": "Created by Aviv Issachar",
  "image": "https://s.abcnews.com/images/Lifestyle/ht_pudding_the_fox_03_mt_140821_4x3t_608.jpg",
  "url": ""
}

for (let key in config) {
  const meta = document.createElement('meta');
  meta.property = `og:${key}`;
  meta.content = config[key];
  document.head.appendChild(meta);
}