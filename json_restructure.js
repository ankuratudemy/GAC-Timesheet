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
      }
    ]
  }
  
//Wanted mixed object
var temp = [];
//Store keys, so we do not need to check from temp if key allready exists
var temp_keys = {};
//Loop trough data
for (let i in res.lstTimeSheetDetails)
{
    console.log(" temp length is :" + temp.length + "temp_keys[temp.length] is "+temp[temp.length])
    //Check if key is allready stored in object
    if (!temp_keys[res.lstTimeSheetDetails[i]['ProjectName']])
    {
        
        //Store new key, and save it''s position
        temp_keys[res.lstTimeSheetDetails[i]['ProjectName']] = temp.length;
        //Create new array element as new object
        temp.push(
            {
                'key' : res.lstTimeSheetDetails[i]['ProjectName'],
                'values': []
            }
        );
    }
    //Save values into correct position
    temp[temp_keys[res.lstTimeSheetDetails[i]['ProjectName']]]['values'].push([res.lstTimeSheetDetails[i]['ProjectId'], res.lstTimeSheetDetails[i]['WeekDate'],res.lstTimeSheetDetails[i]['WeekDate'],res.lstTimeSheetDetails[i]['WeekDay'],res.lstTimeSheetDetails[i]['WeekDayHours']]);
}
console.log(temp);
console.log(JSON.stringify(temp));