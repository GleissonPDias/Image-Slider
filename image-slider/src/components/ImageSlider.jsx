import { useEffect, useState } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

const rotations = [-10, 7, -5, 9, -8];

export default function ImageSlider() {
  const [index, setIndex] = useState(2);
  const active = slides[index];
  const next = () => setIndex(current => (current + 1) % slides.length);
  const previous = () => setIndex(current => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section aria-label="Galeria da vida selvagem" aria-roledescription="carousel" className="w-full min-w-0">
      <p className="mb-5 text-xs font-bold tracking-[.18em] text-violet-600">
        EM DESTAQUE / {active.badge}
      </p>
      <div className="relative aspect-[1.17] rounded-[28px] bg-violet-100 p-6">
        {slides.map((item, i) => (
          <img key={item.id} src={item.image} alt={item.alt} aria-hidden={i !== index}
            className={`absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-3xl object-cover shadow-2xl transition-all duration-500 ease-out motion-reduce:transition-none ${i === index ? 'z-10 scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
            style={{ transform: i === index ? 'rotate(0deg)' : `rotate(${rotations[i]}deg)` }}
          />
        ))}
      </div>
      <div className="mt-7 min-h-28" aria-live="polite" aria-atomic="true">
        <h2 className="text-3xl font-bold">{active.animal}</h2>
        <p className="mt-2 font-medium text-mauve">{active.summary}</p>
        <p className="mt-3 text-base leading-relaxed text-slate-500">{active.description}</p>
      </div>
      <SliderControls index={index} count={slides.length}
        onPrevious={previous} onNext={next} onSelect={setIndex} />
    </section>
  );
}