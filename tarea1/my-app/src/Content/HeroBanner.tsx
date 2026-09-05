import styles from "./HeroBanner.module.css"
import spooderman from '../Assets/spooderman.gif'

export default function HeroBanner() {
	return (
		<div className={styles.banner}>
			<img className={styles.img} src ={spooderman}/>
			<h1>Iñaki Medina Munguía</h1>
		</div>
	)
}