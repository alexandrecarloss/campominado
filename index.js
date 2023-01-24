function field(rows_count, cols_count, mines) {
    var rows = [];

    //put mines in field. If no mine, start with zero
    for (var i = 0; i < rows_count; i++) {
        rows[i] = [];
        for (var j = 0; j < cols_count; j++) {
            if (mines.map(x => JSON.stringify(x)).includes("["+i +","+j +"]")) {
                rows[i][j] = "*";
            } else {
                rows[i][j] = 0;
            }
        }
    }
    //sum numbers now that mines are there
    for (var i = 0; i < rows_count; i++) {
        for (var j = 0; j < cols_count; j++) {
            if (rows[i][j] != '*') {
                if (rows[i - 1] !== undefined && rows[i - 1][j - 1] === '*') rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j    ] === '*') rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j + 1] === '*') rows[i][j]++;

                if (rows[i][j - 1] === '*') rows[i][j]++;
                if (rows[i][j + 1] === '*') rows[i][j]++;

                if (rows[i + 1] !== undefined && rows[i + 1][j - 1] === '*') rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j    ] === '*') rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j + 1] === '*') rows[i][j]++;
            }
        }
    }

    return rows;
}

function drawTable(rows) {
    var table = document.getElementById('field');
    for (row of rows) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (col of row) {
            var td = document.createElement('td');
            td.textContent = col;
            tr.appendChild(td)
        }       
    }
}

    var mines = [[0,7], [3,3], [5,2], [7,7], [4,2], [1,2]];
    drawTable(field(8, 8, mines));
