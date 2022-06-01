const template = document.querySelector("#template");
const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const botones = document.querySelector("#botones");
const templateFooter = document.querySelector('#templateFooter');
const footer = document.querySelector("#footer");


let carrito = [];

document.addEventListener("click", (e) => {
    
    if(e.target.matches(".card button")){

        agregarCarrito(e);
    }

    if(e.target.matches(".list-group-item .btn-success")){
        btnAgregar(e);
    }

    if(e.target.matches(".list-group-item .btn-danger")){
        btnEliminar(e);
    }
});

const agregarCarrito = (e) => {
    
    const producto = {
        nombre: e.target.dataset.producto,
        id: e.target.dataset.producto,
        precio: parseInt(e.target.dataset.precio),
        cantidad: 1,
    };
    
    const indice = carrito.findIndex((item) => item.id === producto.id);
    
    if(indice === -1){
        
        carrito.push(producto);
        
    }else{
        //distinto de bluuweb
        carrito[indice].cantidad++;
    }
    
    pintarCarrito(carrito);
};


const pintarCarrito = () => {
    
    lista.textContent = "";
    
    carrito.forEach((item) => {
        
        const clone = template.content.cloneNode(true);
        
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector(".precio").textContent = item.precio * item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        
        fragment.appendChild(clone);
        
    });
    
    lista.appendChild(fragment);
    
    pintarFooter();
    
};


const pintarFooter = () => {
    footer.textContent = "";
    
    const total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.precio * valorActual.cantidad, 0); 
    
    const cloneFooter = templateFooter.content.cloneNode(true);
    
    cloneFooter.querySelector("p span").textContent = total
    
    fragment.appendChild(cloneFooter);
    
    footer.appendChild(fragment);
}

const btnAgregar = (e) => {
    
    console.log(e.target.dataset.id);
    
    carrito = carrito.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        
        return item;
    });
    
    pintarCarrito();
};

const btnEliminar = (e) => {
    
    carrito = carrito.filter((item) => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad--;
                
                if(item.cantidad === 0) return;
                return item;
            }
        }else{
            return item;
        }
    });
    
    pintarCarrito();
    
};



