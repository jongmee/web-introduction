function countChecked() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var checkedCount = checkboxes.length;

    var name = document.querySelector('input[type="text"][name="name"]').value;
    alert(name + '님, 저와 ' + checkedCount + '개의 취향이 같으시네요!');
}
