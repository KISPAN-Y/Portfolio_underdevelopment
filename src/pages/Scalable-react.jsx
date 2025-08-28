import CopyButton from "../hooks/CopyButton";
import { reactTips } from "../data/scalable";
import rt from "../assets/images/scalable_react.webp";
import rt2 from "../assets/images/next_react.webp";
import rt3 from "../assets/images/django.webp";
import { Link } from 'react-router-dom';

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
                            <div className="flex-column left">
                                <h3>{tip.title}</h3>
                                <p className="text-align-left"me>{tip.description}</p>
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
                            <Link to="/django-rest-framework-tips"><img src={ rt3 } className='img-py' /></Link>
                            <p className="weight-700">Django REST Framework Tips</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Scalable;