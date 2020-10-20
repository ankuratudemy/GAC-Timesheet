var res = {
    "SvsId": "divyak",
    "WeekEndDate": "2020-10-11",
    "Status": "submit",
    "WeekNumber":41,
    "TotalHours": 20,
    "lstTimeSheetDetails": [
      {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-05",
        "WeekDay": "Mon",
        "WeekDayHours": 4
      },
      {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-06",
        "WeekDay": "Tue",
        "WeekDayHours": 4
      },
       {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-07",
        "WeekDay": "Wed",
        "WeekDayHours": 4
      },
       {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-08",
        "WeekDay": "Thu",
        "WeekDayHours": 4
      },
       {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-09",
        "WeekDay": "Fri",
        "WeekDayHours": 4
      },
       {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-10",
        "WeekDay": "Sat",
        "WeekDayHours": 0
      },
       {
        "ProjectId": "875643",
        "ProjectName": "ECommerce",
        "WeekDate": "2020-10-11",
        "WeekDay": "Sun",
        "WeekDayHours": 0
      },

      ////
      {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-05",
        "WeekDay": "Mon",
        "WeekDayHours": 0
      },
      {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-06",
        "WeekDay": "Tue",
        "WeekDayHours": 0
      },
       {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-07",
        "WeekDay": "Wed",
        "WeekDayHours": 3
      },
       {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-08",
        "WeekDay": "Thu",
        "WeekDayHours": 3
      },
       {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-09",
        "WeekDay": "Fri",
        "WeekDayHours": 2
      },
       {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-10",
        "WeekDay": "Sat",
        "WeekDayHours": 0
      },
       {
        "ProjectId": "875643",
        "ProjectName": "Leave",
        "WeekDate": "2020-10-11",
        "WeekDay": "Sun",
        "WeekDayHours": 5
      }
    ]
  }
  
  let values = [];
  let ctrl = '';
  let interim = {};
  
  
  for (const obj of res.lstTimeSheetDetails) {
      const id = obj.ProjectName;
      values = interim[obj.ProjectName] ? interim[obj.ProjectName].values : [];
      values.push([obj.ProjectId, obj.WeekDate,obj.WeekDay,obj.WeekDayHours])
      interim[obj.ProjectName] = {"projectName": obj.ProjectName, "values": values};
      ctrl = ctrl !== id ? id : ctrl;
  }
  
 
  


 
reshaped = Object.values(interim)

// console.log(reshaped)
 Object.keys(res).forEach(key=> {
     
  if(key !== 'lstTimeSheetDetails' ){
    //console.log(key)
    //reshaped[key] = res[key]
    reshaped.push({attribute: `${key}`, value: res[key] })
  }
})


  
  
  console.log(JSON.stringify(reshaped));