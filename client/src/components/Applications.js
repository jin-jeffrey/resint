import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./Applications.css"
import addbutton from './icons/add.png';
import editbutton from './icons/edit.png';
import deletebutton from './icons/delete.png';
import { allData } from "./constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import EditModal from './EditModal.js';
import NavBar from "./NavBar";
import Footer from "./Footer";
const tableHead = {
  CompanyName: "Company",
  JobTitle: "Position",
  CompanyDescription: "Description",
  JobLocation: "Location",
  Notes: "Notes",
  Date: "Date",
  Action: "Actions"
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    event.stopPropagation();
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0;i < dropdowns.length;i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        event.stopPropagation();

      }
    }
  }
}
const Table = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const [viewOpen, setViewOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [app, setApp] = React.useState({});

  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter(application => application.CompanyName.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      if (keyD == "Action") {
        return (
          <td key={i}>
            <button onClick={(event) => editOpened(event, key)}><img src={editbutton} /></button>
            <button onClick={(event) => deleteApplication(event, key.did)}><img src={deletebutton} /></button>
          </td>
        )
      } else if (keyD == "CompanyName") {
        return (<td key={i}><a href={key.Link} target="_blank">{key[keyD]}</a></td>)
      } else {
        return <td key={i}>{key[keyD]}</td>;
      }
    });
    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  function deleteApplication(e, did) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Uid": user?.uid,
      "did": did
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://resint.herokuapp.com/deleteApp", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }



  async function editOpened(e, application) {
    e.preventDefault();
    setEditOpen(true);
    setApp(application);
  }

  return (
    <>
      <nav className="navbar1">
        <a href="/" className="logo1"></a>
        <ul className="main_nav">
          <li>
            <a href="/resint" className="nav_links">Home</a>
          </li>
          <li>
            <a href="/apps" className="nav_links">My Applications</a>
          </li>
          <li>
            <a href="/getCode" className="nav_links">Get Code</a>
          </li>
          <li>
            <a>
              <div className="dropdown">
                <button onClick={myFunction} className="dropbtn">Search</button>
                <div id="myDropdown" className="dropdown-content">

                  <div className="search">
                    <input
                      placeholder="Search Applications"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />
                  </div>

                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/#" className="nav_links">Logout</a>
          </li>
        </ul>
      </nav>

      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        className="pagination"
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
      />
      {editOpen && <EditModal open={editOpen} onClose={() => setEditOpen(false)} userid={user?.uid} app={app} />}
      <Footer />
   
    </>
  );
};
export default Table;
