import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SliderControls({ index, count, onPrevious, onNext }) {
  return (
    <div className="mt-8 flex items-center gap-3" role="group" aria-label="Controles do slider">
      <button type="button" onClick={onPrevious} aria-label="Imagem anterior"
        className="grid size-13 cursor-pointer place-items-center rounded-2xl border border-violet-100 bg-white text-mauve shadow-sm">
        <ArrowLeft size={20} />
      </button>
      <button type="button" onClick={onNext} aria-label="Próxima imagem"
        className="grid size-13 cursor-pointer place-items-center rounded-2xl bg-mauve text-white shadow-sm">
        <ArrowRight size={20} />
      </button>
      <span aria-live="polite" className="ml-auto text-sm font-bold tabular-nums text-mauve">
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </span>
    </div>
  );
}