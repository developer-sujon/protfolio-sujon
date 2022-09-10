import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

//Internal Import
import TestimonialRequest from "../../APIRequest/TestimonialRequest";
import AleartMessage from "../../helper/AleartMessage";
import { Link } from "react-router-dom";

const TestimonialList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    TestimonialRequest.TestimonialList(pageNumber, perPage, searchKey);
  }, [pageNumber, perPage, searchKey]);

  const { TestimonialList, TotalTestimonial } = useSelector(
    (state) => state.Testimonial,
  );

  const perPageOnChange = (e) => {
    setPerPage(e.target.value);
  };

  const searchKeywordOnChange = (e) => {
    const key = e.target.value || 0;
    setSearchKey(key);
  };

  const searchData = () => {
    TestimonialRequest.TestimonialList(pageNumber, perPage, searchKey);
  };

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
    console.log(pageNumber);
    console.log(e.selected);
  };

  const deleteEducaion = (id) => {
    AleartMessage.deleteAleart(TestimonialRequest.TestimonialDelete, id).then(
      () => {
        TestimonialRequest.TestimonialList(pageNumber, perPage, searchKey);
      },
    );
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
                    <h5>My Testimonial List {TotalTestimonial}</h5>
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
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder">
                              Image
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder">
                              Name
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder ps-2">
                              Description
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder">
                              Edit
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder">
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {TestimonialList &&
                            TestimonialList.map((item, i) => (
                              <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder ">
                                  <img
                                    src={item.Image}
                                    className="avatar me-3"
                                  />
                                </th>

                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.Name}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.Description}
                                  </p>
                                </td>

                                <td>
                                  <Link
                                    to={`/Testimonial-update/${item._id}`}
                                    className="btn-xm mb-0 bg-gradient-warning btn "
                                  >
                                    <AiOutlineEdit />
                                  </Link>
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
                        pageCount={TotalTestimonial / perPage}
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

export default TestimonialList;
