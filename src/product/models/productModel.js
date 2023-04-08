class ProductModel {
  constructor(id, clientName, orderDate, deliveryDate, status) {
    this.id = id;
    this.clientName = clientName;
    this.orderDate = orderDate;
    this.deliveryDate = deliveryDate;
    this.status = status;
  }

  static fromJson(json) {
    return new ProductModel(
      json.id,
      json.clientName,
      json.orderDate,
      json.deliveryDate,
      json.status
    );
  }
}

export default ProductModel;
