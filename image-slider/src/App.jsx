export default function App() {
  return (
    <div>
      <header>
        <strong>WILD / STORIES</strong>
        <nav aria-label="Navegação principal">
          <span>EXPLORAR</span> · <span>SOBRE</span>
        </nav>
      </header>

      <main>
        <section aria-label="Apresentação">
          <small>EXPLORAÇÃO • VIDA SELVAGEM</small>
          <h1>A natureza em cada detalhe.</h1>
          <p>
            Descubra espécies extraordinárias em uma
            experiência visual interativa.
          </p>
        </section>

        <section aria-label="Galeria da vida selvagem">
          <p>EM DESTAQUE / PANDA-GIGANTE</p>
          <img
            src="/images/image-3.jpg"
            alt="Pandas descansando em seu habitat"
            width="460"
          />
          <h2>Panda-gigante</h2>
          <p>Uma das espécies mais carismáticas da China.</p>
          <button type="button">← Anterior</button>
          <button type="button">Próximo →</button>
          <p>03 / 05</p>
        </section>
      </main>

      <footer>REACT • TAILWIND CSS • JAVASCRIPT</footer>
    </div>
  );
}