import React, { Component } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { formatMoney, onClickAlert } from '../../../utils';
import { PURCHASE_MESSAGES } from '../../../config';
import './ProductDetailBigVolumeHead.scss';

class ProductDetailBigVolumeHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
    };
  }

  click40mlOption = () => {
    this.setState({
      option_40ml_HiddenBox: false,
    });
  };

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantity = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  render() {
    const { quantity, option_40ml_HiddenBox, show } = this.state;
    const { name, image_url, price, series_number, series } =
      this.props.productData;

    return (
      <div className="ProductDetailBigVolumeHead">
        <div className="productDetailLeftSection">
          <img
            src={image_url}
            alt="제품이미지"
            className="productDetailImage"
          />
        </div>
        <section className="productDetailRightSection">
          <div className="productDetailTitle">
            {series} {series_number}. {name}
          </div>
          <div className="productDetailPrice">{formatMoney(price)}원</div>
          <select className="productOption" onChange={this.click40mlOption}>
            <option value="productOptionTitle">
              -[필수] 옵션을 선택해 주세요 -
            </option>
            <option value="40ml">40ml Only</option>
            <option value="40ml_Message">40ml + 각인메세지 (+5000원)</option>
          </select>
          <div
            className={
              option_40ml_HiddenBox
                ? 'option_40ml_HiddenBox hiddenBoxInactive'
                : 'option_40ml_HiddenBox'
            }
          >
            <p className="only_40ml_HiddenTitle">40ML Only</p>
            <div className="hiddenCountBox">
              <button
                type="button"
                className="only_40ml_MinusButton"
                onClick={this.decreaseQuantity}
              >
                -
              </button>
              <div className="hiddenQuantity">
                {show ? <h2>{quantity}</h2> : ''}
              </div>
              <button
                type="button"
                className="only_40ml_PlusButton"
                onClick={this.increaseQuantity}
              >
                +
              </button>
            </div>
            <span className="productDetailOptionPrice">
              {formatMoney(price * quantity)}원
            </span>
          </div>
          <div className="productTotalPrice">
            <p className="totalPriceTitle">총 상품금액</p>
            <p className="totalPrice">{formatMoney(price * quantity)}원</p>
          </div>
          <div className="productDetailButtons">
            <button
              className="productPurchaseButton buttonCommon"
              onClick={() => onClickAlert(PURCHASE_MESSAGES.complete)}
            >
              바로 구매
            </button>
            <button
              className="productNaverPurchaseButton buttonCommon"
              onClick={() => onClickAlert(PURCHASE_MESSAGES.naverPayComplete)}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfSR-h7jsc9ADW5NBa-KbcW_Mb4VpR6nj2KzJDeIDC5N8Nruxq2dJUgYXkjI_wuPB9TA&usqp=CAU"
                alt="NaverIcon"
                className="naver_icon"
              />
              네이버로 구매하기
            </button>
            <div className="cardButton_Heart">
              <button
                className="productCartButton buttonCommon"
                onClick={() => onClickAlert(PURCHASE_MESSAGES.addCart)}
              >
                장바구니
              </button>
              <FaRegHeart className="productHeartIcon" />
            </div>
          </div>
          <p className="productUserLetter">
            회원 가입 시 할인, 포인트 적립 등 다양한 혜택을 받을 수 있습니다.
          </p>
        </section>
      </div>
    );
  }
}

export default ProductDetailBigVolumeHead;
