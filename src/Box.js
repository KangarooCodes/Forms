import React, {Fragment} from 'react';
import './Box.css'

const Box = ({width=10,height=10,bgcolor='lightblue'}) => (
	<Fragment>
		<div className="Box" style={{
			width: `${width}px`,
			height: `${height}px`,
			backgroundColor: `${bgcolor}`
			}}>
		</div>
	</Fragment>
)

export default Box;