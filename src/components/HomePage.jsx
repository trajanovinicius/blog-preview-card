import styles from "./HomePage.module.css";
import blogImage from "../assets/blogImage.svg";
import avatarImage from "../assets/userpic.svg";

export function HomePage() {
	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<img className={styles.imageBlog} src={blogImage} />

				<div className={styles.content}>
					<button className={styles.button}>Learning</button>
					<p className={styles.publishedAt}>Published 21 Dec 2023</p>
					<p className={styles.title}>HTML & CSS foundations</p>
					<p className={styles.description}>
						These languages are the backbone of every
						<br />
						website, defining structure, content, and <br />
						presentation.
					</p>
				</div>

				<div className={styles.avatarBox}>
					<img src={avatarImage} />
					<p>Greg Hooper</p>
				</div>
			</div>
		</div>
	);
}
