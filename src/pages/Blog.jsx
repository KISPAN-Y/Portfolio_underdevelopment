import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog" className="blog-page">
      <div className="container">
        <h2 className="section-title">My Blog</h2>
        <div className="blog-intro white">
          <p>
            I regularly write about web development, design, and technology.
            Here are some of my latest articles and tutorials.
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category">{post.category}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={ `/${post.slug}` } className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;