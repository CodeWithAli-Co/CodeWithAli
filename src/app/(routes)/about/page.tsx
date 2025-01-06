import Link from "next/link";

export default function About() {
  return (
    <>
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
          <p>Explore our services and start learning today!</p>
          <Link href="/services" className="btn">
            Get Started
          </Link>
        </div>
      </section>
      <section className="abouts">
        <h2>About CodeWithAli</h2>
        <div className="about-grid">
          <div className="about-card">
            {/* <!-- <h3>CodeWithAli is your go-to platform for personal coding lessons and seminars. Our mission is to make coding accessible and enjoyable for everyone.</h3>
                    <p>Ali is a seasoned software developer with years of experience in teaching coding to students of all levels. With a passion for education and a deep understanding of programming, Ali is dedicated to helping you achieve your coding goals.</p> --> */}
            <h3>
              Ali is a seasoned software developer with years of experience in
              teaching coding to students of all levels. With a passion for
              education and a deep understanding of programming, Ali is
              dedicated to helping you achieve your coding goals.
            </h3>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: unfold@codewithali.com</p>
      </section>
      <footer>&copy; 2025 CodeWithAli. All rights reserved.</footer>
    </>
  );
}
