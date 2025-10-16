# 🌸 Proyecto: Consumo de API Studio Ghibli

## 📖 Descripción general
Este proyecto consiste en una aplicación web que consume la **API pública de Studio Ghibli** para mostrar información sobre las películas del estudio.  
Fue desarrollada utilizando **HTML, CSS y JavaScript puro (sin frameworks)**, con el objetivo de aplicar los conceptos básicos de consumo de APIs, manipulación del DOM, y almacenamiento local (`localStorage`).

---

## 🎯 Objetivo del proyecto
Implementar una interfaz sencilla que permita:
- Consultar datos reales desde una API pública.
- Mostrar una lista de elementos (películas).
- Visualizar el detalle de cada elemento.
- Aplicar filtros, búsquedas y favoritos.
- Cumplir con los parámetros solicitados por el docente.

---

## 🧩 Parámetros cumplidos

| Parámetro | Descripción | Estado |
|------------|--------------|--------|
| **Menú** | Barra superior con botones (Inicio, Info, Filtro, Buscador y Favoritos). | ✅ |
| **Lista de elementos** | Muestra todas las películas obtenidas de la API. | ✅ |
| **Filtro** | Permite filtrar películas por director. | ✅ |
| **Buscador** | Busca películas por nombre en tiempo real. | ✅ |
| **Detalle del elemento** | Muestra imagen, descripción, año y botones de acción. | ✅ |
| **Favoritos** | Guarda películas en `localStorage` y permite verlas luego. | ✅ |
| **Pestaña original** | Botón “Inicio” que regresa a la lista completa. | ✅ |
| **Página informativa** | Sección con información sobre Studio Ghibli. | ✅ |
| **Objeto compartido** | Usa `navigator.share()` para compartir el detalle de una película. | ✅ |

---

## 🔗 API utilizada
**Base URL:** `https://ghibliapi.vercel.app`

**Endpoint principal:**  
