from . import client_data


def get_client():
    return client_data.clients


def create_client(data):
    client = {
        "id": client_data.current_id,
        "name": data.get("name"),
        "email": data.get("email"),
    }

    client_data.clients.append(client)
    client_data.current_id += 1

    return client
