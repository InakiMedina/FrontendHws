import styles from './Technologies.module.css'

export default function Technologies() {
	return (
		<>
			<h3>Skills</h3>
			<div className={styles.green}>
				<h4>Algorithms</h4>
				<ul>
					<li>C++</li>
					<li>Graphs</li>
					<li>Differential Eq</li>
				</ul>
			</div>
			<div className={styles.blue}>
				<h4>DB</h4>
				<ul>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>Neo4j</li>
				</ul>
			</div>
			<div className={styles.purple}>
				<h4>Backend</h4>
				<ul>
					<li>JS/TS</li>
					<li>Python</li>
				</ul>
			</div>
			<div className={styles.cyan}>
				<h4>Frontend</h4>
				<ul>
					<li>Vanilla JS</li>
					<li>React/Next</li>
					<li>Css/Boostrap/Tailwin</li>
				</ul>
			</div>
			<div className={styles.red}>
				<h4>Cloud</h4>
				<ul>
					<li>AWS services</li>
					<li>Terraform</li>
					<li>Pipelines</li>
				</ul>
			</div>
		</>
	)
}