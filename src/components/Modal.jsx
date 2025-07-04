import React from 'react';

export default function Modal({ show, onClose, title, children, variant = 'info' }) { // Default variant to 'info' for a neutral look
  if (!show) {
    return null;
  }

  // Removed headerBgClass and buttonClass to use more neutral styles
  // Icon will be a simple info circle, or can be removed if preferred
  const iconClass = variant === 'success' ? 'fas fa-check-circle text-success' :
                    variant === 'danger' ? 'fas fa-times-circle text-danger' :
                    'fas fa-info-circle text-primary'; // Default info icon

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-3 shadow"> {/* Slightly less rounded, subtle shadow */}
            <div className="modal-header p-4 pb-3 border-bottom-0"> {/* Clean header, no background color */}
              <h5 className="modal-title fw-bold mb-0 fs-4 text-center w-100"> {/* Centered and slightly larger title */}
                <i className={`${iconClass} me-2`}></i> {/* Icon with subtle color based on variant */}
                {title}
              </h5>
              <button type="button" className="btn-close" onClick={onClose}></button> {/* Standard close button */}
            </div>

            <div className="modal-body p-4 pt-0 text-center"> {/* Centered body text */}
              {children}
            </div>

            <div className="modal-footer flex-column border-top-0"> {/* Footer for button, no border */}
              <button type="button" className="btn btn-outline-secondary w-100" onClick={onClose}> {/* Subtle button style */}
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
