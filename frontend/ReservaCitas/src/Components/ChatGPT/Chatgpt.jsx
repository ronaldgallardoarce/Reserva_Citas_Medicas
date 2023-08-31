import axios from "axios";
import { useEffect, useState } from "react";

const ChatGPT = () => {
    const [promptText, setPromptText] = useState({
        txtPrompt: [],
        push: '',
        response: '',
        spinner: false
    })
    const chargePrompt = (e) => {

        const property = e.target.name
        const value = e.target.value
        setPromptText({
            ...promptText,
            [property]: value
        })
    }
    const prompt = () => {
        setPromptText({
            ...promptText,
            spinner: true
        })
        const URL = "";
        const API_KEY = "";
        const HEADER = ({
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY,
            }
        })
        const PROMPT = `Hola te usare como un chatbot en mi web de diagnosticos medicos, te mandare un arreglo de sintomas:
         ${promptText.txtPrompt} lo que quiero es que me hagas un diagnostico y me respondas las posibles enfermdedades y
         la probabilidad de cada una, con este formato: ' Enfermedad: (tu prediccion), Probabilidad: (tu prediccion). 
         no quiero texto de confirmacion de entendimiento ni nada extra, solo la respuesta en el formato pasado pero con tu diagnostico.`;
        const BODY = JSON.stringify({
            model: "text-davinci-003",
            prompt: PROMPT,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
        axios.post(URL, BODY, HEADER)
            .then((response) => {
                setPromptText({
                    ...promptText,
                    response: response.data.choices[0].text,
                    spinner: false,
                    txtPrompt:[]
                })
            })
    }
    const handlePush = (e) => {
        e.preventDefault();

        if (promptText.push.trim() !== "") {
            setPromptText((prevState) => ({
                ...prevState,
                txtPrompt: [...prevState.txtPrompt, prevState.push],
                push: '' // Limpiar el campo de entrada después de agregar la cadena
            }));
        }
        console.log(promptText.txtPrompt)
    };
    useEffect(() => {
        console.log(promptText.txtPrompt);
    }, [promptText.txtPrompt]);
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handlePush} className="w-full max-w-sm">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="push">
                        Ingresar sintoma
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                           type="text" 
                           name="push" 
                           id="push" 
                           value={promptText.push} 
                           onChange={chargePrompt} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit">
                        Agregar
                    </button>
                </form>
                <br />
                {
                    promptText.txtPrompt.length > 0 ?
                        (
                            <div className="mt-4">
                                <p className="font-bold text-xl mb-2">Tus sintomas</p>
                                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    {
                                        promptText.txtPrompt && promptText.txtPrompt.map((s, index) => {
                                            return (
                                                <div key={index} className="mb-2">
                                                    <p className="text-gray-700 text-base">{s}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                        onClick={prompt} >
                                    Diagnosticar
                                </button>
                            </div>
                        ) : null
                }
    
                {
                    promptText.spinner ?
                        <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                            Cargando respuesta
                        </div> : null
                }
                {
                    promptText.response ?
                        <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                            <p>{promptText.response}</p>
                        </div> : null
                }
            </div>
        </div>
    );
    
}
  
export default ChatGPT;