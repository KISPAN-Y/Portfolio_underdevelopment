import { reactNext } from "../data/react-next";
import rt from "../assets/images/py.webp"

const reactNextjs = () => {
    return ( 
        <section id="scalable" className="blog-single">
            <h1>Building Scalable React Applications</h1>
            <div className="container-grid">
                <div className="center width-100  tb-container">
                    <h3 className="text-align-left"><span className="weight-700">Use React</span> when your application is highly dynamic, runs primarily in the browser (client-side), and doesn’t require SEO optimization (e.g., a logged-in user dashboard, a web app).</h3>
                    <h3 className="h3-m"><span className="weight-700">Use Next.js</span> when you need better performance, SEO, and faster initial page loads through Server-Side Rendering (SSR) or Static Site Generation (SSG) (e.g., blogs, marketing sites, e-commerce platforms).</h3>
                    {reactNext.map((data) =>(
                            <table>
                                <thead>
                                    <tr key={0}>
                                        <th className="td1">{data.th1}</th>
                                        <th>{data.th2}</th>
                                        <th>{data.th3}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={data.id}>
                                        <td className="td1">{data.td1}</td>
                                        <td>{data.td2}</td>
                                        <td>{data.td3}</td>
                                    </tr>
                                </tbody>
                            </table>
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

export default reactNextjs;