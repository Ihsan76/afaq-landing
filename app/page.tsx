import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <About />
      <RegisterForm />
      <Footer />
    </main>
  );
}