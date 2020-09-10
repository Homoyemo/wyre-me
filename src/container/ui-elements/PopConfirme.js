import React from 'react';
import { Row, Col, message, Popconfirm } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Confirme = () => {
  const confirm = () => {
    message.success('Click on Yes');
  };

  const cancel = () => {
    message.error('Click on No');
  };

  const text = 'Are you sure to delete this task?';
  const onConfirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <>
      <PageHeader
        ghost
        title="Popconfirm"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} lg={8} xs={24}>
            <Cards title="Basic">
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Link to="#">Delete</Link>
              </Popconfirm>
            </Cards>
          </Col>
          <Col xl={12} lg={16} xs={24}>
            <Cards title="Placement">
              <div className="demo placement-confirm">
                <div className="pop-confirm pop-confirm-top" style={{ marginLeft: 90, whiteSpace: 'nowrap' }}>
                  <Popconfirm placement="topLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      TL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="top" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      Top
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="topRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      TR
                    </Button>
                  </Popconfirm>
                </div>
                <div className="pop-confirm pop-confirm-left" style={{ width: 90, float: 'left' }}>
                  <Popconfirm placement="leftTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      LT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="left" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      Left
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="leftBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      LB
                    </Button>
                  </Popconfirm>
                </div>
                <div className="pop-confirm pop-confirm-right" style={{ width: 90, marginLeft: 390 }}>
                  <Popconfirm placement="rightTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      RT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="right" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      Right
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="rightBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      RB
                    </Button>
                  </Popconfirm>
                </div>
                <div
                  className="pop-confirm pop-confirm-bottom"
                  style={{ marginLeft: 100, clear: 'both', whiteSpace: 'nowrap' }}
                >
                  <Popconfirm placement="bottomLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      BL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      Bottom
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottomRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="light" outlined>
                      BR
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Confirme;