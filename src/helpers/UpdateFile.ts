import * as fs from 'fs';
import * as path from 'path';
import IData from '../interfaces/IData';

export default function UpdateFile(newData: IData) {
    // Define the path to the JSON file
const filePath = path.dirname("./src/dbjson.json")

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    let jsonData = JSON.parse(data);

    // Update the JSON data
    jsonData.firstName = newData.firstName;
    jsonData.lastName = newData.lastName;
    jsonData.streetAddress = newData.streetAddress;
    jsonData.city = newData.city;
    jsonData.state = newData.state;
    jsonData.postalCode = newData.postalCode;
    jsonData.policyNumber = newData.policyNumber;
    jsonData.policyEffectiveDate = newData.policyEffectiveDate;
    jsonData.currentBalance = newData.currentBalance;
    jsonData.amountDue = newData.amountDue;

    // Convert the updated JSON data back to a string
    const updatedData = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON data back to the file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File successfully updated!');
    });
});
}