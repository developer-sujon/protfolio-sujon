import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

//Internal Import
import EmailRequest from "../../APIRequest/EmailRequest";
import AleartMessage from "../../helper/AleartMessage";
import { Link } from "react-router-dom";

const EmailList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    EmailRequest.EmailList(pageNumber, perPage, searchKey);
  }, [pageNumber, perPage, searchKey]);

  const { EmailList, TotalEmail } = useSelector((state) => state.Email);

  const perPageOnChange = (e) => {
    setPerPage(e.target.value);
  };

  const searchKeywordOnChange = (e) => {
    const key = e.target.value || 0;
    setSearchKey(key);
  };

  const searchData = () => {
    EmailRequest.EmailList(pageNumber, perPage, searchKey);
  };

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
    console.log(pageNumber);
    console.log(e.selected);
  };

  const deleteEducaion = (id) => {
    AleartMessage.deleteAleart(EmailRequest.EmailDelete, id).then(() => {
      EmailRequest.EmailList(pageNumber, perPage, searchKey);
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <h5>My Email List {TotalEmail}</h5>
                  </div>
                  <div className="col-2">
                    <select
                      onChange={perPageOnChange}
                      className="form-control mx-2 form-select-sm form-select form-control-sm"
                    >
                      <option value="5" selected>
                        5 Per Page
                      </option>
                      <option value="10">10 Per Page</option>
                      <option value="20">20 Per Page</option>
                      <option value="30">30 Per Page</option>
                      <option value="50">50 Per Page</option>
                      <option value="100">100 Per Page</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <input
                        onChange={searchKeywordOnChange}
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search.."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        onClick={searchData}
                        className="btn  btn-outline-primary btn-sm mb-0"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive data-table">
                      <table className="table ">
                        <thead className="sticky-top bg-white">
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              To
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Name
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Message
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {EmailList &&
                            EmailList.map((item, i) => (
                              <tr>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.To}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.Name}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.Message}
                                  </p>
                                </td>
                                <td>
                                  <Button
                                    className="btn-xm mb-0 bg-gradient-danger"
                                    onClick={() => deleteEducaion(item._id)}
                                  >
                                    <AiFillDelete />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 mt-5">
                    <nav aria-label="Page navigation example">
                      <ReactPaginate
                        previousLabel="<"
                        nextLabel=">"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={TotalEmail / perPage}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="pagination"
                        activeClassName="active"
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
