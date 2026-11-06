import ModalFooter from "./components/ModalFooter";
import ModalHeader from "./components/ModalHeader";
import useToggle from "../../hooks/useToggle";

const Modal = ({
  Triger,
  children,
  title,
  mainBtn,
  onSubmit,
  onClose,
  onOpen,
}) => {
  const [isOpen, toggle] = useToggle(false);
  const openModal = () => {
    onOpen?.();
    toggle();
  };
  const closeModal = () => {
    onClose?.();
    toggle();
  };

  return (
    <>
      <div onClick={openModal}>{Triger}</div>
      {isOpen && (
        <div
          id="modal-container"
          className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center bg-black/10 p-4 backdrop-blur-[2px]`}
        >
          <div dir="rtl" className="neu-card w-fit max-w-md">
            <ModalHeader onClose={closeModal} title={title} />
            {children}
            <ModalFooter
              onClose={closeModal}
              mainBtn={mainBtn}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
