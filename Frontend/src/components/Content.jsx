import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.css'
import axios from 'axios';


const Content = () => { 
  const [products, setProducts] = useState([])
  const navigation = useNavigate()

  const getProducts = async() =>{
    const url ='https://proyecto-5-wheat.vercel.app/api/v1/products'
    const productos = await axios.get(url)
    setProducts(productos.data)
  }

  const handleClick= () => {
      navigation('/checkout');
    
  }

  useEffect(()=>{
    getProducts()
   },[]);
  
  
  return(
    <div className='conten'>
  <title>Suplementos para el Gimnasio</title>

  <h1 className='titulos'>Suplementos para el Gimnasio</h1>
  <div className='marketing'>
  <h4>
  "¿Quieres llevar tus entrenamientos al siguiente nivel?
  <br /> <br /> <br />
   En nuestra tienda de suplementos para el gimnasio, ofrecemos los mejores productos para ayudarte a alcanzar tus objetivos de fitness. <br /> <br /> <br />
    Desde creatina para aumentar tu fuerza y resistencia, hasta proteína whey para recuperar tus músculos después de un entrenamiento intenso, nuestros suplementos son los aliados perfectos para tu rutina de ejercicio. 
  </h4>
  <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cbum-1669971164.jpeg/" />
  </div>
	<h2 className='titulos'>Nuestros productos</h2>
	
  {
            products.map((pr) => (

      
  <CardGroup >
      <Card key={pr.id}>
        <Card.Img variant="top4" src="https://suplementosolimpicos.com/wp-content/uploads/2022/07/Fondos-productos-SOG-04.jpg" />
        <Card.Body>
          <Card.Title>{pr.name}</Card.Title>
          <Card.Title>Precio:{pr.price}$</Card.Title>
          <Card.Text>
          La creatina es un suplemento que se ha demostrado que aumenta la fuerza y la resistencia durante los entrenamientos. ¡Prueba la nuestra!
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={handleClick}>Agg al carrito</Button>
      </Card>
      <Card key={pr.id}>
        <Card.Img variant="top4" src="https://thumbs.dreamstime.com/b/kiev-ucrania-de-noviembre-frasco-pl%C3%A1stico-con-prote%C3%ADna-soluble-nutrici%C3%B3n-%C3%B3ptima-patr%C3%B3n-oro-suero-sobre-fondo-negro-164085285.jpg" />
        <Card.Body>
          <Card.Title>{pr.name}</Card.Title>
          <Card.Title>Precio:{pr.price}$</Card.Title>
          <Card.Text>
          Nuestra proteína whey es la mejor manera de recuperar tus músculos después de un entrenamiento intenso. ¡Prueba la nuestra!
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>Agg al carrito</Button>
        </Card.Body>
       
      </Card>
      <Card key={pr.id}>
        <Card.Img variant="top4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdWJawkkGvAcFm1GUeXlb4EFehr2L2hzyxw&usqp=CAU" />
        <Card.Body>
          <Card.Title>{pr.name}</Card.Title>
          <Card.Title>Precio:{pr.price}$</Card.Title>
          <Card.Text>
          Nuestros cinturones de gimnasio están diseñados para apoyar tu espalda y prevenir lesiones mientras levantas pesas. ¡Prueba el nuestro!
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>Agg al carrito</Button>
        </Card.Body>

      </Card>
    </CardGroup>  ))}

    <h4 className='titulos'>¡Gracias por elegir nuestros suplementos para el gimnasio!</h4>  
</div>
) }

export default Content