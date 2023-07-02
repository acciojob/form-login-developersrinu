

function getFormvalue() {
    const firstName = Document.getElementByTagName('input')[0].value
	 const lastName = Document.getElementByTagName('input')[1].value
	return firstName+lastName;
}
