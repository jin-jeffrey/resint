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

const tableHead = {
  CompanyName: "Company",
  JobTitle: "Position",
  CompanyDescription: "Description",
  JobLocation: "Location",
  Notes: "Notes",
  Date: "Date",
  Action: "Actions"
};

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
          <button onClick={(event) => editOpened(event, key)}><img src={editbutton}/></button>
          <button onClick={(event) => deleteApplication(event, key.did)}><img src={deletebutton}/></button>
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
      <div class="search">
        <input
          placeholder="Search Applications"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
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
      {editOpen && <EditModal open={editOpen} onClose={() => setEditOpen(false)} userid={user?.uid} app={app}/>}
    </>
  );
};
export default Table;
