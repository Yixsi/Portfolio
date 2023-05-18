import Layout from '../components/Layout';
import { projects }from '../utils/projects';
import Project from '../components/Project/Project';
import styles from '../styles/project.module.css';

export default function Projects() {
  return (
        <Layout title='Projects' description='Projects page' content='Chack my projects!'>
      <h2 className={styles.title}><b>PROJECTS</b></h2>
              <div className={styles.cardsContainer}>
                    {
                      projects?.map((obj, key) => {
                        return (
                          <Project 
                              key={key}
                              title={obj.title}
                              role={obj.role}
                              description={obj.description}
                              taks={obj.tasks}
                              image={obj.image}
                              techs={obj.techs}
                              skills={obj.skills}
                          />

                        )
                      })
                    }
              </div> 
        </Layout>
  )
}
