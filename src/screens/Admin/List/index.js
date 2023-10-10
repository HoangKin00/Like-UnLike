import React, { useEffect, useState } from "react";
import { PUBLIC_URL } from "../../../utils/const";
import listStyles from "./List.module.scss";

const List = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Dữ liệu cứng tạm thời
    const staticData = [
      {
        id: 1,
        title: "Nguyen Van A",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 2,
        title: "Tran Thi B",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "4000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 3,
        title: "Le Van C",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 4,
        title: "Pham Thi D",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3500",
        likes: 10,
        unlikes: 5
      },
      {
        id: 5,
        title: "Hoang Van E",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 6,
        title: "Do Thi F",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "5000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 7,
        title: "Vu Van G",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 8,
        title: "Truong Thi H",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3000",
        likes: 10,
        unlikes: 5
      },
      {
        id: 9,
        title: "Do Thi F",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3200",
        likes: 10,
        unlikes: 5
      },
      {
        id: 10,
        title: "Vu Van G",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "4500",
        likes: 10,
        unlikes: 5
      },
      {
        id: 11,
        title: "Truong Thi H",
        url: "http://localhost:3000/quan-tri",
        ip: "12345",
        views: "3060",
        likes: 10,
        unlikes: 5
      }
    ];
    setData(staticData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(Math.ceil(data.length / itemsPerPage));
  };

  const handleCheckboxChange = (itemId) => {
    const isSelected = selectedItems.includes(itemId);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div className={listStyles["list"]}>
      <div className={listStyles["list__box"]}>
        <div className={listStyles["list__header"]}>
          <div className={listStyles["list__title"]}>Trang quản trị</div>
          <div className={listStyles["list__icon"]}>
            <img src={`${PUBLIC_URL}/icons/notii.svg`} alt="" />
          </div>
        </div>
        <div className={listStyles["list__filter"]}>
          <div className={listStyles["list__search"]}>
            <input type="search" placeholder="Tìm kiếm" />
          </div>
          <div className={listStyles["list__select"]}>
            <select name="" id="">
              <option value="">Trạng thái</option>
              <option value="">Lượt view {">="} 30</option>
              <option value="">Lượt view 31 dến 40</option>
            </select>
          </div>
          <div className={listStyles["list__select"]}>
            <select name="" id="">
              <option value="">Trạng thái</option>
              <option value="">Lượt thích {">="} 30</option>
              <option value="">Lượt thích 31 dến 40</option>
            </select>
          </div>
          <div className={listStyles["list__select"]}>
            <select name="" id="">
              <option value="">Trạng thái</option>
              <option value="">Lượt hủy {">="} 30</option>
              <option value="">Lượt hủy 31 dến 40</option>
            </select>
          </div>
        </div>
        <div className={listStyles["list__content"]}>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>URL</th>
                <th>IP</th>
                <th>Views</th>
                <th>Lượt thích</th>
                <th>Lượt hủy</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id} className={listStyles["list__row"]}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.ip}</td>
                  <td>{item.views}</td>
                  <td>{item.likes}</td>
                  <td>{item.unlikes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={listStyles["list__pagi"]}>
          {data.length > itemsPerPage && (
            <ul>
              <li>
                <div
                  onClick={goToFirstPage}
                  className={listStyles["list__arrow"]}
                >
                  <img src={`${PUBLIC_URL}/icons/left1.svg`} alt="" />
                </div>
              </li>
              {currentPage > 1 && (
                <li>
                  <div
                    onClick={goToPreviousPage}
                    className={listStyles["list__arrow"]}
                  >
                    <img src={`${PUBLIC_URL}/icons/left.svg`} alt="" />
                  </div>
                </li>
              )}
              {Array(Math.ceil(data.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={
                        currentPage === index + 1
                          ? listStyles["list__pagiActive"]
                          : ""
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              {currentPage < Math.ceil(data.length / itemsPerPage) && (
                <li>
                  <div
                    onClick={goToNextPage}
                    className={listStyles["list__arrow"]}
                  >
                    <img src={`${PUBLIC_URL}/icons/right.svg`} alt="" />
                  </div>
                </li>
              )}
              <li>
                <div
                  onClick={goToLastPage}
                  className={listStyles["list__arrow"]}
                >
                  <img src={`${PUBLIC_URL}/icons/right1.svg`} alt="" />
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
