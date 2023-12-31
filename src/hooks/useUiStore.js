import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onOpenModal } from "../store";

export const useUiStore = () => {
  const { isModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const startOpenModal = () => dispatch(onOpenModal());
  const startCloseModal = () => dispatch(onCloseModal());

  return {
    // props
    isModalOpen,

    // methods
    startOpenModal,
    startCloseModal,
  };
};
