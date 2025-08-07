# 🐾 Proyecto de Pruebas Automatizadas con Cypress

Este repositorio contiene pruebas automatizadas para la aplicación utilizando **Cypress**.

---

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Git](https://git-scm.com/)
- Conexión a internet para instalar dependencias

---

## ⚙️ Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/SantiRexKing/Dualboot---Assement.git
   cd Dualboot---Assement
````

2. Instala las dependencias:

   ```bash
   npm install
   ```

---

## 🧪 Cómo ejecutar las pruebas

### 🖥️ Abrir la interfaz gráfica de Cypress

```bash
npx cypress open
```

Esto abrirá la interfaz donde podrás seleccionar y ejecutar las pruebas manualmente.

---

### ⚡ Ejecutar pruebas en modo headless (sin interfaz)

```bash
npx cypress run
```

Ejecuta todas las pruebas y muestra los resultados en la consola.

---

## 📁 Estructura del proyecto

```
/cypress/integration/    # Casos de prueba
/cypress/support/        # Archivos de soporte y configuración
cypress.json             # Configuración general de Cypress
```

---

## 📝 Notas

* Asegúrate de tener el entorno de prueba configurado y accesible si las pruebas requieren servicios externos.
* Para dudas o problemas, abre un [issue](https://github.com/SantiRexKing/Dualboot---Assement/issues) en este repositorio.

