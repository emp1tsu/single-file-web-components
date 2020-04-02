window.loadComponent = (function() {
  function loadComponent(URL) {
    return fetch(URL).then(response => {
      return response.text();
    });
  }

  return loadComponent;
})();
