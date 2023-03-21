
import React, { useEffect, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
// import { useFormContext } from 'react-hook-form';
import '../index.css';
import { BsFillMicFill } from "react-icons/bs";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const startvoiceContext = async () => {
    const VoiceContext = window.AudioContext || window.webkitAudioContext;
    const voiceContext = new AudioContext();
    await voiceContext.audioWorklet.addModule('https://sdk.alan.app/js/alan_lib.js');
    return voiceContext;
};

const AlanContainer = (props) => {
    const BtnRef = useRef(null);
    // const formMethods = useFormContext()

    const [formName, setFormname] = useState("");
    const history = useHistory()

    useEffect(() => {
        startvoiceContext().then((voiceContext) => {
            alanBtn({
                key: '72df8a6ce3c672515c00887c814342202e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand: (commandData) => {
                    if (commandData.command === 'setName') {
                        // Update the form value of field
                        const set = setFormname(commandData.data);
                        <h1>   {set}     </h1>
                    }
    
                    if (commandData.command === 'setHome') {
                        history.push('/');
                    }
                    
                    if (commandData.command === 'setAbout') {
                        history.push('/about');
                    }
    
                    if (commandData.command === 'setGetResume') {
                        history.push('/GetResume');
                    }
    
                    if (commandData.command === 'setTemplate') {
                        history.push('/Choosetemplate');
                    }
    
                    if (commandData.command === 'setFillDetails') {
                        history.push('/Details');
                    }
    
                    if (commandData.command === 'setPreview') {
                        history.push('/preview');
                    }
    
                    if (commandData.command === 'setDownload') {
                        history.push('/Download');
                    }
                    if (commandData.command === 'setForm') {
                        history.push('/form');
                    }
    


                },
                soundLevel: BtnRef.current,
                voiceContext: voiceContext,
            });
        });
    }, []);

    const activateAlan = () => {
        const BtnInstance = alanBtn({
            key: '72df8a6ce3c672515c00887c814342202e956eca572e1d8b807a3e2338fdd0dc/stage',
            rootEl: BtnRef.current,
            onCommand: (commandData) => {
                if (commandData.command === 'setName') {
                    // Update the form value of field
                    const set = setFormname(commandData.data);
                    <h1>   {set}     </h1>
                }

                if (commandData.command === 'setHome') {
                    history.push('/');
                }
                
                if (commandData.command === 'setAbout') {
                    history.push('/about');
                }

                if (commandData.command === 'setGetResume') {
                    history.push('/GetResume');
                }

                if (commandData.command === 'setTemplate') {
                    history.push('/Choosetemplate');
                }

                if (commandData.command === 'setFillDetails') {
                    history.push('/Details');
                }

                if (commandData.command === 'setPreview') {
                    history.push('/preview');
                }

                if (commandData.command === 'setDownload') {
                    history.push('/Download');
                }
                if (commandData.command === 'setForm') {
                    history.push('/form');
                }


            }

        });
        BtnInstance.activate();

    };

    return (

        <>



            <div className='alan-btn-container'>
                <div ref={BtnRef} />
                <button className='Activebtn' onClick={activateAlan}> <BsFillMicFill /></button>
            </div></>
    );
};

export default withRouter(AlanContainer);