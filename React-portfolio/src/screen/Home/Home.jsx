import { useState, useEffect } from "react";
import axios from "axios";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/footer/footer"
import './Home.css'


export default function Home() {
  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get("https://api.github.com/users/nikunj1112");
        const repoRes = await axios.get("https://api.github.com/users/nikunj1112/repos?sort=updated&per_page=6");
        setGithubData(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError("⚠️ Failed to fetch GitHub data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <About user={githubData} />
      <Projects repos={repos} />
      <Contact />
      <Footer />
    </>
  );
}
