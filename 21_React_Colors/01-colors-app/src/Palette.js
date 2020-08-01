import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import './Palette.css';

const styles = {
	Palette: {
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column'
	},

	colors: {
		height: '90%'
	}

	// PaletteFooter: {
	// 	backgroundColor: 'white',
	// 	height: '4vh',
	// 	display: 'flex',
	// 	justifyContent: 'flex-end',
	// 	alignItems: 'center',
	// 	fontWeight: 'bold'
	// },

	// emoji: {
	// 	fontSize: '1.5rem',
	// 	margin: '01rem'
	// }
};

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(newLevel) {
		this.setState({ level: newLevel });
		// console.log(newLevel);
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={color.id}
				id={color.id}
				paletteId={id}
				showingFullPalette={true}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					enableLevelSlider={true}
				/>

				<div className={classes.colors}>{colorBoxes}</div>

				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
