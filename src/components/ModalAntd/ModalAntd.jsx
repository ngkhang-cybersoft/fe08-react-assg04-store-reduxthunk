import { Modal } from 'antd';

const ModalAntd = ({ isOpen, title = 'Edit Store', handleModal, children }) => {
  return (
    <>
      <Modal
        title={title}
        style={{
          top: 20,
        }}
        destroyOnClose
        open={isOpen}
        footer={null}
        onCancel={() => handleModal(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalAntd;
