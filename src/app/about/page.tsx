import Image from "next/image";
import alipic from "../../../public/alipic.png";

export default function About() {
  return (
    <>
      <body>
        <header>
          <nav>
            <div className="logo-container">
              {/* <img src="{{ url_for('static', filename='alipic.png') }}" alt="CodeWithAli Logo" className="logo"> */}
              <Image src={alipic} alt="CodeWithAli" className="logo" />
            </div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/home#about">About</a>
              <a href="/home#courses">Courses</a>
              <a href="/home#contact">Contact</a>
              <a href="/home#reviews">Reviews</a>
              <a href="/home#faq">FAQ</a>
            </div>
          </nav>
        </header>
        <main>
          <section className="hero">
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
              <a href="/home#courses" className="btn">
                Get Started
              </a>
            </div>
          </section>
          <section className="abouts">
            <h2>About CodeWithAli</h2>
            <div className="about-grid">
              <div className="about-card">
                {/* <!-- <h3>CodeWithAli is your go-to platform for personal coding lessons and seminars. Our mission is to make coding accessible and enjoyable for everyone.</h3>
                    <p>Ali is a seasoned software developer with years of experience in teaching coding to students of all levels. With a passion for education and a deep understanding of programming, Ali is dedicated to helping you achieve your coding goals.</p> --> */}
                <h3>
                  Ali is a seasoned software developer with years of experience
                  in teaching coding to students of all levels. With a passion
                  for education and a deep understanding of programming, Ali is
                  dedicated to helping you achieve your coding goals.
                </h3>
              </div>
            </div>
          </section>
          <section className="contact">
            <h2>Contact Us</h2>
            <p>Email: codewithali.learn@gmail.com</p>
          </section>
        </main>
        <footer>&copy; 2024 CodeWithAli. All rights reserved.</footer>
        <script src="script.js"></script>
      </body>
    </>
  );
}
