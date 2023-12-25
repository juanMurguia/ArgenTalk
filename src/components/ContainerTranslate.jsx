import React, {useState, useEffect} from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import clipboardCopy from 'clipboard-copy';
import 'animate.css/animate.css';


const genAI = new GoogleGenerativeAI('AIzaSyBX0vgXYU6kJ_zxt7sSK1Lq9nXr4kpHrNs');



const ContainerTranslate = () => {

    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [textoInput, setTextoInput] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [cargando, setCargando] = useState(false);

    let nuevoContenido = ''

    useEffect(() => {
      let timeoutId;
  
      if (mostrarPopup) {
        timeoutId = setTimeout(() => {
          setMostrarPopup(false);
        }, 3000); // 3000 milisegundos = 3 segundos
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [mostrarPopup]);

    const handleChange = (e) => {
        setTextoInput(e.target.value);
      };

    async function runChat(e) {
        e.preventDefault();
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      
        const prompt = `Convierte el siguiente texto a un tono coloquial argentino asegurándote de que la traducción tenga una longitud aproximada a la del texto original:
        Por ejemplo, si el texto original es "Hola, ¿cómo estás?", la traducción podría ser "¿Qué onda, cómo venís?"
        
        Texto: " ${textoInput} "` 

        setCargando(true);
        setTimeout(() => {
          setCargando(false);
        }, 2000);


        const result = await model.generateContent(prompt);
        const response = await result.response;
        nuevoContenido = response.text();

           
        setRespuesta(nuevoContenido)
        console.log('Texto ingresado:', textoInput);
        console.log(nuevoContenido);
        console.log(respuesta)
      }

      const copiarTexto = () => {
        clipboardCopy(respuesta);
        setMostrarPopup(true);
      }
    
      

  return (
    <div className="bg-slate-800 relative flex justify-center items-center flex-col gap-8 py-6 px-4 md:p-24  w-full h-full">

      {mostrarPopup && (
        <div className="popup animate__animated animate__fadeInUp absolute bg-slate-900 z-40 top-10 border border-slate-500 rounded-md p-3 drop-shadow-lg pointer-events-none">
          <p className='text-slate-300'>Traducción copiada</p>
        </div>
      )}

        <div className='flex md:flex-row flex-col gap-4 w-full h-full'>
            <form onSubmit={runChat} className='w-full h-full'>
                <label className='text-gray-400'>
                
                <textarea value={textoInput} placeholder='Ingresá tu texto acá' onChange={handleChange} type="text" className="bg-slate-800 text-slate-100 mt-1 block w-full p-8 border border-slate-500 rounded-md text-2xl placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded-md w-full h-full text-left text-wrap
            "/>
                </label>
            </form>

        
          <div id="respuesta" className="relative w-full h-full text-2xl text-slate-100 text-left p-8 bg-slate-800 rounded-md border border-slate-500
          ">
            <button onClick={copiarTexto} className="copy-button absolute right-0 top-0 p-4 opacity-40 hover:opacity-60"> <FontAwesomeIcon icon={faCopy} /> </button>
            <p>{respuesta}</p>
       
       </div>
      

        </div>

        <button  disabled={cargando} onChange={handleChange} onClick={runChat} className=" drop-shadow-lg rounded-full

px-8 py-2 text-slate-100 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 font-semibold" type="submit" value="Submit" > 

{cargando && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      {cargando ? 'Traduciendo...' : 'Argentinizar'}
</button>




    </div>



    
    

  )
}

export default ContainerTranslate