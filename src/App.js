import Button from './components/Button';
import {AppStyled} from './App.styled';
import WebFont from 'webfontloader';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Chilanka', 'Shizuru']
      }
    });
   }, []);

  return (
    // <AppStyled>
    //   {/* <Button /> */}
    // </AppStyled>
  );
}

export default App;
