import alipic from "../../public/alipic.png";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <Image src={alipic} alt="CodeWithAli" className="logo" />
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="#courses">Courses</a>
            <a href="#contact">Contact</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero" id="hero">
          <div className="hero-text">
            {/* {% with messages = get_flashed_messages(with_categories=true) %}
                {% if messages %}
                {% for category, message in messages %}
                <div className="alert alert-{{ category }}">
                    {{ message }}
                </div>
                {% endfor %}
                {% endif %}

                {% endwith %} */}

            <h1>Welcome to CodeWithAli!</h1>
            <p>Explore our courses and start learning today!</p>
            <a href="#courses" className="btn">
              Get Started
            </a>
          </div>
          <div className="hero-image">
            {/* <img src="{{ url_for('static', filename='alipic.png') }}" alt="Hero Image"> */}
            <Image src={alipic} alt="Hero Image" className="logo" />
          </div>
        </section>
        <section className="about" id="about">
          <h2>About CodeWithAli</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>
                CodeWithAli is your go-to platform for personal coding lessons
                and seminars. Our mission is to make coding accessible and
                enjoyable for everyone.
              </h3>
              <a className="btn-submit" href="/about">
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
        <section className="courses" id="courses">
          <h2>Our Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <h3>Introduction to Python</h3>
              <p>
                Learn the basics of Python programming in this comprehensive
                course.
              </p>
            </div>
            <div className="course-card">
              <h3>Web Development Bootcamp</h3>
              <p>
                Master the fundamentals of web development with HTML, CSS, and
                JavaScript.
              </p>
            </div>
            <div className="course-card">
              <h3>Data Science with Python</h3>
              <p>
                Get started with data science and learn how to analyze data
                using Python.
              </p>
            </div>
            <div className="course-card">
              <h3>Learning Java for Beginners</h3>
              <p>
                Once you feel like you have advanced in Python, it's time to
                take it up to the next level and learn the more advanced
                language, Java.
              </p>
            </div>
          </div>
        </section>
        <section className="reviews">
          <h2>Reviews</h2>
          <div className="review-grid">
            <div className="review">
              <p>
                "CodeWithAli has been an amazing experience! The lessons are
                clear and easy to follow."
              </p>
              <p>- Student A</p>
            </div>
            <div className="review">
              <p>
                "I've learned so much from the seminars. Highly recommend for
                anyone looking to improve their coding skills!"
              </p>
              <p>- Student B</p>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <p>Email: codewithali.learn@gmail.com</p>
          <div className="container">
            <form
              className="contact-form"
              action="/submit_contact"
              method="post"
            >
              <div className="form-group">
                {/* <label for="name">Name:</label> */}
                {/* <input type="text" id="name" name="name" required pattern="[A-Za-z0-9\s.,'-]+"> */}
              </div>
              <div className="form-group">
                {/* <label for="email">Email:</label> */}
                {/* <input type="email" id="email" name="email" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}"> */}
              </div>
              <div className="form-group">
                {/* <label for="message">Message:</label> */}
                {/* <textarea id="message" name="message" rows="4" required pattern="[A-Za-z0-9\s.,'!?\-()@]+"></textarea> */}
              </div>
              <button className="btn-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
        <section className="faqs" id="faq">
          <h2>FAQ</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>Q: How much do you cost?</h3>
              <p>A: Only 10 USD</p>
              <div className="btn-info">
                <a href="#">Detailed Answer</a>
              </div>
            </div>
            <div className="faq-card">
              <h3>Q: How much do you cost?2</h3>
              <p>A: Only 10 USD</p>
              <div className="btn-info">
                <a href="#">Detailed Answer</a>
              </div>
            </div>
            <div className="faq-card">
              <h3>Q: How much do you cost?3</h3>
              <p>A: Only 10 USD</p>
              <div className="btn-info">
                <a href="#">Detailed Answer</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>&copy; 2024 CodeWithAli. All rights reserved.</footer>
      {/* <script src="script.js"></script> */}
    </>
  );
}
