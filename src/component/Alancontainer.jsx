
import React, { useEffect, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { withRouter } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import '../index.css';
import { BsFillMicFill } from "react-icons/bs";

const startvoiceContext = async () => {
const VoiceContext = window.AudioContext || window.webkitAudioContext;
const voiceContext = new AudioContext();
await voiceContext.audioWorklet.addModule('https://sdk.alan.app/js/alan_lib.js');
return voiceContext;
};

const AlanContainer = (props) => {
const BtnRef = useRef(null);
const formMethods = useFormContext()

useEffect(() => {
startvoiceContext().then((voiceContext) => {
alanBtn({
key: 'your-alan-key-here',
onCommand: (commandData) => {
if (commandData.command === 'goBack') {
//code
}
if (commandData.command === 'setName') {
// Update the form value of field
formMethods.setValue('name', commandData.name);
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
if (commandData.command === 'goBack') {
// Call the appropriate function or method in your code
}
}
});
BtnInstance.activate();

};

return (
<div className='alan-btn-container'>
<div ref={BtnRef} />
<button className='Activebtn' onClick={activateAlan}> <BsFillMicFill/></button>
</div>
);
};

export default withRouter(AlanContainer);