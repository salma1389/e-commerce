import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { oneproductGet } from '../../redux/actions/actionProduct';

const DetailProduct = () => {

     //reducer state
     const {product} = useSelector( state => state.productReducer);
    
    const dispatch = useDispatch();
    const {_id} = useParams();

    useEffect(() => {
      dispatch(oneproductGet(_id));
    }, [])
    
    return (
        <div>
            <Card  className="bg-dark text-white">
                <Card.Img src={product.avatar} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{product.nameproduct}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default DetailProduct