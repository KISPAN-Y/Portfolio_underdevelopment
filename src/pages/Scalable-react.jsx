import CopyButton from "../hooks/CopyButton";
import { reactTips } from "../data/scalable";
import rt from "../assets/images/py.webp"

const Scalable = () => {
    return ( 
        <section id="scalable" className="blog-single">
            <h1>Building Scalable React Applications</h1>
            <h3>Learn the best practices for structuring large-scale React applications that are maintainable and performant.</h3>
            <div className="container-grid">
                <div className="tips-container">
                    {reactTips.map((tip) =>(
                        <article key={tip.id} className='tip-card'>
                            <div className="flex-row space-between center">
                                <img src={ rt } alt="React icon" className="img-py" />
                                <CopyButton content={tip.title}/>
                            </div>
                            <div className="flex-column">
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
                {/* Other posts column */}
                <div className="popular flex-column relative">
                    <div className="pst flex-column">
                        <div className="flex">
                            <img src={ rt } className='img-py' />
                        </div>
                        <div className="flex">
                            <img src={ rt } className='img-py' />
                        </div>
                        <div className="flex">
                            <img src={ rt } className='img-py' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Scalable;