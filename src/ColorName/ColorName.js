import React  from 'react';
import Colorize from './Colorize/Colorize';
import './ColorName.css';

function ColorName() {
	return (
		<div className="ColorName">
			<p>
				Create a new component named <code>Colorize</code> under this component.
				The component should receive a prop with a color name (like "blue") and
				present the word with the corresponding color.<br /><br />
				Examples: <span className="color--red">red</span> <span className="color--blue">blue</span>
			</p>

			<Colorize>red</Colorize>
			<Colorize>green</Colorize>
			<Colorize>blue</Colorize>
		</div>
	)
}

export default ColorName;
