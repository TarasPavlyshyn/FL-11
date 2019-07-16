const TASK8_9 = [
    {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
      },
      {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
      }
  ]

  /* Task 0 */
function getNumbers(text) {
    let arr = [];
    let symbol;

    for (let i = 0; i < text.length; i++){
        symbol = text.charAt(i);
        if(!isNaN(parseInt(symbol, 10))){
            arr.push(text.charAt(i));
        }
    }
    return arr;
}

/* Task 1 */

function findTypes() {
    let dataTypes = {};

    for (let i = 0; i <= arguments.length; i++){
        let typeOF = typeof arguments[i];
        if (dataTypes.hasOwnProperty(typeOF)){
            dataTypes[typeOF]+=1;
        } else {
            dataTypes[typeOF]=1;
        }
    }
    return dataTypes;
}

/* Task 2 */
function executeforEach(array, _function) {
    
    for (let i = 0; i < array.length; i++){
        _function(array[i]);
    }
}


/* Task 3 */
function mapArray(array, _function) {

    let transArray = [];
    executeforEach(array, el => transArray.push(_function(el)));
    return transArray; 

}

/* Task 4 */

function filterArray(array, _function) {
    let filteredArray = [];

    executeforEach(array, el => {
        if(_function(el)) {
        filteredArray.push(el);
        }
    })
    return filteredArray;
}
/* Task 5 */

function showFormattedDate (date) {

    const MONTH = [
        'Jan','Feb','Mar',
        'Apr','May','Jun',
        'Jul','Aug','Sep',
        'Oct','Nov','Dec'];

    return `Date: ${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`;
}

/*Task 6*/
function canConvertToDate(date) {

    let newdate = new Date(date);
    newdate = newdate.toDateString();
    return newdate !== 'Invalid Date';
}


/*Task 7 */
function daysBetween(firstDate, secondDate) {
    const DAYS = 86400000;
    let startDay = firstDate.getTime();
    let endDay = secondDate.getTime();
    console.log(endDay);
    return Math.abs(Math.floor((startDay - endDay)/DAYS));
}
/* Task 8 */
function getAmountOfAdultPeople(data) {
    let year = 365;
    let yearsOldArr = [];
    let old = 18;
  
    for (let index = 0; index < data.length; index++) {
      yearsOldArr.push(Math.floor(daysBetween(new Date(),
      new Date(data[index]['birthday'])) / year));
    }
  
    return filterArray(yearsOldArr, el => el >= old).length;
  }

/* Task 9 */
function keys(data) {
    let arr = [];

    for(let key in data) {
        if (data.hasOwnProperty(key)){
            arr.push(key);
        }
    }
    return arr;
}


/* Task 10 */
function values(data) {
    let arr = [];

    for(let arg in data) {
        if (data.hasOwnProperty(arg)){
            arr.push(data[arg]);
        }
    }
    return arr;
}