import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Voluptate quia nobis atque rem deserunt soluta sint hic nesciunt esse ex quibusdam ab tempore animi,
                 eos modi quasi ipsa repellendus facere.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi ut voluptatum voluptatibus, 
                excepturi ab in amet ullam non. 
                Praesentium molestias in rerum exercitationem debitis quisquam expedita id minima deserunt!</p>
        </div>
    </div>
  )
}

export default DescriptionBox