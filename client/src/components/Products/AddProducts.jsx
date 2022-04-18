import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
// import { useHistory} from 'react-router-dom';
import { addproduct, productGet } from '../../redux/actions/actionProduct';
// import StarRating from './StarRating';
// import './AddProducts.css'

const AddProducts = () => {

  const [nameproduct, setNameproduct] = useState("");
  const [avatar, setAvatar] = useState("");
  console.log(avatar)
  // const [image, setImage] = useState("");
  // const history = useHistory();
  // const [data, setData] = useState({
  //   name: "",
  //   image: "",
  // });
  const dispatch=useDispatch()
 
  //handel upload
  const fileSelectedHandler = async(e) => {
    //   setImage(e.target.files[0]);
    //   await !loading
    // console.log(image);

    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('image', file)
    // setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const  {data}= await axios.post('/upload', fd, config)

      setAvatar(data)
      // setUploading(false)
    } catch (error) {
      console.log(error)
      // setUploading(false)
    }

  }
  //handle submit
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('image', setAvatar(avatar.name))
    const newProduct = { nameproduct,avatar };
    dispatch(addproduct(newProduct));
    dispatch(productGet());
    closeModal();
  }

  // const handleChange = (name) => (e) => {
  //   const value = name === "image" ? e.target.files[0] : e.target.value;
  //   setData({ ...data, [name]: value });
  // };
  // const handleSubmit = async () => {
  //   try {
  //     let formData = new FormData();
  //     formData.append("image", data.image);
  //     formData.append("name", data.name);

  //     const res = await fetch(`http://localhost:4000//products`, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (res.ok) {
  //       setData({ name: "", image: "" });
  //       // history.replace("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  //Submit the newMovie
  // const handelSubmit=(e)=>{
  //   e.preventDefault();
  //   const newProductAdd={
  //     id:Math.random(),nameproduct,avatar
  //   }
  //   dispatch(addproduct(newProductAdd))
  //       dispatch(productGet())
  //   setNameproduct("")
  //   setAvatar("")
  //   closeModal()
  // }
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
      Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
  return <div className='addblock'>
<button onClick={openModal}>Add Product</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
        <label >Product Name</label>
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={nameproduct}
          onChange={(e) => setNameproduct(e.target.value)}
        />
        <label >Product Image</label>
        <Form.Control type="file" onChange={fileSelectedHandler} />
         {/* <input
          className="form-control"
          type="file"
          // accept="image/*"
          name="image"
          onChange={fileSelectedHandler("image")}
        /> */}
      
        {/* <label >Product Poster</label>
        <input type="text" value={avatar} onChange={(e)=>setAvatar(e.target.value)}/> */}
         {/* <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                placeholder='Enter image url'
                value={avatar}
                // onChange={(e) => setAvatar(e.target.value)}
              ></Form.Control>
              <Form.File
                // id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
          
            </Form.Group> */}

        <div>
          <button type='submit'>Confirm</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
      </Modal>
      
  </div>;
};

export default AddProducts;
