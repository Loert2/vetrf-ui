import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Input from '../input/Input';
/**
 * todo: Непроверенный компонет-заготовка для глобального поиска
 * */
export default class NavSearch extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         showSearchModal: false
      };
      this.handleClickOutside = this.handleClickOutside.bind(this);
   }

   handleClickOutside(e) {
      if (!ReactDOM.findDOMNode(this).contains(e.target)) {
         this.setState({ showSearchModal: false });
      }
   }

   componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, false);
   }

   componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, false);
   }

   closeOnSelect() {
      if (this.props.closeOnSelect) {
         this.setState({ showSearchModal: false });
      }
   }

   showSearchModal(self) {
      return () => {
         self.setState({ showSearchModal: true });
      };
   }

   render() {
      let content =
         this.props.content &&
         this.props.content.content &&
         this.props.content.content.filter((elem) => {
            if (this.props.selected) {
               return !this.props.selected.some(
                  (e) => e[this.props.idType] === elem[[this.props.idType]]
               );
            }
            return true;
         });
      return (
         <div id="nav-search" className="nav-search">
            <form className="form-search">
               <span className="input-icon">
                  <Input
                     className="nav-search-input width-260"
                     autoComplete="off"
                     autoFocus={this.props.autoFocus}
                     onEnter={() => this.props.changeTerm(this.props.term)}
                     onFocus={this.showSearchModal(this)}
                     value={this.props.term}
                     onChange={this.props.changeTerm}
                     placeholder="Поиск ..."
                  />
                  <i className="ace-icon fa fa-search nav-search-icon" />
               </span>
            </form>

            {this.state.showSearchModal && (
               <div className="result">
                  <ul>
                     {this.props.content &&
                        this.props.content.error && (
                           <li className="error">Ошибка загрузки</li>
                        )}
                     {this.props.content &&
                        this.props.content.loading && (
                           <li className="loading">Загрузка...</li>
                        )}
                     {this.props.content &&
                        !this.props.content.loading &&
                        !this.props.content.error &&
                        content.length === 0 && (
                           <li className="not-found">Ничего не найдено</li>
                        )}
                     {this.props.content &&
                        this.props.content.content &&
                        content.map((elem, index) => (
                           <li
                              key={index}
                              onClick={() => {
                                 this.closeOnSelect();
                                 if (this.props.onSelect) {
                                    this.props.onSelect(
                                       elem[this.props.idType]
                                    );
                                 }
                              }}>
                              {React.createElement(this.props.template, elem)}
                           </li>
                        ))}
                  </ul>
               </div>
            )}
         </div>
      );
   }
}
