import { Button , Stack} from '@mui/material';
import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { productGet, updateproduct } from '../../redux/actions/actionProduct';

const ProductsEdit = ({prod}) => {

  // const {product} = useSelector( state => state.productReducer);
  // console.log(prod)
    const [nameproduct,setNameproduct] = useState(prod.nameproduct)
    // const [avatar,setAvatar] = useState(product.avatar)

    const dispatch=useDispatch()
  const  handelOnSubmit=(e)=>{
        e.preventDefault();
        const edite={
            _id:prod._id, nameproduct:nameproduct 
        }
        dispatch(updateproduct(edite))
        dispatch(productGet())

        closeModal()
    }
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
  return (
    <div>
        <Button className='btn' variant="contained" onClick={openModal}>Edit </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form className='form' onSubmit={handelOnSubmit}>
              {/* <label >Edit the input</label>
              <input type="text" value={nameproduct} onChange={(e)=>setNameproduct(e.target.value)}/>
              <input type="text" name='image' value={avatar} onChange={(e)=>setAvatar(e.target.value)}/>

              <Stack direction="row" spacing={2}  justifyContent="center">
              <Button className='btn' variant="contained" type='submit' >Confirm </Button>
              <Button className='btn' variant="contained" onClick={closeModal}>Cancel </Button>
              </Stack> */}
        <label >Product Name</label>
        <input type="text" value={nameproduct}  onChange={(e) => setNameproduct(e.target.value)} />
        {/* <label >Product Poster</label>
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)}/> */}
    
        <div>
          <button type='submit'>Confirm</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
          </form>
           </Modal>
    </div>
  )
}

export default ProductsEdit