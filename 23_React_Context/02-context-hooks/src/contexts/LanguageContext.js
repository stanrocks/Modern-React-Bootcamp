import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  // this.state = { language: 'spanish' };
  const [language, setLanguage] = useState('spanish');
  // changeLanguage(e) {
  //   this.setState({ language: e.target.value });
  // }
  const changeLanguage = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
