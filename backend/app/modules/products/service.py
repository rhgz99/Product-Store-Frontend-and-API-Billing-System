from . import data


def get_product():
    return data.products


def create_product(product_data):
    product = {
        "id": data.current_id,
        "product_name": product_data.get('product_name'),
        "price": product_data.get('price'),
    }
    data.products.append(product)
    data.current_id += 1

    return product
