import SliderControls from './SliderControls.jsx';
export default function ImageSlider() {
  return (
    <section aria-label="Galeria da vida selvagem">
      <img src="/images/panda.jpg" alt="Pandas em seu habitat" />
      <h2>Panda-gigante</h2>
      <p>Uma das espécies mais carismáticas da China.</p>
      <SliderControls />
    </section>
  );
}