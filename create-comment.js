import http from 'k6/http';
import { check } from "k6";
import { params } from './config.js';

export const options = {
  stages: [
    { duration: '2m', target: 15000 }, 
    { duration: '1m', target: 0 },
  ],
};

export default function() {

    const url = `https://api.loginextsolutions.com/ShipmentApp/mile/v1/comment`;

    const payload = JSON.stringify({
    "orderNo": "ORD00002387",
    "comment": "This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.This is a long long long comment, please read it patiently.",
    "showToDA": "N"
});

    let response = http.post(url, payload, params);

    console.log('CREATE-ORDER-COMMENT:', response);

    check(response, { 'CREATE-ORDER-COMMENT:': (r) => r.status === 200 });
}