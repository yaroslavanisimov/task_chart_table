const labels = ["January", "February", "March", "April", "May", "June"];


type Data = {
  data : string;
  first : string;
  last : string;
  email: string;
  address: any;
  created: any;
  balance: string
  labels: any;
  datasets: any;
}

declare var Chart: any;

const data = <Data>{
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const chartEl = document.getElementById("myChart");

const myChart = new Chart(chartEl, config);
const loading = false;

function showSpinner() {
  document.querySelector(".tBody")!.innerHTML = `
            <tr>
                <td>Loading</td>
            </tr>
        `;
}

function renderError() {
  document.querySelector(".tBody")!.innerHTML = `
            <tr>
                <td>Error</td>
            </tr>
        `;
}

function renderTable(data) {
  let html = "";

  data.forEach((element) => {
    html += "<tr>";
    html += `<td>${element.first}</td>`;
    html += `<td>${element.last}</td>`;
    html += `<td>${element.email}</td>`;
    html += `<td>${element.address}</td>`;
    html += `<td>${element.created}</td>`;
    html += `<td>${element.balance}</td>`;
    html += "</tr>";
  });

  document.querySelector(".tBody")!.innerHTML = html;
}

async function fetchData() {
  try {
    showSpinner();
    const res = await fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    );
    const data = await res.json();

    renderTable(data);
  } catch {
    renderError();
  } finally {
  }
}
