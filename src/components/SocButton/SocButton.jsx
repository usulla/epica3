import React from 'react';

const SocButton = ({text, classlist, datasoc, socicon}) => {
 return (
<div href='' className={`btn-authoriz ${classlist}`} data-soc={datasoc} onClick={this.submitShowCard} onClick={this.submitShowCard}>
<span className='authoriz-icon'><i className={socicon}></i></span>
<span className='authoriz-text'>{text}</span>
</div>
    );
};

export default SocButton;