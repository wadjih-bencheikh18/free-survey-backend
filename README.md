This website made with  <br />
frontend : gatsby tailwind  <br />
axios : integration <br />
backend : nodejs express <br />
<br />
<br />
to start the website locally you need two part(backend and front) <br />
backend : https://github.com/wadjih-bencheikh18/free-survey-backend <br />
frontend: https://github.com/wadjih-bencheikh18/free-survey-frontend <br />
<br />
I-Backend: <br />
  1- clone backend project: <br />
    - open your cmd <br />
    - tape :  <br />
      > git clone https://github.com/wadjih-bencheikh18/free-survey-backend.git  <br />
        (to install git : https://git-scm.com/book/en/v2/ <br />Getting-Started-Installing-Git) <br />
    - go to cloned repo :  <br />
      > cd free-survey-backend <br />
  2- install packages : <br />
      > yarn install or > npm install <br />
        (to install yarn : https://classic.yarnpkg.com/en/docs/install) <br />
  3- start our local server in port 8080 : <br />
      > npm start <br />
 <br />
II-Fontend: <br />
  1- clone backend project: <br />
    - open your cmd <br />
    - tape :  <br />
      > git clone https://github.com/wadjih-bencheikh18/free-survey-fontend.git  <br />
        (to install git : https://git-scm.com/book/en/v2Getting-Started-Installing-Git) <br />
    - go to cloned repo :  <br />
      > cd free-survey-fontend <br />
  2- install packages : <br />
      > yarn install or > npm install <br />
        (to install yarn : https://classic.yarnpkg.com/en/docs/install) <br />
  3- start your local website in port 8080 : <br />
      > npm start <br />
  4- enter the website using navigator on: http://localhost:8000 <br />
 <br />
 <br />
 <br />
How to add external data persistence? <br />
 <br />
if we want to use external data persistence we reather use "MongoDb" by following the next steps: <br />
1- add MongoDb and mongoose to our project: <br />
  > yarn add mongodb mongoose -D <br />
2- connect to our database (we can use atlas) <br />
  exmple :mongoose.connect("mongodb+srv://wadjih:<password>@freesurvey.4qkzo.mongodb.net/myFirstDatabase?retryWrites=true&  w=majority"); <br />
3- create surveys mongoose Schema <br />
4- create our api using express router <br />