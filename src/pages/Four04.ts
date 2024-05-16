class Four04 {
  render() {
    const container = document.createElement("div");
    container.className = "container d-flex flex-column mt-5 align-items-center";
    container.innerHTML = `
      <h1 >404</h1>
      <h2 >Страница не найдена</h1>
    `;
    return container;
  }
}

export default Four04;
