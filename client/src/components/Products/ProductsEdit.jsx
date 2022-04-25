import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { productGet, updateproduct } from "../../redux/actions/actionProduct";
import UpdateIcon from "@mui/icons-material/Update";
import { IconButton } from "@mui/material";

const ProductsEdit = ({ prod }) => {
  // console.log(prod)
  //state
  const [nameproduct, setNameproduct] = useState(prod.nameproduct);
  // console.log('1',prod.nameproduct)
  // const [image, setImage] = useState(prod.avatar);
  const dispatch = useDispatch();
  // console.log("id",prod._id);

  //handel upload
  // const fileSelectedHandler = (name) => (e) => {
  //     const value= name === "image" ? setImage(e.target.files[0]) : setNameproduct( e.target.value);
  // console.log("nameproduct",nameproduct);
  //  console.log("avatar",image);
  //  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let formData = new FormData();
    // formData.append("image", image);
    // formData.append("nameproduct", nameproduct);
    // console.log('2',prod.nameproduct)
    const editedProd = { _id: prod._id, nameproduct };
    // const res = await axios.put(`/products/api/product/${prod._id}`, formData);
    // console.log(res)

    dispatch(updateproduct(editedProd));
    dispatch(productGet());

    closeModal();
  };

  // modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");
  return (
    <div>
      <IconButton style={{"color":'green',"marginTop":"1vh","marginLeft":"100px"}} aria-label="delete" onClick={openModal}>
        <UpdateIcon />
      </IconButton>
      {/* <Button variant="primary" onClick={openModal}>
        UPDATE
      </Button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="product name"
              value={nameproduct}
              onChange={(e) => setNameproduct(e.target.value)}
            />
          </Form.Group>

          {/* uploadfile */}
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control type="file" onChange={fileSelectedHandler} />
                    </Form.Group> */}

          <div className="btn-add">
            <Button variant="secondary" onClick={() => closeModal()}>
              {" "}
              Cancel{" "}
            </Button>
            <Button variant="primary" type="submit">
              {" "}
              Add{" "}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductsEdit;
