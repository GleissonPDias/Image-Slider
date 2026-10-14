import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SliderControls() {
  return (
    <div className="mt-8 flex items-center gap-3" role="group" aria-label="Controles do slider">
      <button type="button" aria-label="Imagem anterior"
        className="grid size-13 place-items-center rounded-2xl border border-violet-100 bg-white text-mauve shadow-sm">
        <ArrowLeft size={20} />
      </button>
      <button type="button" aria-label="Próxima imagem"
        className="grid size-13 place-items-center rounded-2xl bg-mauve text-white shadow-sm">
        <ArrowRight size={20} />
      </button>
      <span aria-live="polite" className="ml-auto text-sm font-bold text-mauve">03 / 05</span>
    </div>
  );
}