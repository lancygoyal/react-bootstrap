import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

export default ({ name, description, link }) => (
    <Media>
        <Media left href="#">
            <Media className="Avatar" src="/profile-placeholder.png" />
        </Media>
        <Media body>
            <Media heading>
                {name}
            </Media>
            {description}
            {' '}
            <Link to={{ pathname: link, search: `n=${name}` }}>More</Link>
        </Media>
    </Media>
);
