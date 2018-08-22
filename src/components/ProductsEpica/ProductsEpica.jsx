import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prosuct2 from '../../images/product2.png';
import prosuct1 from '../../images/product1.png';
import prosuct3 from '../../images/product3.png';
import Button from '../Button/Button.jsx';

class ProductsEpica extends React.Component {

  render() {
    return (
 <section className='products-epica section fp-noscroll'>
 <div className='all-products'>
 <div className='all-products2'>
<div className='product product1'>
<div className='product-rotate'>
<img src={prosuct1} />
</div>
<div className='info-product'>
<span className='header__title'>
Йогурты EPICA
</span>
<div className='button'><a target='_blank' href='http://www.ehrmann.ru/products/epica/?utm_source=tnt-online&utm_medium=button&utm_content=epica&utm_campaign=Epica_TNT_Dances_aug-dec2018'>Больше вкусов</a>
</div>
</div>
</div>
<div className='product product2'>
<div className='info-product'>
<span className='header__title'>
Питьевые йогурты<br/> EPICA
</span>
<div className='button'>
<a target='_blank' href='http://www.ehrmann.ru/products/epica/pitevoi/?utm_source=tnt-online&utm_medium=button&utm_content=pitevoi&utm_campaign=Epica_TNT_Dances_aug-dec2018'>Больше вкусов</a>
</div>
</div>
<div className='product-rotate'>
<img src={prosuct2} />
</div>
</div>
<div className='product product3'>
<div className='product-rotate'>
<img src={prosuct3} />
</div>
<div className='info-product'>
<span className='header__title'>
Йогурты EPICA Crispy
</span>
<div className='button'>
<a target='_blank' href='http://www.epicayogurt.ru/?utm_source=tnt-online&utm_medium=button&utm_campaign=Epica_TNT_Dances_aug-dec2018'>Больше вкусов</a>
</div>
</div>
</div>
</div>
</div>
</section>

    )
  }
}

export default ProductsEpica;