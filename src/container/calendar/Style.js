import Styled from 'styled-components';

const Aside = Styled.aside`
    .btn-create{
        height: 50px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 3px 5px #FF69A505;
        margin-bottom: 25px;
    }
    .ant-picker{
        visibility: hidden;
    }
    .ant-picker .ant-picker-input{
        display: none;
    }
    .listHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        .add-label{
            color: ${({ theme }) => theme['light-color']};
        }
    }

    .event-list{
        li{
            &:not(:last-child){
                margin-bottom: 14px;
            }
            a{
                font-size: 14px;
                font-weight: 400;
                display: block;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
    
`;

const CalendarWrapper = Styled.div`
    
    .react-calendar{
        font-family: 'Inter', sans-serif;
        width: 100%;
        border-radius: 10px;
        padding: 24px 35px;
        border: 0 none;
        background-color: #fff;
        box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}03;
    }
    .react-calendar__navigation{
        margin-bottom: .5rem;
        button{
            &:hover,
            &:focus{
                background-color: #fff !important;
            }
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: ${({ theme }) => theme['light-color']};
        }
        .react-calendar__navigation__label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme['dark-color']};
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }
    .react-calendar__month-view__days{
        .react-calendar__tile{
            max-width: 43px !important;
            padding: 1em 0.5em;
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
            abbr{
                font-size: 14px;
                color: ${({ theme }) => theme['gray-color']};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme['primary-color']};
            }
            &.react-calendar__tile--active{
                border-radius: 50%;
                background-color: ${({ theme }) => theme['primary-color']};
                abbr{
                    color: #fff;
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            .btn-today{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['gray-color']};
                border-color: ${({ theme }) => theme['border-color-light']};
            }
            .react-calendar{
                margin-left: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: #fff;
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                    .react-calendar__month-view__days{
                        /* display: none !important; */
                    }
                }
            }
            .calender-head__navigation{
                margin-left: 30px;
                .btn-navigate{
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    i,
                    svg{
                        color: ${({ theme }) => theme['light-color']};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
        }
        .calendar-header__right{
            display: flex;
            svg{
                width: 14px;
            }
            ul{
                li{
                    display: inline-block;
                    &:first-child{
                        border-left: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                    &:not(:first-child){
                        a{
                            border-top-left-radius: 0px
                            border-bottom-left-radius: 0px
                        }
                    }
                    &:not(:last-child){
                        a{
                            border-top-right-radius: 0px
                            border-bottom-right-radius: 0px
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['light-color']};
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-left: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${({ theme }) => theme['primary-color']};
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme['light-color']};
                svg,
                img,
                i{
                    margin-right: 6px;
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }

    .table-event{
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${({ theme }) => theme['bg-color-light']};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                color: ${({ theme }) => theme['light-color']};
                &.current-data{
                    padding-left: 0;
                    padding-right: 0;
                }
                .currentTime{
                    width: 100%;
                    height: 1px;
                    display: block;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${({ theme }) => theme['primary-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${({ theme }) => theme['success-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${({ theme }) => theme['warning-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    &.info{
                        background-color: ${({ theme }) => theme['info-color']}10;
                        color: ${({ theme }) => theme['info-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['info-color']};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }

    .events{
        li{
            position: relative;
            height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                padding: 2px 5px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
    }  
    
`;

const UpdatePopup = Styled.div`
    .ant-card{
        width: 320px !important;
        .ant-card-body{
            padding: 0 !important;
            
            .headerUpdate{
                border-radius: 8px 8px 0 0;
                padding: 8px 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4{
                    color: #fff;
                }
                .action{
                    display: flex;
                    align-items: center;
                    width: 100px;
                    justify-content: flex-end;
                    color: #fff;
                    a{
                        padding: 0;
                        color: #fff;
                        svg{
                            margin: 0;
                        }
                    }
                }
            }
            .bodyUpdate{
                padding: 8px;
            }
        }
    }
`;

export { CalendarWrapper, Aside, UpdatePopup };