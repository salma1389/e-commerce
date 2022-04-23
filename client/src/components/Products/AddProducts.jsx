import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct, productGet } from '../../redux/actions/actionProduct';




function AddProducts() {
  const {loading} = useSelector( state => state.productReducer);

  const [nameproduct, setNameproduct] = useState("");
  const [image, setImage] = useState("");


  //handel upload
  const fileSelectedHandler = (name) => (e) => {
   const value= name === "image" ? setImage(e.target.files[0]) : setNameproduct( e.target.value);  
    }

    // console.log("nameproduct",nameproduct);
    // console.log("avatar",image);

  //handle submit
  const dispatch = useDispatch();
  const handleSubmit = async(e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", image);
    formData.append("nameproduct", nameproduct);

    await dispatch(addproduct(formData));
   setImage("")
   setNameproduct("")
   closeModal();
      await dispatch(productGet());
    
  }
  // modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#root');

  return (
    <div>
      <Button onClick={openModal}>Add Product</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form encType="multipart/form-data" onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="text" placeholder='product name' value={nameproduct} onChange={fileSelectedHandler('name')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          </Form.Group>
          {/* uploadfile */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="file"  name="image" onChange={fileSelectedHandler('image')} />
          </Form.Group>

          <div className='btn-add' >
            <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
            <Button variant="primary" type="submit" > Add </Button>
          </div>
        </Form>
      </Modal>
      
    </div>
  );
}

export default AddProducts;
