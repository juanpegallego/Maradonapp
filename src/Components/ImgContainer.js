import React from 'react'
import '../Styles/imgcontainer.scss'

function ImgContainer({ src, blurImg }) {
    const styles = {
        filter: blurImg
    }
    return (
        <div className='img__container'>
            <img src={src} style={styles} alta={src} />
        </div>
    )
}

export default ImgContainer
