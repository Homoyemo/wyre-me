import React, { Fragment, useState, useEffect } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Icon, Upload } from 'antd';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { SingleChatWrapper, MessageList, Footer } from '../style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { updatePrivetChat } from '../../../redux/chat/actionCreator';
import { SmileOutlined, MoreOutlined } from '@ant-design/icons';
import { Dropdown } from '../../../components/dropdown/dropdown';

const SingleChat = ({ chat, match, updatePrivetChat }) => {
  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].userName,
    inputValue: '',
  });

  const { singleContent, name, me, inputValue } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].userName,
        inputValue: '',
        me: 'woadud@gmail.com',
      });
    }
    return () => {
      unmounted = true;
    };
  }, [match, chat]);

  const handleChange = e => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const pushcontent = {
      content: inputValue,
      time: new Date().getTime(),
      seen: false,
      reaction: false,
      email: me,
    };
    updatePrivetChat(match.params.id, pushcontent);
    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const content = (
    <Fragment>
      <NavLink to="#">
        <FeatherIcon icon="users" size={14} />
        <span>Create new group</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="trash-2" size={14} />
        <span>Delete conversation</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="slash" size={14} />
        <span>Block & Report</span>
      </NavLink>
    </Fragment>
  );

  return (
    <SingleChatWrapper>
      <Cards
        title={
          <Fragment>
            <Heading as="h5">{name}</Heading>
            <p>Active Now</p>
          </Fragment>
        }
        more={content}
      >
        <ul className="atbd-chatbox">
          {singleContent.length ? (
            singleContent.map((mes, index) => {
              const id = mes.time;
              const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');

              return (
                <li className="atbd-chatbox__single" key={index + 1} style={{ overflow: 'hidden' }}>
                  <div className={mes.email !== me ? 'left' : 'right'}>

                    {mes.email !== me ? <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" /> : null}

                    <div className="atbd-chatbox__content">
                      <Heading as="h5" className="atbd-chatbox__name">
                        {mes.email !== me && name}
                        <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                      </Heading>

                      {mes.email !== me ? 
                        <div className="atbd-chatbox__contentInner d-flex">
                          <div className="atbd-chatbox__message">
                            <MessageList className="message-box">{mes.content}</MessageList>
                          </div>
                          
                          <div className="atbd-chatbox__actions">
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div  className="atbd-chatbox__emoji">
                                    <ul>
                                      <li>
                                        <Link to="#">&#127773;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128116;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128127;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128151;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128400;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <MoreOutlined />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottomCenter"
                              >
                                <Link to="#">
                                  <SmileOutlined />
                                </Link>
                              </Dropdown>
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__messageControl">
                                    <ul>
                                      <li>
                                        <Link to="#">Copy</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Quote</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Forward</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Report</Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottomCenter"
                              >
                                <Link to="#">
                                  <MoreOutlined />
                                </Link>
                              </Dropdown>
                            </div>
                        </div>
                        :
                        <div className="atbd-chatbox__contentInner d-flex">
                            <div className="atbd-chatbox__actions">
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__emoji">
                                    <ul>
                                      <li>
                                        <Link to="#">&#127773;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128116;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128127;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128151;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128400;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <MoreOutlined />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottomCenter"
                              >
                                <Link to="#">
                                  <SmileOutlined />
                                </Link>
                              </Dropdown>
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__messageControl">
                                    <ul>
                                      <li>
                                        <Link to="#">Copy d</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Quote</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Forward</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Report</Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottomCenter"
                              >
                                <Link to="#">
                                  <MoreOutlined />
                                </Link>
                              </Dropdown>
                            </div>
                            <div className="atbd-chatbox__message">
                              <MessageList className="message-box">{mes.content}</MessageList>
                            </div>
                        </div>
                      }
                      {mes.email === me && singleContent.length === index + 1 ? (
                        <div className="message-seen text-right">
                          <span className="message-seen__time">Seen 9:20 PM </span>
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </ul>
        <Footer>
          <form onSubmit={handleSubmit}>
            <div className="chatbox-reply-form d-flex">
              <div className="chatbox-reply-input">
                <input
                  onChange={handleChange}
                  placeholder="Type your message..."
                  name="chat"
                  id="chat"
                  style={{ width: '100%' }}
                  value={inputValue}
                />
              </div>
              <div className="chatbox-reply-action d-flex">
                <Upload>
                  <Link to="#">
                    <FeatherIcon icon="camera" size={18} />
                  </Link>
                </Upload>
                <Upload>
                  <Link to="#">
                    <FeatherIcon icon="paperclip" size={18} />
                  </Link>
                </Upload>
                <Button onClick={handleSubmit} type="primary">
                  <FeatherIcon icon="send" size={18} />
                </Button>
              </div>
            </div>
          </form>
        </Footer>
      </Cards>
    </SingleChatWrapper>
  );
};

const mapStateToProps = state => {
  return {
    chat: state.chatSingle.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrivetChat: (id, data) => dispatch(updatePrivetChat(id, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleChat);
