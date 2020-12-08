let records = [{
    "ninumber": "ZS502747A",
    "fullname": "Chris P Bacon",
    "phone": "07659-831024",
    "adressess": "123 Elliot Hill",
    "department": "IT"
}, {
    "ninumber": "XS130502B",
    "fullname": "Miles A Head",
    "phone": "07666-616680",
    "adressess": "321 Haha Road",
    "department": "Sales"
}, {
    "ninumber": "MY034526D",
    "fullname": "Rick O'Shea",
    "phone": "07440-003065",
    "adressess": "64 Zoo Lane",
    "department": "HR"
}, {
    "ninumber": "AK311470",
    "fullname": "Robyn Banks",
    "phone": "07342-472921",
    "adressess": "324 Langton Ridgeway",
    "department": "HR"
}, {
    "ninumber": "LY682275B",
    "fullname": "Lorne Mowers",
    "phone": "07822-821023",
    "adressess": "234 Julian Market",
    "department": "IT"
}, {
    "ninumber": "BK227215B",
    "fullname": "Frank N Stein",
    "phone": "07661-522545",
    "adressess": "12 Springfield Grange",
    "department": "Sales"
}, {
    "ninumber": "XB363374C",
    "fullname": "Hedda Hare",
    "phone": "07563-758264",
    "adressess": "54 Blackbird Crescent",
    "department": "IT"
}, {
    "ninumber": "MY501327A",
    "fullname": "Upton O Goode",
    "phone": "07401-414740",
    "adressess": "2 St Margarets Drive",
    "department": "IT"
}, {
    "ninumber": "TT405395B",
    "fullname": "Marius Quick",
    "phone": "07870-297789",
    "adressess": "98 Earl Path",
    "department": "IT"
}, {
    "ninumber": "AZ764036A",
    "fullname": "Max E Mumm",
    "phone": "07872-642897",
    "adressess": "233 Lady Smith Avenue",
    "department": "IT"
}, {
    "ninumber": "ES73841C",
    "fullname": "Yul B Allwright",
    "phone": "07750-872412",
    "adressess": "45 Fountains Broadway",
    "department": "Sales"
}, {
    "ninumber": "WX465470A",
    "fullname": "Lori Driver",
    "phone": "07773-782275",
    "adressess": "65 Burlington Lodge",
    "department": "HR"
}, {
    "ninumber": "AK625470D",
    "fullname": "Shirley U Care",
    "phone": "07569-060117",
    "adressess": "97 Holderness Drive",
    "department": "HR"
}, {
    "ninumber": "SW098272B",
    "fullname": "Felix Cited",
    "phone": "07394-529507",
    "adressess": "32 Banningham Court",
    "department": "Sales"
}, {
    "ninumber": "OB043941D",
    "fullname": "Sandy Beech",
    "phone": "07958-301691",
    "adressess": "3 Third Mount",
    "department": "Sales"
}];

	
var i = 0;

function showdata() {
	var table = document.getElementById("hrtable");
	for (; i < records.length; i++) {
		var row = table.insertRow();
		var NI = row.insertCell(0);
		var name = row.insertCell(1);
		var telephone = row.insertCell(2);
		var adress = row.insertCell(3);
		var depart = row.insertCell(4);
		var deletee = row.insertCell(5);
		var edit = row.insertCell(6);
		var editRowId = row.insertCell(7);
		row.id = i;
		NI.innerHTML = records[i]["ninumber"];
		name.innerHTML = records[i]["fullname"];
		telephone.innerHTML = records[i]["phone"];
		adress.innerHTML = records[i]["adressess"];
		depart.innerHTML = records[i]["department"];
		var rownumber = row.rowIndex;
		deletee.id = i;
		editRowId.innerHTML = i;
		editRowId.style.visibility = "hidden";
		var nationalInsuranceNumber = records[i]["ninumber"];
		deletee.innerHTML = '<button type="button" class="btn btn-primary delete" id="' + i + '" onclick="deletedRecord(this.id)">Delete</button>';
		edit.innerHTML = '<button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#editModal" id="' + i + '" onclick="editRecord(this.id)">Edit</button>';
	}
	filterOptions();
}

function click() {}

function filterOptions() {
	var filterButton = document.getElementById("Departments");
	filterLength = filterButton.length;
	for (x = filterLength - 1; x >= 0; x--) {
		filterButton.options[x] = null;
	}
	var option = document.createElement("option");
	option.text = "...";
	filterButton.add(option);
	var distinctDepartments = [...new Set(records.map(x => x.department))];
	for (var y = 0; y < distinctDepartments.length; y++) {
		if (distinctDepartments[y] != undefined) {
			var option = document.createElement("option");
			option.text = distinctDepartments[y];
			filterButton.add(option);
		}
	}
}

function filterTable(selection = 1) {
	var dropdown = document.getElementById("Departments");
	if (selection != 1) {
		dropdown.value = selection;
	}
	var departmentSelection = dropdown.value;
	var table = document.getElementById("hrtable");
	var row = table.rows
	
	for (var y=1; y < row.length; y++) {
		if (row[y].style.visibility == "collapse") {
			continue;
		} else {
			row[y].style.display = "";
		}
	}
	for (var x=1; x < row.length; x++) {
		currentRow = row[x];
		if (departmentSelection == "...") {
			break;
		}
		currentRowDepartment = currentRow.cells[4].innerHTML;
		if (currentRowDepartment != departmentSelection) {
			currentRow.style.display = "none";
		}
	}
}

