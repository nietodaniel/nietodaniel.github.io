import { useState } from 'react';


export const useLanguage = ( initialState = "en" ) => {
    
    const [lang, setLang] = useState(initialState);

    const reset = () => {
        setLang( "en" );
    }


    const handleInputChange = (language) => {
        if(language==="en" || language==="es" || language==="pt")
          setLang(language);
        else
          setLang("en");
    }

    return [ lang, handleInputChange, reset ];

}