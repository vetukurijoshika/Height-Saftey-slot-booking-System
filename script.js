document.getElementById('fetchSafetyBeltDataBtn').addEventListener('click', fetchSafetyBeltData);
document.getElementById('addBtn').addEventListener('click', addEntry);
document.getElementById('modifyBtn').addEventListener('click', modifyEntry);
document.getElementById('clearBtn').addEventListener('click', clearEntries);
document.getElementById('submitSaveBtn').addEventListener('click', submitSave);
document.getElementById('exitBtn').addEventListener('click', exit);

function fetchSafetyBeltData() {
    //const partyCode = document.getElementById('partyCode').value;
    const agency = document.getElementById('beltAgency').value;

    if (!agency) {
        alert('Please select the agency.');
        return;
    }

    // Fetch safety belt data based on the party code and agency
    const safetyBeltData = generateSafetyBeltData(agency);
    displaySafetyBeltData(safetyBeltData);
}

function generateSafetyBeltData(agency) {
    // Example data, replace with actual API call if needed
    return [
        { batchNo: 'B001', serialNo: 'S001', bisLicenseNo: 'L001', make: 'Make1', mfgDate: '2022-01-01', shellLife: '5 years', certificateValidity: '2024-12-31', remarks: 'Good', expiryDate: '2027-01-01', status: 'Valid' },
        { batchNo: 'B002', serialNo: 'S002', bisLicenseNo: 'L002', make: 'Make2', mfgDate: '2022-02-01', shellLife: '5 years', certificateValidity: '2024-12-31', remarks: 'Good', expiryDate: '2027-02-01', status: 'Valid' },
        { batchNo: 'B003', serialNo: 'S003', bisLicenseNo: 'L003', make: 'Make3', mfgDate: '2022-03-01', shellLife: '5 years', certificateValidity: '2024-12-31', remarks: 'Good', expiryDate: '2027-03-01', status: 'Valid' }
    ];
}

function displaySafetyBeltData(data) {
    const safetyBeltDataDiv = document.getElementById('safetyBeltData').getElementsByTagName('tbody')[0];
    safetyBeltDataDiv.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const row = document.createElement('tr');

        const batchNoCell = document.createElement('td');
        batchNoCell.textContent = item.batchNo;
        row.appendChild(batchNoCell);

        const serialNoCell = document.createElement('td');
        serialNoCell.textContent = item.serialNo;
        row.appendChild(serialNoCell);

        const bisLicenseNoCell = document.createElement('td');
        bisLicenseNoCell.textContent = item.bisLicenseNo;
        row.appendChild(bisLicenseNoCell);

        const makeCell = document.createElement('td');
        makeCell.textContent = item.make;
        row.appendChild(makeCell);

        const mfgDateCell = document.createElement('td');
        mfgDateCell.textContent = item.mfgDate;
        row.appendChild(mfgDateCell);

        const shellLifeCell = document.createElement('td');
        shellLifeCell.textContent = item.shellLife;
        row.appendChild(shellLifeCell);

        const certificateValidityCell = document.createElement('td');
        certificateValidityCell.textContent = item.certificateValidity;
        row.appendChild(certificateValidityCell);

        const remarksCell = document.createElement('td');
        remarksCell.textContent = item.remarks;
        row.appendChild(remarksCell);

        const expiryDateCell = document.createElement('td');
        expiryDateCell.textContent = item.expiryDate;
        row.appendChild(expiryDateCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = item.status;
        row.appendChild(statusCell);

        safetyBeltDataDiv.appendChild(row);
    });
}

function addEntry() {
    // Function to add new entry
    alert('Add entry function called');
}

function modifyEntry() {
    // Function to modify an existing entry
    alert('Modify entry function called');
}

function clearEntries() {
    // Function to clear all entries
    document.getElementById('safetyBeltData').getElementsByTagName('tbody')[0].innerHTML = '';
}

function submitSave() {
    // Function to submit or save the data
    alert('Submit/Save function called');
}

function exit() {
    // Function to exit the application
    alert('Exit function called');
}
