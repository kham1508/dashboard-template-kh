import { insertHeader, insertFooter, insertHead, insertNavButtons } from "./utils/page-layout.js";
import { readData } from "./utils/read-data.js";
import { insertValue } from "./utils/insert-value.js";
import { latest_year, updateYearSpans, first_year, last_year } from "./utils/update-years.js";
import { config } from "./config/config.js";
import { lineChart } from "./charts/line-chart.js";
import { barChart } from "./charts/bar-chart.js";
import { insertExpandButtons } from "./utils/expand-buttons.js";
import { downloadButton } from "./utils/download-button.js";
import { dateFormat } from "./utils/date-format.js";
import { populateInfoBoxes } from "./utils/info-boxes.js";

window.addEventListener("DOMContentLoaded", async () => {

    await insertHead("Charts");
    insertHeader();
    insertNavButtons();
    insertFooter();
    insertExpandButtons();

    // Insert values into page cards below

    // Content for card 1

    const card_1_value = (123456).toLocaleString();
    insertValue("card-1-value", card_1_value);


    // Content for card 2

    const card_2_value = 5.67;
    insertValue("card-2-value", card_2_value);


    // Content for card 3

    const card_3_value = 2.89;
    insertValue("card-3-value", card_3_value);


    // Content for card 4

    const card_4_value = (9876).toLocaleString();
    insertValue("card-4-value", card_4_value);


    // End page card content

    // Insert chart content below

    // Content for chart 1
    // BuildR placeholder chart start

    // Line chart example - replace with dynamic data as needed

    const line_chart_years = [2015, 2016, 2017, 2018, 2019, 2020];
    const line_chart_lines = [
        [1.2, 1.5, 1.7, 1.6, 1.8, 2.0],
        [0.8, 0.9, 1.0, 1.1, 1.2, 1.3]
    ];
    const line_chart_labels = ["Sector 1", "Sector 2"];
    lineChart({
        years: line_chart_years,
        lines: line_chart_lines,
        labels: line_chart_labels,
        canvas_id: "line-example",
        expanded_canvas_id: "line-example-expanded"
    });
    // BuildR placeholder chart end

    // End chart content

    // BuildR info boxes start
    populateInfoBoxes(
        [
            "Definitions",
            "Source",
            "What does the data mean?"
        ],
        [
            // DEFINITIONS BOX
            ``,

            // SOURCE BOX
            ``,

            // DATA MEANING BOX
            ``
        ]
    );
    // BuildR info boxes end


})
