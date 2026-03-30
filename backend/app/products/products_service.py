from . import products_data


def get_product():
    return products_data.products


def create_product(data):
    product = {
        "id": products_data.current_id,
        "product_name": data.get('product_name'),
        "price": data.get('price'),
    }
    products_data.products.append(product)
    products_data.current_id += 1

    return product
