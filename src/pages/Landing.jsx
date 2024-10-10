import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music.gif'
import Card from 'react-bootstrap/Card';
import Manage1 from '../assets/manage1.png'
import Manage2 from '../assets/manage2.png'
import Manage3 from '../assets/manage3.png'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
     {/* landing head */}
     <div className="row align-items-center">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem repellat
          fuga inventore corrupti ratione labore id, itaque rerum quos modi dolorem veritatis
          earum aut laudantium unde voluptatum provident alias. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nobis est fugiat sit, nemo omnis error eum magni 
          labore aspernatur esse, quo sed molestiae magnam atque tempora, deleniti voluptatum unde quas!
        </p>
        <Link to={'/home'} className='btn btn-info'>Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img src={LandingImg} alt="" className='img-fluid ms-5'/>
      </div>
     </div>
     {/* features */}
     <div className='my-5'>
      <h3 className='text-center'>Features</h3>
      <div className="row align-items-center mt-5">
        <div className="col-lg-4">
        <Card className='p-2' style={{ width: '20rem', marginLeft:'15px'}}>
         <Card.Img height={'250px'} variant="top" src={Manage1} />
          <Card.Body>
           <Card.Title>Managing Videos</Card.Title>
           <Card.Text style={{textAlign: 'justify'}}>
            Users can upload, view and remove videos
           </Card.Text>
         </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4">
        <Card className='p-2' style={{ width: '20rem', marginLeft:'15px' }}>
         <Card.Img height={'250px'} variant="top" src={Manage2} />
          <Card.Body>
           <Card.Title>Categorise Videos</Card.Title>
           <Card.Text style={{textAlign: 'justify'}}>
            Users can categorise videos by drag and drop feature
           </Card.Text>
         </Card.Body>
        </Card>
        </div>
        <div className="col-lg-4">
        <Card className='p-2' style={{ width: '20rem', marginLeft:'15px' }}>
         <Card.Img height={'250px'} variant="top" src={Manage3} />
          <Card.Body>
           <Card.Title>Managing History</Card.Title>
           <Card.Text style={{textAlign: 'justify'}}>
            Users can manage the watch history of all videos
           </Card.Text>
         </Card.Body>
        </Card>
        </div>
      </div>
     </div>
     {/* youtube */}
     <div className="my-5 row align-items-center border rounded p-5">
      <div className="col-lg-5">
        <h3 className="text-warning">Simple, Fast and Powerful</h3>
       <p style={{textAlign:'justify'}}>
          <span className='fs-5'>Plan Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde expedita atque commodi qui voluptatibus eligendi assumenda maiores
       </p>

       <p style={{textAlign:'justify'}}>
          <span className='fs-5'>Categorise Videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde expedita atque commodi qui voluptatibus eligendi assumenda maiores
       </p>

       <p style={{textAlign:'justify'}}>
          <span className='fs-5'>Managing History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde expedita atque commodi qui voluptatibus eligendi assumenda maiores
       </p>


      </div>
      <div className="col"></div>
      <div className="col-lg-6">
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/_hhcA0-8Dt8" title="JAM | Final Part | Karikku | Comedy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      </div>
     </div>
    </div>
  )
}

export default Landing