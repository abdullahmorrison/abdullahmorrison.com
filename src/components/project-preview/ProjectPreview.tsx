import styles from './project-preview.module.scss'

interface ProjectPreviewProps {
    number: number;
    name: string;
    imgSrc: string;
    description: string;
    links: {
        title: string;
        url: string;
    }[]
}
export default function ProjectPreview(props: ProjectPreviewProps) {
    return (
        <section className={`${styles.project}`} style={{backgroundImage: `url(${props.imgSrc})`}}>
            <div className={styles.projectInfo}>
                <h3 className={styles.number}>{props.number}</h3>
                <h3 className={styles.name}>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>

                <ul className={styles.links}>
                    {props.links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.url} target='_blank'>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}