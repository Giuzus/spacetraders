import { useState } from "react";

export const useModal = (
  initialState = false
): [boolean, (modalOpen: boolean) => void, () => void] => {
  const [modalOpen, setModalOpen] = useState(initialState);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};
