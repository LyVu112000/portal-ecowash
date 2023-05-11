import React, {useState, useEffect} from 'react';
import {CCol, CRow, CButton, CButtonGroup, CImg} from '@coreui/react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "moment/locale/vi"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'

const defaultTimeStart = moment().startOf('day');
const defaultTimeEnd = moment().endOf('day').add(-12, 'hour');

const defaultTimeRange = defaultTimeEnd - defaultTimeStart;

const localizer = momentLocalizer(moment)
const groups = [{id: 1, title: 'TCH'}, {id: 2, title: 'The coffee house'}, {id: 3, title: 'The coffee house 1'}]
const items = [
    {
        id: 1,
        group: 1,
        code: 'KH1-20122022-01C',
        start_time: moment(),
        end_time: moment().add(4, 'hour'),
        type: 'R',
        isFlagError: false,
        sepecialInstructions: ""
    },
    {
        id: 2,
        group: 1,
        code: 'KH1-20122022-02C',
        start_time: moment().add(3, 'hour'),
        end_time: moment().add(7, 'hour'),
        type: 'R',
        isFlagError: true,
        sepecialInstructions: ""
    },
    {
        id: 3,
        group: 1,
        code: 'KH1-20122022-01C',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(6, 'hour'),
        type: 'D',
        isFlagError: false,
        sepecialInstructions: "express"
    },
]

const itemRenderer = ({item, timelineContext, itemContext, getItemProps, getResizeProps}) => {
    const {left: leftResizeProps, right: rightResizeProps} = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? "red" : item.selectedBgColor) : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    const props = getItemProps({
        style: {
            backgroundColor: item.type == 'R' ? "#e5fafb" : "#cff9d6",
            color: item.isFlagError ? "rgb(255, 0, 0)" : item.type == 'R' ? "rgb(20, 155, 213)" : "rgb(2, 158, 77)",
            border: item.type == 'R' ? "1px solid rgb(20, 155, 213, 0.3)" : "1px solid rgb(2, 158, 77, 0.3)",
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1
        }
    });
    props.style.height = 30;
    return (
        <div {...props}>

            <div
                style={{
                    height: itemContext.dimensions.height,
                    overflow: "hidden",
                    paddingLeft: 3,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }}>
                {item.code}

                {item.isFlagError ?
                    <CImg
                        src="../error.png"
                        style={{
                            float: "right",
                            height: "20px",
                            width: "20px",
                            marginTop: "5px"
                        }}
                    /> : item.sepecialInstructions.includes("express") ?
                        <CImg
                            src="../fast.png"
                            style={{
                                float: "right",
                                height: "20px",
                                width: "20px",
                                marginTop: "5px"
                            }}
                        /> : null}
            </div>

        </div>
    );
};

const Dashboard = () => {
    const [diplayMonth, setDisplayMonth] = React.useState(true);

    return (
        <div className='main-bg'>
            <CRow>
                <div>
                    <CButtonGroup role="group" aria-label="Basic outlined example" style={{float: "right", margin: "3px 10px"}}>
                        <CButton color="info" variant="outline" onClick={(event) => {
                                event.preventDefault()
                                setDisplayMonth(true)
                            }}>
                            Tháng
                        </CButton>
                        <CButton color="info" variant="outline" onClick={(event) => {
                                event.preventDefault()
                                setDisplayMonth(false)
                            }}>
                            Hôm nay
                        </CButton>
                    </CButtonGroup>
                </div>

                <div style={{textAlign: "center", marginTop: "-30px"}} className="font-size-16">Tháng 1 - 2023</div>
            </CRow>
            <div>
                {!diplayMonth ?
                    <Timeline
                        groups={groups}
                        items={items}
                        itemHeightRatio={1}
                        stackItems
                        showCursorLine
                        canMove={false}
                        canResize={false}
                        minZoom={defaultTimeRange}
                        maxZoom={defaultTimeRange}
                        visibleTimeStart={defaultTimeStart}
                        visibleTimeEnd={defaultTimeEnd}
                itemRenderer={itemRenderer}
            /> :
                <Calendar
                    localizer={localizer}
                    events={[
                        {
                            title: "10 phiếu nhập",
                            type: "PN",
                            start: new Date(2023, 0, 1),
                            end: new Date(2023, 0, 1)
                        },
                        {
                            title: "10 phiếu giao",
                            type: "PG",
                            start: new Date(2023, 0, 1),
                            end: new Date(2023, 0, 1)
                        },
                        {
                            title: "10 phiếu rewash",
                            type: "RW",
                            start: new Date(2023, 0, 1),
                            end: new Date(2023, 0, 1)
                        },
                        {
                            title: "10 phiếu nhập",
                            type: "PN",
                            start: new Date(2023, 0, 4),
                            end: new Date(2023, 0, 4)
                        },
                        {
                            title: "2 phiếu giao",
                            type: "PG",
                            start: new Date(2023, 0, 5),
                            end: new Date(2023, 0, 5)
                        },
                        {
                            title: "1 phiếu rewash",
                            type: "RW",
                            start: new Date(2023, 0, 10),
                            end: new Date(2023, 0, 10)
                        },
                        {
                            title: "2 phiếu giao",
                            type: "PG",
                            start: new Date(2023, 0, 19),
                            end: new Date(2023, 0, 19)
                        },
                        {
                            title: "1 phiếu rewash",
                            type: "RW",
                            start: new Date(2023, 0, 19),
                            end: new Date(2023, 0, 19)
                        },
                    ]}
                    // startAccessor="start"
                    // endAccessor="end"
                    style={{height: 580}}
                    showMultiDayTimes
                    dayLayoutAlgorithm="no-overlap"
                    defaultDate={new Date(2023, 1, 0)}
                    // components={{
                    //     event: CustomEvent
                    // }}
                    eventPropGetter={
                        (event, start, end, isSelected) => {
                            let newStyle = {
                                backgroundColor: "rgb(255, 244, 222)",
                                color: "rgb(255, 0, 0)",
                                border: "1px solid rgb(249, 177, 21, 0.3)"
                            };

                            if (event.type == "PN") {
                                newStyle = {
                                    backgroundColor: "#e5fafb",
                                    color: "rgb(20, 155, 213)",
                                    border: "1px solid rgb(20, 155, 213, 0.3)"
                                }
                            } else if (event.type == "PG") {
                                newStyle = {
                                    backgroundColor: "#cff9d6",
                                    color: "rgb(2, 158, 77)",
                                    border: "1px solid rgb(2, 158, 77, 0.3)"
                                }
                            }

                            return {
                                className: "",
                                style: newStyle
                            };
                        }
                    }
                />
                }

            </div>
            <div>
            </div>

        </div >
    )
}
export default Dashboard