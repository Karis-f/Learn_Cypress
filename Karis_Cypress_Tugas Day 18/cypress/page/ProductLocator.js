// cypress/page/ProductLocator.js
class ProductLocator {
    getProductLink() {
        return ':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link';
    }
}

export default new ProductLocator();