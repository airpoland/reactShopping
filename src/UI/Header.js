import React from 'react';
import styles from './Header.module.css';

function Header(props) {
	return (
		<div className={styles.header}>
			<h1>React Meals!</h1>
			<div className={styles.basket}>basket</div>
		</div>
	);
}

export default Header;
