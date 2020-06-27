/*
Desc: Datetime Format conversion
Parameters:
psInput - datetime, psOutput - output date format

*/
function formatDate(psInput, psOutput) {
    var d = new Date(psInput),
        month = ''+(d.getMonth() + 1),
        day = ''+d.getDate(),
        year = d.getFullYear();

	var objMMM = {"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"};
	var objMMMM = {"1":"January","2":"February","3":"March","4":"April","5":"May","6":"June","7":"July","8":"August","9":"September","10":"October","11":"November","12":"December"};
	
	var yyyy = year;
	var yy = year.toString().slice(2);
	var d = day,dd=(day.length < 2) ? '0' + day : '' + day;
	var MM = (month.length < 2) ? '0' + month : '' + month;
	var MMM = objMMM[month];
	var MMMM = objMMMM[month];
	
	var result = "";
	
	var returnFormat = psOutput;
	
	//Year
	if(returnFormat.indexOf("yyyy") > -1)
		returnFormat = returnFormat.replace("yyyy", "${yyyy}")
	else if(returnFormat.indexOf("YYYY") > -1)
		returnFormat = returnFormat.replace("YYYY", "${yyyy}")
	else if(returnFormat.indexOf("yy") > -1)
		returnFormat = returnFormat.replace("yy", "${yy}")
	else if(returnFormat.indexOf("YY") > -1)
		returnFormat = returnFormat.replace("YY", "${yy}")
	
	//Month
	if(returnFormat.indexOf('MMMM') > -1)
		returnFormat = returnFormat.replace("MMMM", "${MMMM}")
	else if(returnFormat.indexOf('mmmm') > -1)
		returnFormat = returnFormat.replace("mmmm", "${MMMM}")
	else if(returnFormat.indexOf('mmm') > -1 )
		returnFormat = returnFormat.replace("mmm", "${MMM}")
	else if(returnFormat.indexOf('MMM') > -1)
		returnFormat = returnFormat.replace("MMM", "${MMM}")
	else if(returnFormat.indexOf('mm') > -1 )
		returnFormat = returnFormat.replace("mm", "${MM}")
	else if(returnFormat.indexOf('MM') > -1)
		returnFormat = returnFormat.replace("MM", "${MM}")
	
	//Day
	if(returnFormat.indexOf('dd') > -1 )
		returnFormat = returnFormat.replace("dd", "${dd}")
	else if(returnFormat.indexOf('DD') > -1)
		returnFormat = returnFormat.replace("DD", "${dd}")
	else if(returnFormat.indexOf('D') > -1)
		returnFormat = returnFormat.replace("D", "${d}")
	else if(returnFormat.indexOf('d') > -1)
		returnFormat = returnFormat.replace("d", "${d}")
	
	result = eval('`'+returnFormat+'`')

    return result;
}