import React from 'react';
import { Popover } from 'antd';
import { Content } from './popup-style';
import PropTypes from 'prop-types';
import './style.css';
import { ThemeProvider } from 'styled-components';
import theme from '../../config/theme/customize-antd';

const PopupWithIcon = props => {
  const { content, placement, title, action } = props;
  const content1 = <Content>{content}</Content>;
  return (
    <ThemeProvider theme={theme}>
      <Popover placement={placement} title={title} content={content1} trigger={action !== undefined ? action : 'hover'}>
        {props.children}
      </Popover>
    </ThemeProvider>
  );
};

PopupWithIcon.propTypes = {
  placement: PropTypes.string.isRequired,
  title: PropTypes.string,
  action: PropTypes.string,
  content: PropTypes.object.isRequired,
};

export { PopupWithIcon };
