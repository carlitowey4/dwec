import data from './products.json';

class Price {
  constructor(priceData) {
    this.currency = priceData.currency;
    this.currentPrice = priceData.current_price;
  }

  toHTML() {
    return `
    <p>price: ${this.currentPrice} ${this.currency}</p>
    `;
  }
}

class Review {
  constructor(reviewData) {
    this.rating = reviewData.rating;
    this.totalReviews = reviewData.total_reviews;
  }
  toHTML() {
    return `
    <p>rating: ${this.rating}</p>
    <p>totalReviews: ${this.totalReviews}</p>
    `;
  }
}

class Product {
  constructor(productData) {
    this.price = new Price(productData.price);
    this.review = new Review(productData.reviews);
    this.score = productData.score;
    this.productName = productData.title;
    this.imageUrl = productData.thumbnail;
    this.productUrl = productData.url;
  }

  toHTML() {
    return `
      <div class="product">
        <p>nameProduct: ${this.productName}</p>
        <p>urlProduct: ${this.productUrl}</p>
        <p>urlImage: ${this.imageUrl}</p>
        <p>score: ${this.score}</p>
        ${this.price.toHTML()}
        ${this.review.toHTML()}
      </div>
    `;
  }
}

// Crear una lista de objetos de productos
const products = data.products.map(productData => new Product(productData));

// Ejemplo de cómo acceder a los datos de un producto específico
const primerProducto = products[0];
console.log("Moneda:", primerProducto.price.currency);
console.log("Precio Actual:", primerProducto.price.currentPrice);
console.log("Valoración:", primerProducto.review.rating);
console.log("Número de Revisiones:", primerProducto.review.totalReviews);
console.log("Puntuación:", primerProducto.score);
console.log("Nombre del Producto:", primerProducto.productName);
console.log("URL de la Imagen:", primerProducto.imageUrl);
console.log("URL del Producto:", primerProducto.productUrl);

const productosContainer = document.getElementById('container-producto');


const primerProductoHTML = primerProducto.toHTML();
productosContainer.innerHTML = primerProductoHTML;