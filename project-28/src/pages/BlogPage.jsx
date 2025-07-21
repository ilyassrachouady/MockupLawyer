import React from 'react'
import './BlogPage.css'

const BlogPage = () => {
  const blogPosts = [
    {
      title: "What to Do Immediately After a Car Accident in Florida",
      excerpt: "Learn the essential steps to take after a car accident to protect your health, safety, and legal rights in Florida.",
      date: "January 15, 2025",
      category: "Car Accidents",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Understanding Florida's No-Fault Insurance Laws",
      excerpt: "Navigate Florida's complex no-fault insurance system and understand how it affects your personal injury claim.",
      date: "January 12, 2025",
      category: "Insurance",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Motorcycle Safety Tips for Florida Riders",
      excerpt: "Essential safety tips and legal considerations for motorcycle riders in Florida's year-round riding weather.",
      date: "January 10, 2025",
      category: "Motorcycle Accidents",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Slip and Fall Accidents: Property Owner Liability",
      excerpt: "Understanding when property owners can be held liable for slip and fall accidents on their premises.",
      date: "January 8, 2025",
      category: "Slip & Fall",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Dealing with Insurance Companies After an Accident",
      excerpt: "Learn how to handle insurance adjusters and protect yourself from lowball settlement offers.",
      date: "January 5, 2025",
      category: "Insurance",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "The Importance of Medical Documentation in Personal Injury Cases",
      excerpt: "Why proper medical documentation is crucial for the success of your personal injury claim.",
      date: "January 3, 2025",
      category: "Legal Tips",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ]

  const categories = ["All", "Car Accidents", "Insurance", "Motorcycle Accidents", "Slip & Fall", "Legal Tips"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="blog-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Legal <span className="highlight">Blog</span></h1>
            <p>Stay informed with the latest legal insights, tips, and news about personal injury law in Florida</p>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-filters">
            <h3>Filter by Category:</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="blog-content-area">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <button className="read-more-button">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest legal insights and personal injury law updates</p>
            
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="cta-button">Subscribe</button>
            </form>
            
            <p className="newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage