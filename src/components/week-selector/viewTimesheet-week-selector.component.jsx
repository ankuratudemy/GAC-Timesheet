import React from 'react';
import Helmet from 'react-helmet'
import moment from 'moment';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectSelectedDays,selectHoverRange,selectWeekNumber} from '../../redux/view-timesheet/view-timesheet.selectors'
import { setSelectedDays,setHoverRange,setWeekNumber,setViewTSData } from '../../redux/view-timesheet/view-timesheet.actions';
moment.locale('uk', {
  week: {
    dow: 1,
  },
})

function getWeekDays(weekStart) {
  //console.log(weekStart)
   
  const days = [weekStart];
  for (let i =1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

class ViewWeekSelector extends React.Component {
    constructor(props) {
        super(props);

      }

    
  handleDayChange = (date) => {
   
    this.props.setSelectedDays(getWeekDays(getWeekRange(date).from));
    let year_week = getWeekNumber(date)
    //console.log(year_week[1])
    this.props.setWeekNumber(year_week[1]);
    this.props.setHoverRange(getWeekRange(date))
    this.props.setViewTSData(this.props.userid.UserId)
    
  };

  handleDayEnter = date => {
   // this.props.setHoverRange(getWeekRange(date))

  };

  
  handleDayLeave = () => {

   // this.props.setHoverRange(undefined)
  };

  handleWeekClick = (weekNumber, days, e) => {

    this.props.setSelectedDays(days);
    this.props.setWeekNumber(weekNumber)
    this.props.setHoverRange(getWeekRange(days[0]))
    
    
  };



  render() {
    const { hoverRange } = this.props;
      
    const daysAreSelected = this.props.selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: this.props.selectedDays[0],
        to: this.props.selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && this.props.selectedDays[0],
      selectedRangeEnd: daysAreSelected && this.props.selectedDays[6],
      
    };

    return (
      <div className="SelectedWeekExample">
        <DayPicker 
          firstDayOfWeek={ 1 }
          selectedDays={this.props.selectedDays?this.props.selectedDays:[]}
          showWeekNumbers
          showOutsideDays
          
          modifiers={modifiers}
          onDayClick={this.handleDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          onWeekClick={this.handleWeekClick}
        />
        {this.props.selectedDays.length === 7 && (
          
          <div>
            {moment(this.props.selectedDays[0]).format('LL')} –{' '}
            {moment(this.props.selectedDays[6]).format('LL')}
          </div>


        )}

        <Helmet>
          <style>{`
            .SelectedWeekExample .DayPicker-Month {
              border-collapse: separate;
            }
            .SelectedWeekExample .DayPicker-WeekNumber {
              outline: none;
            }
            .SelectedWeekExample .DayPicker-Day {
              outline: none;
              border: 1px solid transparent;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange {
              background-color: #EFEFEF !important;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange {
              background-color: #fff7ba !important;
              border-top-color: #FFEB3B;
              border-bottom-color: #FFEB3B;
              border-left-color: #fff7ba;
              border-right-color: #fff7ba;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
              background-color: #FFEB3B !important;
              border-left: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
              background-color: #FFEB3B !important;
              border-right: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
            .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }
          `}</style>
        </Helmet>
      </div>
      
    );
  }
}



const mapStateToProps = createStructuredSelector({
  selectedDays: selectSelectedDays,
  hoverRange: selectHoverRange,
  weekNumber: selectWeekNumber,
  userid: selectCurrentUser 
});

const mapDispatchToProps = dispatch => ({
  setSelectedDays: selectedDays => dispatch(setSelectedDays(selectedDays)),
  setHoverRange: hoverRange => dispatch(setHoverRange(hoverRange)),
  setWeekNumber: weekNumber => dispatch(setWeekNumber(weekNumber)),
  setViewTSData: userid => dispatch(setViewTSData(userid))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewWeekSelector);

