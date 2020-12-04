import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconRocket from '../../../assets/Icon__Network--xDAI.png';
import { CloseOutlined, OrderedListOutlined } from '@ant-design/icons';

import './NotificationBar.scss';

const NotificationBar = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const toggleBar = () => setIsHidden(!isHidden);
  const barClass = isHidden ? 'NotificationBar IsHidden' : 'NotificationBar';

  return (
    <>
      {location.pathname === '/' ? (
        <div className={barClass}>
          {console.log(location)}
          <div className="Row">
            <img src={iconRocket} alt="rocket" />
            <p>
              <strong>DAOhaus is now available on the Stacks mocknet!</strong>
            </p>
            <div className="Actions">
              <Link className="Button Secondary" to="/help#xDAI">
                <OrderedListOutlined style={{ marginRight: '5px' }} /> Quick
                Guide
              </Link>
              <button className="Simple" onClick={toggleBar}>
                <CloseOutlined />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NotificationBar;
