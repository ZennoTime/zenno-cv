export default function Home() {
  return (
    <main className="container">
      <h1>Осокин Владислав</h1>

      <section className="contacts">
        <h2>Контакты</h2>
        <ul>
          <li>Email: <a href="mailto:pochta@gmail.com">pochta@gmail.com</a></li>
          <li>Phone: +7934567890</li>
        </ul>
      </section>
      
      <section className="skills">
        <h2>Навыки</h2>
        <ul>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Python</li>
          <li>SQL, PostgreSQL, MySQL</li>
        </ul>
      </section>
    </main>
  );
}
