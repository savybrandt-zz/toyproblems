/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
	var columns = {
		items: [$('td')[0].innerText, $('td')[4].innerText, $('td')[8].innerText, $('td')[12].innerText, $('td')[16].innerText],
		pounds: [$('td')[1].innerText, $('td')[5].innerText, $('td')[9].innerText, $('td')[13].innerText, $('td')[17].innerText],
		price: [$('td')[2].innerText, $('td')[6].innerText, $('td')[10].innerText, $('td')[14].innerText, $('td')[18].innerText],
		date: [$('td')[3].innerText, $('td')[7].innerText, $('td')[11].innerText, $('td')[15].innerText, $('td')[19].innerText]

	}
	$('th').on('click', function(e){
		console.log(e.target);
	})
});


//set click handler
//ident which column was clicked
//sort elements with same index for each row

//rerender table

//table =tbody
// rows = t.body.children

//get cell val

//get type

//th on click
	//coll index = this.index()
	//var type = get type(coll index)

//detatch rows and sort by cell value
	//rows.detatch.sort(row1, row2)

//append sorted rows
	//tbody.append(rows)