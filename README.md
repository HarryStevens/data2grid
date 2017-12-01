# data2grid
Add a row and a column to a set of data so you can lay it out.

## <a name="installation" href="#installation">Installation</a>

### npm
```bash
npm install data2grid --save
```
```js
var data2grid = require("data2grid");
```

### Web browser

In vanilla, a `data2grid` global is exported. You can use the CDN from unpkg.
```html
<script src="https://unpkg.com/data2grid/build/data2grid.js"></script>
<script src="https://unpkg.com/data2grid/build/data2grid.min.js"></script>
```
If you'd rather host it yourself, download `data2grid.js` or `data2grid.min.js` from the [`build` directory](https://github.com/HarryStevens/data2grid/tree/master/build).
```html
<script src="path/to/data2grid.js"></script>
<script src="path/to/data2grid.min.js"></script>
```

## <a name="api" href="#api">API</a>

<a name="grid" href="#grid">#</a> data2grid.<b>grid</b>(<i>data array</i>[, <i>number of rows</i>])

For each object in your `data array`, adds properties for `row` and `column` so you can lay out the data. If you do not specify `number of rows`, uses `calcRows(data.length)` to calculate an optimal `number of rows`.

<a name="calcRows" href="#calcRows">#</a> data2grid.<b>calcRows</b>(<i>number of data points</i>)

Calculates the optimal number of rows for a `number of data points`. You can often pass `data.length` to get an optimal number of rows for a data array.