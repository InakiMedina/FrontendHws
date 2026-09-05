import styles from './Proyects.module.css'

export default function Proyects() {
	return (
		<>
			<h3>Main Proyects</h3>
			<h4>E-Commerce Microservices Architecture & Cloud Infrastructure</h4>
			<ul>
				<li className = {styles.list}>
					GitHub Organization.
				</li>
				<li>
					Architected a microservices backend in python deployed fully using Terraform on AWS and automated CI/CD pipelines.
				</li>
				<li>
					Configured networking VPN gateways and Internet Gateways.
				</li>
				<li>
					Added metrics and logs with CloudWatch
				</li>
			</ul>
			<h4>Prolingo – Language Learning Platform</h4>
			<ul>
				<li>
					Live Deployment.
				</li>
				<li>
					Engineered a decoupled, full-stack web application utilizing TypeScript, Node.js/Express, and Vite.
				</li>
				<li>
					Designed and implemented a NoSQL document schema using MongoDB
				</li>
			</ul>
			<h4>HTML Lexical Analyzer & Parser</h4>
			<ul>
				<li>
					Developed a lexical analyzer and parser for HTML syntax using Python's PLY framework.
				</li>
				<li>
					Implemented tokenization rules, regular expressions, and focus on tag matching for document validation and error detection.
				</li>
			</ul>
			<h4>Low-Level Bitmapped Snake Game</h4>
			<ul>
				<li>
					Implemented the classic Snake game directly in Assembly Language with direct video memory addressing and bitwise manipulation.
				</li>
			</ul>
		</>
	)
}