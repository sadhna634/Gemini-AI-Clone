// import React, { createContext, useState, useEffect } from 'react';
// // सुनिश्चित करें कि यह import path सही है
// import getGeminiResponse from '../config/gemini'; 



// // 1. Context Object बनाएँ
// export const GeminiContext = createContext();

// const ContextProvider = (props) => {
//     // 2. State Variables
//     const [input, setInput] = useState("");
//     const [resultData, setResultData] = useState("");
//     const [loading, setLoading] = useState(false);

//     // 3. API Call Handler Function (यह लूप नहीं बनाएगा क्योंकि यह सीधे रेंडर नहीं होता)
//     const onSent = async (prompt) => {
//         // Ensure prompt is not empty
//         if (!prompt) return;

//         setLoading(true); // लोडिंग शुरू
//         setInput(prompt); // इनपुट को स्टेट में रखें

//         // API Call
//         const response = await getGeminiResponse(prompt);

//         setResultData(response); // परिणाम को स्टेट में स्टोर करें
//         setLoading(false); // लोडिंग खत्म
//         setInput(""); // इनपुट फील्ड साफ़ करें (यदि आवश्यक हो)
//     }

//     // 4. Context Value Object
//     const contextValue = {
//         input,
//         setInput,
//         resultData,
//         loading,
//         onSent, // API फ़ंक्शन को context में पास करें
//     };



//     // 5. Context Provider को children के साथ return करें
//     return (
//         <GeminiContext.Provider value={contextValue}>
//             {props.children}
//         </GeminiContext.Provider>
//     );
// };

// export default ContextProvider;

//----------------------------------------------
import { createContext, useEffect, useState } from "react";
import getGeminiResponse from "../config/gemini";
import runchat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setinput] = useState("");
    const [recentprompt, setrecentprompt] = useState("");
    const [prevpromp, setprevprompt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");

    const delaypara =(index,nextWord)=>{
      setTimeout(function () {
        setresultdata(prev=>prev+nextWord);
      },75*index);
    }

    const newchat=()=>{
        setloading(false);
        setshowresult(false);

    }

    const onSent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowresult(true);
  let response;
        if(prompt !==undefined){
response=await runchat(prompt);
setrecentprompt(prompt)
        }
        else{
setprevprompt(prev=>[...prev,input]);
setrecentprompt(input)
response=await runchat(input)
        }

    //     setrecentprompt(input)
    //     setprevprompt(prev=>[...prev,input])

    //    const response= await runchat(input);
       let responsearray=response.split("**");
       let newresponse=""

       for(let i=0; i<responsearray.length; i++){

        if(i===0|| i%2 !== 1){
           newresponse += responsearray[i];
        }
        else{
            newresponse += "<b>"+responsearray[i]+"<b>";
        }
       }
       let newresponse2 = newresponse.split("*").join("</br>")

    //    setresultdata(newresponse2)
    let newresponsearray = newresponse2.split(" ");
    for(let i=0; i<newresponsearray.length; i++){
        const nextword = newresponsearray[i];
        delaypara(i,nextword+" ");
    }
       setloading(false);

       setinput("");

    }



    useEffect(() => {
        // onSent("what is c++");
    }, []);

    const contextValue = {
        // onSent,
        prevpromp,
        setprevprompt,
        onSent,
        recentprompt,
        setrecentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,
        newchat

    };
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;