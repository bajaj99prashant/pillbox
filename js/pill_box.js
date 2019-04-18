document.getElementById('inputBranch').addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
			var p = document.getElementById('branchList');
			var newip = document.createElement('li');
			var inp = document.getElementById('inputBranch').value.replace(/\s/g, '');
			newip.setAttribute('id', `${inp}`);
			newip.setAttribute('onclick', `deleteIt(${inp})`);
			newip.classList.add('list');
			newip.innerHTML = `${inp}&nbsp;&nbsp;&times;`;
			p.appendChild(newip);
    }
});

function deleteIt(ide) {
	var list = document.getElementById('branchList');
	list.removeChild(ide);
}