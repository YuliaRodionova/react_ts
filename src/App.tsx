import React from 'react';
import './App.scss';
import Header from './components/block/header/header';
import Footer from './components/block/footer/footer';
import Card from './components/block/card/card';
import Product from './components/block/product/product';
import Catalogue from './components/pages/Catalogue/Catalogue';
import CartList from './components/block/cartList/cartList';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Catalogue />
      <CartList />

      {/* <Product img="/productImg.jpg" weight={90} unit="г" brand="BioMio" productName="Экологичное туалетное 
        мыло. Литсея и бергамот" code={4604049097548} price={48.76} weightIcon={<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.23" clip-path="url(#clip0_56_1553)">
            <path d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z" fill="#3F4E65" />
          </g>
          <defs>
            <clipPath id="clip0_56_1553">
              <rect width="9" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>} available={true} articleNumber={460404} /> */}
      <Footer />
    </div>

  );
}

export default App;
