import { djangoTips } from '../data/django-tips';
import py from '../assets/images/py.webp';
import CopyButton from '../hooks/CopyButton';
import { useState } from 'react';

const DjangoTips = () => {
  const [openTipId, setOpenTipId] = useState(null);

  const togglePopup = (tipId) => {
    if (openTipId === tipId) {
      setOpenTipId(null); // Close if already open
    } else {
      setOpenTipId(tipId); // Open this specific tip
    }
  };

    return ( 
        <section id="djangoTips" className="blog-single flex-column center">
            <h1>Django Tips</h1>
            <div className="container-grid">
                <div className="tips-container">
                    {djangoTips.map((tip) =>(
                        <article key={tip.id} className='tip-card'>
                            <div className="flex-row space-between center">
                              <img src={ py } alt="Python" className="img-py" />
                              <button className="view-code cursor-pointer" onClick={() => togglePopup(tip.id)} >
                                view sample code
                                </button>
                                {openTipId === tip.id && (
                                <div className='popup-overlay flex center' onClick={() => setOpenTipId(null)}>
                                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                                        <CopyButton content={tip.code} />
                                        <p>{tip.code}</p>
                                    </div>
                                </div>
                                )}
                            </div>
                            <div className="flex-column">
                                <h3>{tip.title}</h3>
                                <p><span className="weight-700">Why</span> {tip.why}<br/>
                                    <span className="weight-700">How</span> {tip.how}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                {/* Other posts column */}
                <div className="popular flex-column relative">
                    <div className="pst flex-column">
                        <div className="flex">
                            <img src={ py } className='img-py' />
                        </div>
                        <div className="flex">
                            <img src={ py } className='img-py' />
                        </div>
                        <div className="flex">
                            <img src={ py } className='img-py' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default DjangoTips;