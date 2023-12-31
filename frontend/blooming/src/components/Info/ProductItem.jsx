import { useState } from "react";
import classes from "./ProductItem.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { customAxios } from "../../lib/axios";

export default function ProductItem({ product, onClick }) {
  const address = product.companyAddress
    ? product.companyAddress.split(" ")
    : null;
  const [productHeart, setProductHeart] = useState(product.wish);

  const handleCreateWish = async () => {
    try {
      await customAxios.post(`wishlist/${product.id}`);
      setProductHeart(!productHeart);
    } catch (error) {
      // console.error("찜하기 에러:", error);
    }
  };
  const handleDeleteWish = async () => {
    try {
      await customAxios.delete(`wishlist/${product.id}`);
      setProductHeart(!productHeart);
    } catch (error) {
      // console.error("찜취소 에러:", error);
    }
  };
  const onWish = () => {
    // 찜
    if (productHeart) {
      // true이면 DELETE
      handleDeleteWish();
    } else {
      // false이면 POST
      handleCreateWish();
    }
  };

  return (
    <div className={classes.Wrapper}>
      <div onClick={onClick} className={classes.ItemContainer}>
        <img
          className={classes.itemImg}
          src={product.thumbnail}
          alt='이미지 없음'
        />
        <div className={classes.textContainer}>
          <div className={classes.location}>
            <span className={classes.locationIcon}>
              <MdLocationOn size={18} />
            </span>
            <span className={classes.address}>
              {address[0]} {address[1]}
            </span>
          </div>
          <div className={classes.company}>{product.company}</div>
        </div>
      </div>
      <div className={classes.heart} onClick={onWish}>
        <div className={classes.IconWrapper}>
          {productHeart ? (
            <AiFillHeart size={25} className={classes.heartIconTrue} />
          ) : (
            <AiOutlineHeart size={25} className={classes.heartIconFalse} />
          )}
        </div>
      </div>
    </div>
  );
}
