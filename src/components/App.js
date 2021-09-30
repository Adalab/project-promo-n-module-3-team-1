import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import picRandom from '../images/picrandom.jpg';
import Api from '../service/Api';

function App() {
  const [mode1, setMode1] = useState('');
  const [mode2, setMode2] = useState('hidden');
  const [mode3, setMode3] = useState('hidden');
  const [rotate1, setRotate1] = useState('down');
  const [rotate2, setRotate2] = useState('up');
  const [rotate3, setRotate3] = useState('up');
  const [palette, setPalette] = useState('palette1');
  const [image, setImage] = useState(picRandom);
  const [twitter, setTwitter] = useState('');
  const [data, setData] = useState({
    palette:  "" ,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });
  useEffect(() => {
    Api().then((response) => {
      setTwitter(response);
    });
  }, []);


  const handleImage = (imageData) => {
    setImage(imageData);
  };

  const handlePalette = (event) => {
    setPalette(event.target.id);
  };

  const handleInput = (event) => {
    const wichInput = event.currentTarget.name;

    if (wichInput === 'name') {
      setData({
        ...data,
        name: event.currentTarget.value,
      });
      data.name = event.currentTarget.value;
    } else if (wichInput === 'job') {
      setData({
        ...data,
        job: event.currentTarget.value,
      });
      data.job = event.currentTarget.value;
    } else if (wichInput === 'phone') {
      setData({
        ...data,
        phone: event.currentTarget.value,
      });
      data.phone = event.currentTarget.value;
    } else if (wichInput === 'email') {
      setData({
        ...data,
        email: event.currentTarget.value,
      });
      data.email = event.currentTarget.value;
    } else if (wichInput === 'linkedin') {
      setData({
        ...data,
        linkedin: event.currentTarget.value,
      });
      data.linkedin = event.currentTarget.value;
    } else if (wichInput === 'github') {
      setData({
        ...data,
        github: event.currentTarget.value,
      });
      data.github = event.currentTarget.value;
    }
  };

  const handleCollapsable1 = (event) => {
    console.log(event.currentTarget.id);
    if (mode1 === 'hidden') {
      setMode1('');
      setRotate1('down');
    } else {
      setMode1('hidden');
      setRotate1('up');
    }
  };

  const handleCollapsable2 = (event) => {
    console.log(event.currentTarget.id);
    if (mode2 === 'hidden') {
      setMode2('');
      setRotate2('down');
    } else {
      setMode2('hidden');
      setRotate2('up');
    }
  };

  const handleCollapsable3 = (event) => {
    console.log(event.currentTarget.id);
    if (mode3 === 'hidden') {
      setMode3('');
      setRotate3('down');
    } else {
      setMode3('hidden');
      setRotate3('up');
    }
  };

  return (
    <div>
      <Header />

      <main className="page">
        <Preview
          palettePreview={palette}
          dataPreview={data}
          dataImage={image}
        />
        {/* - - - - - - - - - - - - - - - - - - - - - - */}

        {/*Aquí estaba el formulario*/}
        <Form
          handleImage={handleImage}
          handleInput={handleInput}
          handleCollapsable1={handleCollapsable1}
          rotate1={rotate1}
          rotate2={rotate2}
          rotate3={rotate3}
          mode1={mode1}
          mode2={mode2}
          mode3={mode3}
          handlePalette={handlePalette}
          handleCollapsable2={handleCollapsable2}
          handleCollapsable3={handleCollapsable3}
          dataName={data.name}
          dataJob={data.job}
          dataEmail={data.email}
          dataPhone={data.phone}
          dataLink={data.linkedin}
          dataGit={data.github}
          dataImage={image}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
