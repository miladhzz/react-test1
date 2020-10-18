import React, { useContext } from 'react';
import { Alert, Badge } from 'react-bootstrap';
import ItemContext from '../../Context/ItemContext';
import propTypes from 'prop-types';

const Header = ({appTitle}) => {
  const context = useContext(ItemContext);

	let badgestyle = '';
	if (context.items.length >= 3) badgestyle = 'success';
	if (context.items.length <= 2) badgestyle = 'warning';
	if (context.items.length <= 1) badgestyle = 'danger';

	return (
		<div>
			<Alert variant="info">
				<h2>{appTitle}</h2>
			</Alert>
			<div>
				<Alert variant="light">
					تعداد اقلام &nbsp;
					<Badge pill variant={badgestyle}>
						{context.items.length}
					</Badge>{' '}
					عدد می باشد
				</Alert>
			</div>
		</div>
	);
};

Header.propTypes={
	appTitle:propTypes.string
}
export default Header;
