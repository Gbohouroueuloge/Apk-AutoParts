import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  size = "w-96",
  style
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Empêche le scroll 
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Utilisation d'un Portal pour injecter le modal au sommet du DOM
  return ReactDOM.createPortal(
    <div 
      className="modal open flex items-center justify-center bg-black/50" 
      onClick={onClose} // Fermer en cliquant à l'extérieur
    >
      <div 
        className={`modal-content relative top-0 ${size} ${style?.content ? style?.content : ""}`} 
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dedans
      >
        {/* Header  */}
        <div className={`modal-header ${style?.header ? style?.header : ""}`}>
          <h3 className="modal-title">{title}</h3>
          <button onClick={onClose} className="btn-close">
            <X />
          </button>
        </div>
        
        {/* Body  */}
        <div className={`modal-body ${style?.body ? style?.body : ""}`}>
          {children}
        </div>
        
        {/* Footer  */}
        {footer && (
          <div className={`modal-footer ${style?.footer ? style?.footer : ""}`}>
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;