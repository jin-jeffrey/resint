import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./Applications.css"
import addbutton from './icons/add.png';
import editbutton from './icons/edit.png';
import deletebutton from './icons/delete.png';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import EditModal from './EditModal.js';
import Modal from './Modal.js';

const tableHead = {
  CompanyName: "Company",
  JobTitle: "Position",
  // CompanyDescription: "Description",
  JobLocation: "Location",
  Date: "Date",
  Action: "Actions"
};

const Table = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState([]);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [loaded, setLoaded] = React.useState(true);
  const [app, setApp] = React.useState({});
  const [applications, setApplications] = React.useState([]);

  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        applications
          .filter(application => application.CompanyName.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if(user){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "Uid": user?.uid
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://resint.herokuapp.com/getApps", requestOptions)
            .then(response => response.json())
            .then(result => {
              let res = result;
              searchData.current = throttle(val => {
                const query = val.toLowerCase();
                setCurrentPage(1);
                const data = cloneDeep(
                  result
                    .filter(application => application.CompanyName?.toLowerCase().indexOf(query) > -1)
                    .slice(0, countPerPage)
                );        
                setCollection(data);
              }, 400);
              setApp(res);
              setApplications(res);
              setCollection(cloneDeep(res.slice(0, countPerPage)));
              setLoaded(true);
            })
            .catch(error => console.log('error', error));
        }
}, [user])


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
    setCollection(cloneDeep(applications.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      if (keyD == "Action") {
        if (key.CompanyName == null) {
          return <td key={i}></td>;
        }
        return (
        <td key={i}>
          <button onClick={(event) => editOpened(event, key)}><img src={editbutton}/></button>
          <button onClick={(event) => deleteApplication(event, key.did)}><img src={deletebutton}/></button>
        </td>
        )
      } else if (keyD == "CompanyName") {
        return (<td className="Company" key={i}><a href={key.Link} target="_blank">{key[keyD]}</a></td>)
      } else if (keyD == "Date") {
        return (<td className="Date" key={i}>{updateDate(key[keyD])}</td>)
      } else {
        return <td className={keyD} key={i}>{key[keyD]}</td>;
      }
    });
    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td className={title} key={index}>{title}</td>
    ));
  };

  function updateDate(date) {
    if (date == null) {
      return "";
    } else {
      let year = date.substring(0,4);
      let month = date.substring(5,7);
      let day = date.substring(8,10);
      return month + "/" + day + "/" + year;
    }
  }

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

  function editOpened(e, application) {
    e.preventDefault();
    setEditOpen(true);
    setApp(application);
  }
  
  function updateAppList(application) {
    let temp = applications;
    temp.push(application);
    setApplications(temp);
    setCollection(cloneDeep(temp.slice(0, countPerPage)));
    searchData.current = throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        temp
          .filter(application => application.CompanyName?.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
    });
  };

  function editAppFromAppList(did, application) {
    // delete application with did from list, add new one
    let temp = applications;
    const idx = temp.findIndex(i => i.did === did);
    temp.splice(idx, 1);
    temp.push(application);
    setApplications(temp);
    setCollection(cloneDeep(temp.slice(0, countPerPage)));
    searchData.current = throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        temp
          .filter(application => application.CompanyName?.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
    });
  }

  return (
    <>
      { loaded &&
        <>
        <div className="box header-box">
          <button onClick={() => setIsOpen(true)}><img className="add-button" src={addbutton}/></button>
          <div className="search">
            <input
              className="search-input"
              placeholder="Search Applications"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </div>

        <table className="application-table">
          <thead>
            <tr>{headRow()}</tr>
          </thead>
          <tbody className="trhover">{tableData()}</tbody>
        </table>
        <div className="box">
          <Pagination
            className="pagination"
            pageSize={countPerPage}
            onChange={updatePage}
            current={currentPage}
            total={applications.length}
          />
        </div>
        {editOpen && <EditModal open={editOpen} onClose={() => setEditOpen(false)} userid={user?.uid} app={app} editAppFromAppList={editAppFromAppList}/>} 
        <Modal open={isOpen} onClose={() => setIsOpen(false)} userid={user?.uid} updateAppList={updateAppList}/>
        </>  
      }
    </>
  );
};
export default Table;
