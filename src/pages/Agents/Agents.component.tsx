import Layout from "../../components/Layout/Layout.component";
import { Button } from "../../components/ui-elements/Button/Button.component";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/ui-elements/Modal/Modal.component";

function Agents() {
  const [isOpen, setIsOpen, toggleModal] = useModal(false);

  return (
    <Layout>
      <h1>Agents page</h1>

      <Button onClick={toggleModal}>ayo</Button>
      <Button primary onClick={toggleModal}>
        ayo
      </Button>
      <Modal title="Add agent" isOpen={isOpen} onClose={setIsOpen}>
        Test
      </Modal>
    </Layout>
  );
}

export default Agents;
