import React, { useState } from 'react';
import { Row, Col, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { VectorMap } from '@south-paw/react-vector-maps';
import {
  CardBarChart2,
  LocationMapWrapper,
  RevenueWrapper,
  RevenueTableWrapper,
  RevenueChartWrapper,
  EChartCard,
} from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import {
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsLineChart,
  ChartjsDonutChart2,
} from '../../components/charts/chartjs';
import worldLowRes from '../../demoData/vector.json';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const moreContent = (
  <>
    <NavLink to="#">
        <FeatherIcon size={16} icon="printer" />
        <span>Printer</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="book-open" />
        <span>PDF</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file-text" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="x" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file" />
        <span>CSV</span>
      </NavLink>
  </>
);

const chartOptions = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const revenueColumns = [
  {
    title: 'Name of Source',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Page View',
    dataIndex: 'page_View',
    key: 'page_View',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    width: 120,
  },
];
const revenueData = [
  {
    key: '1',
    name: 'Google',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#5F63F2',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...chartOptions,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '2',
    name: 'Facebook',
    visitors: '14,456',
    page_View: '12,101',
    revenue: '$4,745',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [10, 7, 14, 8, 5, 11],
            borderColor: '#FF69A5',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...chartOptions,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '3',
    name: 'Email marketing',
    visitors: '45,148',
    page_View: '19,105',
    revenue: '$8,256',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [7, 11, 5, 3, 7, 9],
            borderColor: '#20C997',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...chartOptions,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '4',
    name: 'Direct website',
    visitors: '26,954',
    page_View: '17,358',
    revenue: '$9,852',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [10, 5, 9, 6, 11, 7],
            borderColor: '#2C99FF',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...chartOptions,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '5',
    name: 'Referral',
    visitors: '89,963',
    page_View: '75,741',
    revenue: '$11,159',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [5, 15, 6, 21, 9, 16],
            borderColor: '#FA8B0C',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...chartOptions,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
];

const sellingColumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const sellingData = [
  {
    key: '1',
    name: 'Samsung Galaxy S8 256GB',
    price: '$280',
    sold: '126',
    revenue: '$38,536',
  },
  {
    key: '2',
    name: 'Half Sleeve Shirt',
    price: '$39',
    sold: '180',
    revenue: '$20,573',
  },
  {
    key: '3',
    name: 'Marco Shoes',
    price: '$89',
    sold: '581',
    revenue: '$170,758',
  },
  {
    key: '4',
    name: 'Marco Shoes',
    price: '$32',
    sold: '451',
    revenue: '$258,105',
  },
  {
    key: '5',
    name: '15" MackBook Pro',
    price: '$950',
    sold: '745',
    revenue: '$745,154',
  },
];

const locationColumns = [
  {
    title: 'Top Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const locationData = [
  {
    key: '1',
    location: 'United States',
    order: '397',
    revenue: '$38,536',
  },
  {
    key: '2',
    location: 'United Kingdom',
    order: '420',
    revenue: '$45,748',
  },
  {
    key: '3',
    location: 'Canada',
    order: '210',
    revenue: '$96,415',
  },
  {
    key: '4',
    location: 'China',
    order: '108',
    revenue: '$25,963',
  },
];

const Ecommerce = () => {
  const [state, setState] = useState({
    revenue: 'month',
    generated: 'month',
    products: 'month',
    location: 'month',
    device: 'month',
  });

  const handleActiveChangeRevenue = value => {
    setState({
      ...state,
      revenue: value,
    });
  };

  const handleActiveChangeGenerated = value => {
    setState({
      ...state,
      generated: value,
    });
  };

  const handleActiveChangeProducts = value => {
    setState({
      ...state,
      products: value,
    });
  };

  const handleActiveChangeLocation = value => {
    setState({
      ...state,
      location: value,
    });
  };

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Ecommerce Dashboard"
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
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">7,461</Heading>
                    <span>Orders</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#5F63F210',
                        hoverBackgroundColor: '#5F63F2',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$28,947</Heading>
                    <span>Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#FF69A510',
                        hoverBackgroundColor: '#FF69A5',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$3,241</Heading>
                    <span>Avg. order value</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#20C99710',
                        hoverBackgroundColor: '#20C997',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">45.2k</Heading>
                    <span>Unique visitors</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#2C99FF10',
                        hoverBackgroundColor: '#2C99FF',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <RevenueWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.revenue === 'today' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeRevenue('today')} to="#">
                          Today
                        </Link>
                      </li>
                      <li className={state.revenue === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeRevenue('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.revenue === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeRevenue('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.revenue === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeRevenue('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                more={moreContent}
                title="Total Revenue"
                size="large"
              >
                <Heading className="revenue-count" as="h1">
                  <span className="current-revenue color-primary">$72,784</span>
                  <span className="prev-revenue"> $52,240</span>
                </Heading>

                <ChartjsAreaChart
                  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  datasets={[
                    {
                      data: [5, 25, 18, 22, 15, 30, 25, 35, 20, 22, 20, 40],
                      borderColor: '#5F63F2',
                      borderWidth: 3,
                      fill: true,
                      backgroundColor: '#5F63F210',
                      label: 'Current period',
                    },
                    {
                      data: [15, 20, 18, 25, 20, 30, 25, 20, 20, 22, 15, 30],
                      borderColor: '#C6D0DC',
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: '#00173750',
                      label: 'Previous period',
                      borderDash: [10, 5],
                    },
                  ]}
                  options={{
                    maintainAspectRatio: true,
                    legend: {
                      display: false,
                      labels: {
                        display: true,
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                    scales: {
                      yAxes: [
                        {
                          stacked: false,
                          gridLines: {
                            display: true,
                            color: '#e5e9f2',
                          },
                          ticks: {
                            beginAtZero: false,
                            fontSize: 13,
                            display: true,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          stacked: true,
                          gridLines: {
                            display: false,
                          },
                          ticks: {
                            beginAtZero: false,
                            fontSize: 13,
                            display: true,
                          },
                        },
                      ],
                    },
                  }}
                  height={120}
                />
              </Cards>
            </RevenueWrapper>
          </Col>
          <Col xxl={12} xs={24}>
            <RevenueTableWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.generated === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('today')} to="#">
                            Today
                          </Link>
                        </li>
                        <li className={state.generated === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.generated === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.generated === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  more={moreContent}
                  title="Source Of Revenue Generated"
                  size="large"
                >
                  <div className="table-bordered revenue-table table-responsive">
                    <Table columns={revenueColumns} dataSource={revenueData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </RevenueTableWrapper>
          </Col>
          <Col xxl={8} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.products === 'today' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('today')} to="#">
                          Today
                        </Link>
                      </li>
                      <li className={state.products === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.products === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.products === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Top Selling Products"
                size="large"
                bodypadding="0px"
              >
                <div className="table-bordered top-seller-table table-responsive">
                  <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <LocationMapWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.location === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('today')} to="#">
                            Today
                          </Link>
                        </li>
                        <li className={state.location === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.location === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.location === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Sales By Location"
                  size="large"
                >
                  <div className="location-map d-flex justify-content-center">
                    <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
                  </div>

                  <div className="location-table">
                    <Table columns={locationColumns} dataSource={locationData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </LocationMapWrapper>
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <RevenueChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.device === 'today' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('today')} to="#">
                          Today
                        </Link>
                      </li>
                      <li className={state.device === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.device === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.device === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Revenue By Device"
                size="large"
              >
                <div className="revenue-doughnut">
                  <ChartjsDonutChart2
                    labels={['Desktop', 'Mobile', 'Tablets']}
                    datasets={[
                      {
                        data: [5870, 4483, 2420],
                        backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                      },
                    ]}
                  />
                </div>
              </Cards>
            </RevenueChartWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Ecommerce;