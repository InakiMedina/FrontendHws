import styles from './Content.module.css'

function Content() {
	return (
		<>
			<h2>Skills</h2>
			<div className={styles.green}>
				<h3>Algorithms</h3>
				<ul>
					<li>C++</li>
					<li>Graphs</li>
					<li>Differential Eq</li>
				</ul>
			</div>
			<div className={styles.blue}>
				<h3>DB</h3>
				<ul>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>Neo4j</li>
				</ul>
			</div>
			<div className={styles.purple}>
				<h3>Backend</h3>
				<ul>
					<li>JS/TS</li>
					<li>Python</li>
				</ul>
			</div>
			<div className={styles.cyan}>
				<h3>Frontend</h3>
				<ul>
					<li>Vanilla JS</li>
					<li>React/Next</li>
					<li>Css/Boostrap/Tailwin</li>
				</ul>
			</div>
			<div className={styles.red}>
				<h3>Cloud</h3>
				<ul>
					<li>AWS services</li>
					<li>Terraform</li>
					<li>Pipelines</li>
				</ul>
			</div>
		</>
	)
}

export default Content