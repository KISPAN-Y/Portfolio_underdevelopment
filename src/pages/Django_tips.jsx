import { djangoTips } from '../data/django-tips';
import py from '../assets/images/py.webp';
import CopyButton from '../hooks/CopyButton';

const DjangoTips = () => {
    return ( 
        <section id="djangoTips" className="djangopage flex-column center">
            <h1>Django Tips</h1>
            <div className="container-grid">
                <div className="tips-container">
                    {djangoTips.map((tip) =>(
                        <article key={tip.id} className='tip-card'>
                            <div className="flex-row space-between center">
                              <img src={ py } alt="Python" className="img-py" />
                              <button className="view-code cursor-pointer">view sample code</button>
                            </div>
                            <div className="flex-column">
                                <h3>{tip.title}</h3>
                                <p><span className="weight-700">Why</span> {tip.why}<br/>
                                    <span className="weight-700">How</span> {tip.how}
                                </p>
                            </div>
                            <CopyButton content={tip.code} />
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