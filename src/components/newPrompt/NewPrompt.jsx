import { useEffect, useRef, useState } from 'react';
import './newPrompt.css'
import Upload from '../upload/Upload';
import { IKImage } from 'imagekitio-react';
import model from "../../lib/gemini"
import Markdown from 'react-markdown';
import axiosInstance from '../../api/axiosInstance';

const NewPrompt = () => {
    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}
    })
    const endRef = useRef();

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");



    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello, I have 2 dogs in my house." }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
        generationConfig: {
            //   maxOutputTokens: 100,
        },
    });



    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, [question, answer, img.dbData]);

    const add = async (text, isInitial) => {
        if (!isInitial) setQuestion(text);

        try {
            const result = await chat.sendMessageStream(
                Object.entries(img.aiData).length ? [img.aiData, text] : [text]
            );
            let accumulatedText = "";
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                accumulatedText += chunkText;
                setAnswer(accumulatedText);
            }
        } catch (err) {
            console.log(err);
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) {
            return;
        }
        add(text);

    }

    return (
        <>
            {img.isLoading && <div className="">Loading...</div>}
            {
                img.dbData?.filePath && (
                    <IKImage
                        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                        path={img.dbData?.filePath}
                        width="280"
                        transformation={[{ width: 280 }]}
                    />
                )
            }

            {question && <div className="message user">{question}</div>}
            {answer && (
                <div className="message">
                    <Markdown>{answer}</Markdown>
                </div>
            )}

            <div className='endChat' ref={endRef}></div>
            <form className="newForm" onSubmit={handleSubmit} >
                <Upload setImg={setImg} />
                <input id="file" type="file" multiple={false} hidden />
                <input autoComplete='off' type="text" name="text" placeholder="Ask anything..." />
                <button type='submit'>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    )
}

export default NewPrompt