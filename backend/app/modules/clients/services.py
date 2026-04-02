from . import data


def get_client():
    return data.clients


def create_client(client_data):
    client = {
        "id": data.current_id,
        "name": client_data.get("name"),
        "email": client_data.get("email"),
    }
    data.clients.append(client)
    data.current_id += 1

    return client
