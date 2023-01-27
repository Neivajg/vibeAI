import React from 'react'
import marcelo from '../assets/FullStack/Marcelo.png'
import genesis from '../assets/Data/Genesis.png'
import guillermo from '../assets/Data/Guillermo.png'
import dani from '../assets/FullStack/Dani.jpg'
import "../styles/aboutUs.css"

const AboutUs = () => {


  return (
<>
   
    <h2 className='titulos'>Full Stack</h2>
    <div className='containerCards'>
     
      <div className="card">
        <div className="img">
          <img src={dani}  alt='Dani Valero'></img>
        </div>
        <span> Dani Valero</span>
        <a href='https://www.linkedin.com/in/daniel-valero-b69744200/' target="_blank"> <button  >Linkedin</button></a>
      </div>
      

      <div className="card">
        <div className="img">
          <img src={marcelo}  alt='Marcelo Velasco'></img>
        </div>
        <span> Marcelo Velasco</span>
        <a href='https://www.linkedin.com/in/marcelovelasco/' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div className="card">
        <div className="img">
          <img src={marcelo}  alt='Neiva Jiménez'></img>
        </div>
        <span> Neiva Jiménez</span>
        <a href='https://www.linkedin.com/in/neiva-jim%C3%A9nez-gonz%C3%A1lez' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div  className="card">
        <div className="img">
          <img src={marcelo}  alt=' Rafa Cabezas'></img>
        </div>
        <span> Rafa Cabezas</span>
        <a href='https://www.linkedin.com/in/rafael-cabezas-aranda-398439249/' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div  className="card">
        <div className="img">
          <img src={marcelo}  alt='Rubén Ruiz'></img>
        </div>
        <span> Rubén Ruiz</span>
        <a href='' target="_blank"> <button  >Linkedin</button></a>
      </div>

    </div>
   

       <h2 className='titulos'>Data Science</h2>
    <div  className='containerCards'>
       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='Antonio Ambros'></img>
         </div>
         <span> Antonio Ambrosio</span>
         <a href='' target="_blank"> <button  >Linkedin</button></a>
       </div>

       <div className="card">
         <div className="img">
           <img src={genesis}  alt='Génesis Rojas'></img>
         </div>
         <span> Génesis Rojas </span>
         <a href='https://www.linkedin.com/in/genesisrojas/' target="_blank"> <button  >Linkedin</button></a>
       </div>

       <div className="card">
         <div className="img">
           <img src={guillermo}  alt='Guillermo Martín'></img>
         </div>
         <span> Guillermo Martín</span>
         <a href='https://www.linkedin.com/in/guillermoordaz/' target="_blank"> <button  >Linkedin</button></a>
       </div>


       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='María de los Ángeles Naranjo'></img>
         </div>
         <span> María de los Ángeles Naranjo</span>
         <a href='https://www.linkedin.com/in/mar%C3%ADa-de-los-%C3%A1ngeles-naranjo-mu%C3%B1oz-484535188/' target="_blank"> <button  >Linkedin</button></a>
       </div>

   
     </div>
     </>
  );
};

export default AboutUs;