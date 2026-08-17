import styles from './page.module.scss'
import Nav from './components/nav/nav'
import ProjectPreview from './components/project-preview/ProjectPreview'
import projects from './assets/projects.json'

export default function Home() {
  return (
    <div>
      <main className={styles.hero}>
        <Nav/>
        <h1 className={styles.fullName}>
          <span className={styles.firstName}><p>Abdullah</p></span>
          <span className={styles.lastName}><p>Morrison</p></span> 
        </h1>
      </main>

      {projects.map((project, index) => {
        return (
          <ProjectPreview 
            key={index}
            number={index + 1}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            links={project.links}
          />
        )
      })}

      <footer className={styles.footer}>
        <h4 className={styles.logo}>My Portfolio</h4>
        <ul>
          <li><a href="https://linkedin.com/in/abdullah-morrison" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/abdullahmorrison" target="_blank">GitHub</a></li>
          <li><a href="https://abdullahmorrison.github.io/resume/" target="_blank">My Resume</a></li>
        </ul>
        <p>This website was made with NextJS.</p>
      </footer>
    </div>
  )
}
