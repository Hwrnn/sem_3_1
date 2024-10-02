function canBuyProduct() {
    let precio_original = 1500;
    let descuento = 0.25;
    let dinero_disponible = 1150;
    
    let precio_con_descuento = precio_original * (1 - descuento);
    
    if (dinero_disponible >= precio_con_descuento) {
      console.log("Puedes comprar el producto.");
    } else {
      console.log("No puedes comprar el producto.");
    }

}