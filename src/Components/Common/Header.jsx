import React, { useContext } from 'react';
import { Alert, Badge } from 'react-bootstrap';
import ItemContext from '../../Context/ItemContext';

const Header = () => {
  const context = useContext(ItemContext);
  const {items,appTitle}=context.state;

	let badgestyle = '';
	if (items.length >= 3) badgestyle = 'success';
	if (items.length <= 2) badgestyle = 'warning';
	if (items.length <= 1) badgestyle = 'danger';

	return (
		<div>
			<Alert variant="info">
				<h2>{appTitle}</h2>
			</Alert>
			<div>
				<Alert variant="light">
					تعداد اقلام &nbsp;
					<Badge pill variant={badgestyle}>
						{items.length}
					</Badge>{' '}
					عدد می باشد
				</Alert>
			</div>
		</div>
	);
};

export default Header;
