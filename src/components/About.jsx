import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya adalah seoarang Mahasiswa Informatika di universitas Sattya Terra
          Bhinneka, saya mengambil jurusurasan ini karena saya keingintahuan
          saya tentang mengetahui lebih banyak tentang hal teknologi dan ilmu
          jaringan.
        </p>
        <br /> Saya memiliki banyak hobi dari bermain alat musik seperti Gitar,
        Kajon, Recorder dan juga dalam bidang Olahraga seperti Badminton, Tenis
        meja, berenang, Catur, dan banyak lagi yang lain.
        <h4>Programming & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaJs />
          <FaWindows />
          <FaJava />
        </div>
      </div>
    </section>
  );
}

export default About;
