import requests

base_url = "http://localhost:3000/productos"

nuevo_producto = {
    "id": 1234567890123,
    "nombre": "Picsa",
    "precio": 27,
    "image": "picsa.png"
}

res = requests.post(base_url, json=nuevo_producto)
print("Crear:", res.status_code, res.json())

res = requests.get(base_url)
print("Listar:", res.status_code, res.json())

res = requests.get(f"{base_url}/1234567890123")
print("Obtener:", res.status_code, res.json())

res = requests.delete(f"{base_url}/1234567890123")
print("Eliminar:", res.status_code)
