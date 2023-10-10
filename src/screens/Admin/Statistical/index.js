import React from "react";
import viewStyles from "./Statistical.module.scss";

const Overview = () => {
  const data = [
    {
      class: viewStyles["views__icon1"],
      name: `Lượt views`,
      background: `#ec7c2c`,
      number: 70
    },
    {
      class: viewStyles["views__icon2"],
      name: `Lượt thích`,
      background: `#7dce45`,
      number: 50
    },
    {
      class: viewStyles["views__icon3"],
      name: `Lượt hủy`,
      background: `#999`,
      number: 17
    }
  ];

  const renderBarSegments = () => {
    let segments = [];
    let totalWidth = 0;

    data.forEach((item, index) => {
      const segmentWidth = (item.number / getTotalNumber()) * 100;
      const segmentStyle = {
        width: `${segmentWidth}%`,
        background: item.background,
        height: `21px`
      };

      segments.push(
        <div
          key={index}
          className={viewStyles["views__bar-segment"]}
          style={segmentStyle}
        ></div>
      );

      totalWidth += segmentWidth;
    });

    // Xử lý lỗi làm tròn
    if (totalWidth < 100) {
      const remainingWidth = 100 - totalWidth;
      const remainingSegmentStyle = {
        width: `${remainingWidth}%`,
        $background: data[data.length - 1].background
      };

      segments.push(
        <div
          key={data.length}
          className={viewStyles["views__bar-segment"]}
          style={remainingSegmentStyle}
        ></div>
      );
    }

    return segments;
  };

  const getTotalNumber = () => {
    return data.reduce((total, item) => total + item.number, 0);
  };

  return (
    <div className={viewStyles["views"]}>
      <div className={viewStyles["views__box"]}>
        <div className={viewStyles["views__header"]}>Thống kê</div>
        <div className={viewStyles["views__content"]}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className={viewStyles["views__bar"]}>{renderBarSegments()}</div>
          <div className={viewStyles["views__des"]}>
            {data.map((item, index) => (
              <div className={viewStyles["views__item"]} key={index}>
                <div className={viewStyles["views__text"]}>
                  <div className={item.class}></div>
                  <p>{item.name}</p>
                </div>
                <div className={viewStyles["views__number"]}>{item.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
