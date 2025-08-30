import { djangoTips } from '../data/django-tips';
import py from '../assets/images/django.webp';
import rt2 from "../assets/images/next_react.webp";
import rt3 from "../assets/images/scalable_react.webp";
import CopyButton from '../hooks/CopyButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h1 className="white">Django Tips</h1>
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
                            <h2>Other Blogs </h2>
                        </div>
                        <div className="flex-row center gap-20">
                            <Link to="/nextjs-vs-react"><img src={ rt2 } className='img-py' /></Link>
                            <p className="weight-700">Next.js vs React: Understanding the Differences</p>
                        </div>
                        <div className="flex-row center gap-20">
                            <Link to="/building-scalable-react-apps"><img src={ rt3 } className='img-py' /></Link>
                            <p className="weight-700">Building Scalable React Applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default DjangoTips;