var res = {"status":"Success","data":[{"assignedTo":"0","createdDate":"23-07-2013","count":"2"}, 
                               {"assignedTo":"182398","createdDate":"01-08-2013","count":"2"},
                              {"assignedTo":"182398","createdDate":"23-07-2013","count":"2"}, 
                             {"assignedTo":"182398","createdDate":"24-07-2013","count":"12"}, 
                              {"assignedTo":"182398","createdDate":"22-07-2013","count":"1"},
                              {"assignedTo":"182398","createdDate":"30-07-2013","count":"4"},
                              {"assignedTo":"182398","createdDate":"31-07-2013","count":"19"},
                              {"assignedTo":"185271","createdDate":"24-07-2013","count":"2"},
                              {"assignedTo":"185271","createdDate":"23-07-2013","count":"1"}]
}
//Wanted mixed object
var temp = [];
//Store keys, so we do not need to check from temp if key allready exists
var temp_keys = {};
//Loop trough data
for (var i in res.data)
{
    //Check if key is allready stored in object
    if (!temp_keys[res.data[i]['assignedTo']])
    {
        //Store new key, and save it''s position
        temp_keys[res.data[i]['assignedTo']] = temp.length;
        //Create new array element as new object
        temp.push(
            {
                'key' : res.data[i]['assignedTo'],
                'values': []
            }
        );
    }
    //Save values into correct position
    temp[temp_keys[res.data[i]['assignedTo']]]['values'].push([res.data[i]['createdDate'], res.data[i]['count']]);
}
console.log(temp);
console.log(JSON.stringify(temp));