import http from 'k6/http';
import { check } from "k6";
import { params } from '../config.js';

// export const options = {
//   stages: [
//     { duration: '2m', target: 2 }, 
//     { duration: '1m', target: 0 },
//   ],
// };

export default function() {

    const url = `https://api.loginextsolutions.com/DeliveryMediumApp/mile/v1/create`;

    const payload = JSON.stringify([
    {
        "employeeId": Date.now(),
        "userGroupName": "try",
        "branchName": "A",
        "deliveryMediumMasterName": "Jamesbond",
        "phoneNumber": 9892147964,
        "userName": "james0034",
        "password": "james0034"
    }
]);

    let response = http.post(url, payload, params);

    console.log('CREATE-DA:', response);

    check(response, { 'CREATE-ORDER-SUCCESS': (r) => r.status === 200 });
}