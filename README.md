# web con carrito de compras 🙌 (Futuras Actualizaciones)

#### Pagina web con carrito de compras simple 😁

* Una web simple que te permite agregar productos a un carrito y suma el total de la compra.
* Podes descargar el comprobante de tu compra


#### Codigo
````bootstrap
<body>
    <main class="container mt-5">
        <div class="row text-center" id="botones">
            <article class="col-sm-4  mb-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Chocolate 🍫</h4>
                        <p class="lead">$300</p>
                        <button class="btn btn-primary" data-producto="Chocolate" data-precio="300" data-boton="agregar">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Galleta 🍪</h4>
                        <p class="lead">$100</p>
                        <button class="btn btn-primary" data-producto="Galleta" data-precio="100" data-boton="agregar">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Pan 🍞</h4>
                        <p class="lead">$200</p>
                        <button class="btn btn-primary" data-producto="Pan" data-precio="200" data-boton="agregar">Agregar</button>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <section class="container mt-3">
        <ul class="list-group" id="lista"></ul>
    </section>

    <footer id="footer" class="container mt-3">
        <template id="templateFooter">
            <div class="card">
                <div class="card-body d-flex justify-content-between">
                    <p class="lead mb-0">TOTAL: $<span class="total">200</span></p>
                    <a href="/Clase-09_DOM delegacion de eventos/Practica/formulario.html" class="btn btn-outline-primary">Finalizar Compra</a>
                </div>
            </div>
        </template>
    </footer>

    <template id="template">
        <li class="list-group-item d-flex justify-content-between align-items-center border bg-secondary">
            <div class="container d-flex align-items-center">
                <span class="badge bg-primary rounded-pill me-2">1</span>
                <span class="lead text-light">Producto</span>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="container">
                <p class="lead mb-0" id="precio">Total: $<span class="precio">300</span></p>
            </div>
            <div class="container d-flex justify-content-end">
                <button class="btn btn-success btn-sm me-2" data-boton="agregar">Agregar</button>
                <button class="btn btn-danger btn-sm" data-boton="quitar">Eliminar</button>
            </div>
        </li>
    </template>

    <script src="app.js"></script>
</body>
````