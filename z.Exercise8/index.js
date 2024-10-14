import yearUntilRetirement from "./hitung.js";
import { addNumber as tambah } from "./add.js";
import calculateArea from "./area.js";
import makeAjaxRequest from "./request.js";

// 1. Calculate age and retirement
yearUntilRetirement({ year: 1987, firstName: "John" });

// 2. Add numbers
console.log(tambah(1, 2, 3, 4, 5, 6, 7));

// 3. Calculate area
const power = 2;
let radius = 21;
const area21 = calculateArea({ radius, power });
radius = 7;
const area7 = calculateArea({ radius, power });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Make AJAX request
makeAjaxRequest("www.google.com");
