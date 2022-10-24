import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { MainNavigation } from './components/MainNavigation';
import { Menu } from './components/Menu';
import { MyApp } from './components/MyApp';
import { Products } from './components/Products';
import { MenuProps, MenuVoice, ProductsProps } from './models/productsProps';

function App() {
  const x: ProductsProps = {
      products: 10,
      message: 'ciao'
  }

//  const products: number = 10;
//  const renderMessage = () => products === 0   ? 'Non ci sono prodotti' : `Ci sono ${products} prodotti`;
//  const renderEmpty = () => <h3>Non ci sono prodotti</h3>
//  const renderProducts = () => <h3>Ci sono {products} prodotti</h3>
  const gender: string = 'M';
  const navigate = (url: string) => window.open(url);
  const wrapperClass: string = 
     gender === 'M' ? 'App-male': 'App-female';
  
  const renderMessage = () => x.products === 0   ?  <Empty/>  : <Products {...x}/>;
  //  const items: MenuVoice[] = [
  //       { key:"1",  text: 'Home', url: 'http://www.repubblica.it'},
  //       { key:"2", text: 'Features', url: 'http://www.microsoft.com'},
  //       { key:"3", text: 'Pricing', url: 'http://www.google.com'},
  //       { key:"4", text: 'About', url: 'http://apple.com'}
  //   ];


    const [items, setItems] = useState<MenuVoice[]>([]);

    useEffect( () => {
      console.log('Use Effects');
      axios.get<MenuVoice[]>('http://localhost:8000/menuVoices')
      .then(response => setItems(response.data));
    }  , []);


    const menu: MenuProps = {
      items: items,
      onItemClicked: navigate
    };

  return (
    <>
      <div className='container-fluid'>
        <Menu {...menu}/>
      </div>
      <div className="container">
        <MainNavigation/>
        
      </div>
    </>
  );
}

export default App;
