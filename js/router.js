//toda a lógica

export class Router {
  routes = {};
  //mapeamento da rota
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  //para não carregar a página e não ir para lugar nenhum
  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }
  //manipulação
  handle() {
    const pathname = window.location;
    const route = routes[pathname] || routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
