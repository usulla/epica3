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
<Button text={'Больше вкусов'}/>
</div>
</div>
<div className='product product2'>
<div className='info-product'>
<span className='header__title'>
Питьевые йогурты<br/> EPICA
</span>
<Button text={'Больше вкусов'}/>
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
<Button text={'Больше вкусов'}/>
</div>
</div>
</div>
</div>
</section>

    )
  }
}

export default ProductsEpica;