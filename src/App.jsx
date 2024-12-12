
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
/*
creare la pagina iniziale di un blog con un post inserito al suo interno. Assicuratevi di suddividere il layout in componenti appropriati.
Step per creare il progetto:
Creiamo un progetto React utilizzando vite npm create vite@latest .
Installiamo le dipendenze npm install
Lanciamo il server di sviluppo npm run dev
Creiamo una cartella components nella quale inseriremo i nostri componenti
BONUS:
Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules
Creiamo un array di posts e usiamo le props per popolare le card con i dati giusti (ogni card il suo oggetto post)
*/ 