# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

E’ arrivato il momento di mettere insieme tutti i concetti appresi :arrossire:
Partendo dall'esercizio precedente, integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
Al caricamento dell'applicazione, sfruttando l'hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella tabella.
Durante il submit del form, assicuriamoci che questi dati vengano inviati al backend e correttamente salvati.
BONUS:
Implementare la funzionalità di cancellazione