function clearFilter() {
	var table = document.getElementById("hrtable");
	var row = table.rows
	var x = 1;
	var y = 1;
	for (; y < row.length; y++) {
		if (row[y].style.visibility == "collapse") {
			continue;
		} else {
			row[y].style.display = "";
		}
	}
	filterOptions();
}

function deletedRecord(x) {
	var table = document.getElementById("hrtable");
	delete records[x];
	var row = table.rows;
	var numberX = parseInt(x) + 1;
	x = parseInt(x);
	var number = 1;
	rowId = row[numberX].id;
	row[numberX].style.visibility = "collapse";
	var dropdown = document.getElementById("Departments");
	var departmentSelection = dropdown.value;
	// filterOptions();
	// filterTable(departmentSelection);
}

function editRecord(x) {
	cancel();
	var table = document.getElementById("hrtable");
	var row = table.rows;
	var numberX = parseInt(x) + 1;
	var currentRow = row[numberX];
	var show = document.getElementById("editModal");
	show.style.visibility = "";
	editedNino = document.getElementById("editNI");
	editedNino.value = currentRow.cells[0].innerHTML;
	editedName = document.getElementById("editName");
	editedName.value = currentRow.cells[1].innerHTML;
	editedPhone = document.getElementById("editPhone");
	editedPhone.value = currentRow.cells[2].innerHTML;
	editedadressess = document.getElementById("editadressess");
	editedadressess.value = currentRow.cells[3].innerHTML;
	editedDepartment = document.getElementById("editDepartment");
	editedDepartment.value = currentRow.cells[4].innerHTML;
	editedIValue.value = x;
}

function saveRecords() {
	var table = document.getElementById("hrtable");
	var row = table.rows;
    var iValue = document.getElementById("editedIValue").value;

	iValue = parseInt(iValue) +1;
	var currentRow = row[iValue];
	editedNino = document.getElementById("editNI");
	newNinoValue = editedNino.value;
	currentRow.cells[0].innerHTML = newNinoValue;
	editedName = document.getElementById("editName");
	newNameValue = editedName.value;
	currentRow.cells[1].innerHTML = newNameValue;
	editedPhone = document.getElementById("editPhone");
	newPhoneValue = editedPhone.value;
	currentRow.cells[2].innerHTML = newPhoneValue;
	editedadressess = document.getElementById("editadressess");
	newadressessValue = editedadressess.value;
	currentRow.cells[3].innerHTML = newadressessValue;
	editedDepartment = document.getElementById("editDepartment");
	newDepartmentValue = editedDepartment.value;
	currentRow.cells[4].innerHTML = newDepartmentValue;
	var recordsIValue = iValue;
	recordsIValue -= 1;
	records[recordsIValue]["ninumber"] = newNinoValue;
	records[recordsIValue]["fullname"] = newNameValue;
	records[recordsIValue]["phone"] = newPhoneValue;
	records[recordsIValue]["adressess"] = newadressessValue;
	records[recordsIValue]["department"] = newDepartmentValue;
	cancel1();
	var dropdown = document.getElementById("Departments");
	var departmentSelection = dropdown.value;
	filterOptions();
	filterTable(departmentSelection);
}

function addNew() {
	cancel1();
	var show = document.getElementById("form");
	show.style.display = "";
}

function cancel() {
	var show = document.getElementById("editModal");
	show.style.display = "none";
	var newNI = document.getElementById("NewNI");
	var newName = document.getElementById("newName");
	var newPhone = document.getElementById("newPhone");
	var newadressess = document.getElementById("newadressess");
	var newDepartment = document.getElementById("newDepartment");
	newNI.value = "";
	newName.value = "";
	newPhone.value = "";
	newadressess.value = "";
	newDepartment.value = "";
}

function cancel1() {
	var show = document.getElementById("editModal");
	show.style.visibility = "collapse";
}

function submit1() {
	var NewNI = document.getElementById("NewNI");
	var newName = document.getElementById("newName");
	var newPhone = document.getElementById("newPhone");
	var newadressess = document.getElementById("newadressess");
	var newDepartment = document.getElementById("newDepartment");
	var data = {
		"ninumber": NewNI.value,
		"fullname": newName.value,
		"phone": newPhone.value,
		"adressess": newadressess.value,
		"department": newDepartment.value
	};
	records.push(data);
	var show = document.getElementById("mytable");
	var table = document.getElementById("hrtable");
	var row = table.insertRow();
	var NI = row.insertCell(0);
	var name = row.insertCell(1);
	var telephone = row.insertCell(2);
	var adress = row.insertCell(3);
	var depart = row.insertCell(4);
	var deletee = row.insertCell(5);
	var edit = row.insertCell(6);
	var editRowId = row.insertCell(7);
	row.id = i;
	editRowId.innerHTML = i
	editRowId.style.visibility = "hidden";
	NI.innerHTML = NewNI.value;
	name.innerHTML = newName.value;
	telephone.innerHTML = newPhone.value;
	adress.innerHTML = newadressess.value;
	depart.innerHTML = newDepartment.value;
	NewNI.value = "";
	newName.value = "";
	newPhone.value = "";
	newadressess.value = "";
	newDepartment.value = "";
	deletee.innerHTML = '<button type="button" class="btn btn-primary delete" id="' + i + '" onclick="deletedRecord(this.id)">Delete</button>';
	edit.innerHTML = '<button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#editModal" id="' + i + '" onclick="editRecord(this.id)">Edit</button>';
	i++;
	filterOptions();
}

window.onload = showdata; 