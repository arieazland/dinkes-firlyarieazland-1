const Express = require("express");
const app = Express();
const axios = require('axios');
const Router = Express.Router();
const Dotenv = require("dotenv");
// Set Moment Format engine
const Moment = require("moment");
require("moment/locale/id");  // without this line it didn't work
Moment.locale('id');

Dotenv.config({ path: './.env' });
const Connection = require ("../DBconnection");

/** Route for home */
Router.get('/', (req, res) => {
    res.send("Hello, welcome to API-DINKES-test Page")
})

/** Route for puskesmas */
Router.get('/datapuskesmas', (req, res) => {
    const Headers = {
        'Authorization': 'rahasia',
        'Content-Type': 'application/json'
        }
    let res1 = res;
    url = process.env.PUSKES_URL;
    axios.get(url, {headers: Headers})
    .then(function (res) {
        var datapuskes = res.data.data;
        console.log(datapuskes);
    })
    .catch(function (err) {
    // console.log(err);
    //var message = err.response.data.message;
    console.log(err);
    })
})

/** route for kecamatan */
Router.get('/datakecamatan', (req, res) => {
    const Headers = {
        'Authorization': 'rahasia',
        'Content-Type': 'application/json'
        }
    let res1 = res;
    url = process.env.KECAMATAN_URL;
    axios.get(url, {headers: Headers})
    .then(function (res) {
        var datakecamatan = res.data.data;
        console.log(datakecamatan);
    })
    .catch(function (err) {
    // console.log(err);
    //var message = err.response.data.message;
    console.log(err);
    })
})

/** Route for join */
Router.get('/join', (req, res) => {
    const Headers = {
        'Authorization': 'rahasia',
        'Content-Type': 'application/json'
        }
    let res1 = res;
    url1 = process.env.PUSKES_URL;
    axios.get(url1, {headers: Headers})
    .then(function (res) {
        var datapuskes = res.data.data;
        // var datakecamatan = res.data.data;
        // console.log(data);
        const Headers = {
            'Authorization': 'rahasia',
            'Content-Type': 'application/json'
            }
        let res1 = res;
        url2 = process.env.KECAMATAN_URL;
        axios.get(url2, {headers: Headers})
        .then(function (res) {
            var datakecamatan = res.data.data;
            // console.log(datapuskes)
            // console.log(datakecamatan)

            arrayList = [], obj_c_processed = [];

            for(var i in datakecamatan){
                if(datakecamatan[i].id_kecamatan === '317203'){
                    arrayList.push({id: datakecamatan[i].id_kecamatan})
                }
            }

            console.log(arrayList)
        })
        .catch(function (err) {
        // console.log(err);
        //var message = err.response.data.message;
        console.log("error");
        })
    })
    .catch(function (err) {
    // console.log(err);
    //var message = err.response.data.message;
    console.log(err);
    })
})


module.exports = Router;