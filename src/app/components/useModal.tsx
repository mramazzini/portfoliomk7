interface Props {
  children: React.ReactNode;
  id: string;
}
const useModal = ({ children, id }: Props) => {
  return {
    modal: (
      <dialog id={id} className="modal ">
        <div className="modal-box ">
          {children}
          <div className="modalwa-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    ),
    openModal: () => {
      const modal = document.getElementById(id) as HTMLDialogElement;
      if (!modal)
        console.error(
          "Error modal not found, make sure you add it to the page."
        );
      modal.showModal();
    },
  };
};

export default useModal;
