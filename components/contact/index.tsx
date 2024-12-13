import React from 'react';
import { Modal, Input, Textarea, Button, Text } from '@nextui-org/react';

const ContactUsModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Bisa diubah ke API call
    closeHandler();
  };

  return (
    <div>
      <Button auto flat onClick={handler}>
        Hubungi Kami
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Hubungi Kami
          </Text>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              clearable
              bordered
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              bordered
              fullWidth
              label="Pesan"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Batal
            </Button>
            <Button auto type="submit">
              Kirim
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ContactUsModal;
