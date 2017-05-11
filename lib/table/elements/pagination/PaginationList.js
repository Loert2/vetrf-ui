'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageButton = require('./PageButton');

var _PageButton2 = _interopRequireDefault(_PageButton);

var _constants = require('../../elements/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationList = function (_Component) {
	_inherits(PaginationList, _Component);

	function PaginationList(props, context) {
		_classCallCheck(this, PaginationList);

		var _this = _possibleConstructorReturn(this, (PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call(this, props, context));

		_this.changePage = _this.changePage.bind(_this);
		_this.makePage = _this.makePage.bind(_this);
		_this.getPages = _this.getPages.bind(_this);
		return _this;
	}

	_createClass(PaginationList, [{
		key: 'changePage',
		value: function changePage(page) {
			var _props = this.props,
			    pageStartIndex = _props.pageStartIndex,
			    prePage = _props.prePage,
			    currPage = _props.currPage,
			    nextPage = _props.nextPage,
			    lastPage = _props.lastPage,
			    firstPage = _props.firstPage,
			    sizePerPage = _props.sizePerPage,
			    changePage = _props.changePage;


			if (page === prePage) {
				page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
			} else if (page === nextPage) {
				page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
			} else if (page === lastPage) {
				page = this.lastPage;
			} else if (page === firstPage) {
				page = pageStartIndex;
			} else {
				page = parseInt(page, 10);
			}
			if (page !== currPage) {
				changePage(page, sizePerPage);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    dataSize = _props2.dataSize,
			    sizePerPage = _props2.sizePerPage,
			    pageStartIndex = _props2.pageStartIndex;

			this.totalPages = Math.ceil(dataSize / sizePerPage);
			this.lastPage = pageStartIndex + this.totalPages - 1;
			var pageBtns = this.makePage();

			var pageListStyle = {
				// override the margin-top defined in .pagination class in bootstrap.
				margin: '0'
			};

			return _react2.default.createElement(
				'ul',
				{ className: 'pagination padding-top-6', style: pageListStyle },
				pageBtns
			);
		}
	}, {
		key: 'makePage',
		value: function makePage() {
			var pages = this.getPages();
			var _props3 = this.props,
			    currPage = _props3.currPage,
			    pageStartIndex = _props3.pageStartIndex,
			    firstPage = _props3.firstPage,
			    prePage = _props3.prePage,
			    nextPage = _props3.nextPage,
			    lastPage = _props3.lastPage;

			return pages.map(function (page, index) {
				var isActive = page === currPage;
				var disabled = false;
				var hidden = false;
				if (currPage === pageStartIndex && (page === firstPage || page === prePage)) {
					disabled = true;
					hidden = true;
				}
				if (currPage === this.lastPage && (page === nextPage || page === lastPage)) {
					disabled = true;
					hidden = true;
				}
				if (page === _constants2.default.DELIMITER_PAGINATION) {
					disabled = true;
					hidden = false;
				}
				return _react2.default.createElement(
					_PageButton2.default,
					{ key: index, changePage: this.changePage, active: isActive, disable: disabled, hidden: hidden },
					page
				);
			}, this);
		}
	}, {
		key: 'getPages',
		value: function getPages() {
			var pages = void 0;
			var endPage = this.totalPages;
			var _props4 = this.props,
			    currPage = _props4.currPage,
			    paginationSize = _props4.paginationSize,
			    pageStartIndex = _props4.pageStartIndex,
			    prePage = _props4.prePage,
			    nextPage = _props4.nextPage;

			if (endPage <= 0) return [];
			var startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
			endPage = startPage + paginationSize - 1;

			if (endPage > this.lastPage) {
				endPage = this.lastPage;
				startPage = endPage - paginationSize + 1;
			}

			if (startPage !== pageStartIndex && this.totalPages > paginationSize) {
				pages = [prePage, pageStartIndex, _constants2.default.DELIMITER_PAGINATION];
			} else if (this.totalPages > 1) {
				pages = [prePage];
			} else {
				pages = [];
			}

			for (var i = startPage; i <= endPage; i++) {
				if (i >= pageStartIndex) pages.push(i);
			}

			if (endPage < this.lastPage) {
				pages.push(_constants2.default.DELIMITER_PAGINATION);
				pages.push(this.lastPage);
				pages.push(nextPage);
			} else if (endPage === this.lastPage && currPage !== this.lastPage) {
				pages.push(nextPage);
			}

			return pages;
		}
	}]);

	return PaginationList;
}(_react.Component);

PaginationList.defaultProps = {
	sizePerPage: _constants2.default.SIZE_PER_PAGE,
	pageStartIndex: _constants2.default.PAGE_START_INDEX
};

PaginationList.propTypes = {
	currPage: _propTypes2.default.number,
	paginationSize: _propTypes2.default.number,
	pageStartIndex: _propTypes2.default.number,
	firstPage: _propTypes2.default.string,
	lastPage: _propTypes2.default.string,
	prePage: _propTypes2.default.string,
	dataSize: _propTypes2.default.number,
	sizePerPage: _propTypes2.default.number,
	nextPage: _propTypes2.default.string,
	changePage: _propTypes2.default.func
};

exports.default = PaginationList;