// import { Navbar, NavbarProps } from './components/page/Navbar/Navbar';
import { Badge, BadgeProps } from './components/other/Badge/Badge';
import { Icon, IconProps } from './components/other/Icon/Icon';
import { Color } from './utils/type/Color';
import { Label, LabelProps } from './components/other/Label/Label';
import {
   LoadingSpinner,
   LoadingSpinnerProps
} from './components/other/LoadingSpinner/LoadingSpinner';
import { Alert, AlertProps } from './components/other/Alert/Alert';
import { withTooltip, WithTooltipProps } from './components/hoc/WithTooltip/withTooltip';
import Button, { ButtonProps } from './components/buttons/Button/Button';

/**
 * -------------------------------------------------------------------------------------------------
 * OLD WAY components
 * ------------------------------------------------------------------------------------------------- */
import ConfirmActionButton, {
   ConfirmActionButtonProps
} from './components/buttons/confirm-action/ConfirmActionButton/ConfirmActionButton';
import PromptActionButton from './components/buttons/confirm-action/PromptActionButton/PromptActionButton';

import ModalDialog from './components/modal/ModalDialog/ModalDialog';
import ItemLinkList from './components/other/ItemLinkList/ItemLinkList';

// @Deprecated
import FormActionsPanel from './components/form/old/actions/FormActionsPanel/FormActionsPanel';
import FormAction from './components/form/old/actions/FormAction/FormAction';

// @Deprecated
import ComplexDate from './components/form/old/fields/base/date/ComplexDate/ComplexDate';
import ComplexDateList from './components/form/old/fields/base/date/ComplexDateList/ComplexDateList';
import DatePicker from './components/form/old/fields/base/date/DatePicker/DatePicker';
import DateRange from './components/form/old/fields/base/date/DateRange/DateRange';
import FileDownload from './components/form/old/fields/base/file/FileDownload/FileDownload';
import FileUpload from './components/form/old/fields/base/file/FileUpload/FileUpload';
import FileInput from './components/form/old/fields/base/file/FileInput/FileInput';
import Input from './components/form/old/fields/base/input/Input/Input';
import AutocompleteInput from './components/form/old/fields/base/input/AutocompleteInput/AutocompleteInput';
import NumberInput from './components/form/old/fields/base/input/NumberInput/NumberInput';
import RadioBtn from './components/form/old/fields/base/radio/RadioBtn/RadioBtn';
import Select from './components/form/old/fields/base/select/Select/Select';
import SimpleSelect from './components/form/old/fields/base/select/SimpleSelect/SimpleSelect';
import AsyncSelect from './components/form/old/fields/base/select/AsyncSelect/AsyncSelect';
import Switch from './components/form/old/fields/base/switch/Switch/Switch';
import SwitchText from './components/form/old/fields/base/switch/SwitchText/SwitchText';
import Textarea from './components/form/old/fields/base/textarea/Textarea/Textarea';

// @Deprecated
import AutocompleteInputSearch from './components/form/old/fields/search/AutocompleteInputSearch/AutocompleteInputSearch';
import InputSearch from './components/form/old/fields/search/InputSearch/InputSearch';
import InputSelectSearch from './components/form/old/fields/search/InputSelectSearch/InputSelectSearch';
import SelectSearch from './components/form/old/fields/search/SelectSearch/SelectSearch';
import CheckboxSearch from './components/form/old/fields/search/CheckboxSearch/CheckboxSearch';

// @Deprecated
import Form from './components/form/old/containers/Form/Form';
import FormGroup from './components/form/old/containers/FormGroup/FormGroup';
import FormBlock from './components/form/old/containers/FormBlock/FormBlock';
import withValidate from './components/form/old/fields/field/hoc/withValidate';
import AutocompleteFormGroup from './components/form/old/fields/field/input/AutocompleteFormGroup/AutocompleteFormGroup';
import CheckboxFormGroup from './components/form/old/fields/field/checkbox/CheckboxFormGroup/CheckboxFormGroup';
import DateFormGroup from './components/form/old/fields/field/date/DateFormGroup/DateFormGroup';
import DateRangeFormGroup from './components/form/old/fields/field/date/DateRangeFormGroup/DateRangeFormGroup';
import ComplexDateListFormGroup from './components/form/old/fields/field/date/ComplexDateListFormGroup/ComplexDateListFormGroup';
import FileFormGroup from './components/form/old/fields/field/file/FileFormGroup/FileFormGroup';
import InputFormGroup from './components/form/old/fields/field/input/InputFormGroup/InputFormGroup';
import InputSelectFormGroup from './components/form/old/fields/field/input/InputSelectFormGroup/InputSelectFormGroup';
import NumberFormGroup from './components/form/old/fields/field/input/NumberFormGroup/NumberFormGroup';
import RadioBtnFormGroup from './components/form/old/fields/field/radio/RadioBtnFormGroup/RadioBtnFormGroup';
import RadioBtnSwitchFormGroup from './components/form/old/fields/field/radio/RadioBtnSwitchFormGroup/RadioBtnSwitchFormGroup';
import SelectFormGroup from './components/form/old/fields/field/select/SelectFormGroup/SelectFormGroup';
import AsyncSelectFormGroup from './components/form/old/fields/field/select/AsyncSelectFormGroup/AsyncSelectFormGroup';
import SwitchFormGroup from './components/form/old/fields/field/switch/SwitchFormGroup/SwitchFormGroup';
import TextareaFormGroup from './components/form/old/fields/field/textarea/TextareaFormGroup/TextareaFormGroup';

// @Deprecated
import IkarAddressForeign from './components/form/old/fields/base/ikar/IkarAddressForeign/IkarAddressForeign';
import IkarAddressRussia from './components/form/old/fields/base/ikar/IkarAddressRussia/IkarAddressRussia';
import IkarAddress from './components/form/old/fields/base/ikar/IkarAddress/IkarAddress';
import IkarAddressFormGroup from './components/form/old/fields/field/ikar/IkarAddressFormGroup/IkarAddressFormGroup';

import SubHeader, { SubHeaderProps } from './components/page/SubHeader/SubHeader';
import Page, { PageProps } from './components/page/Page/Page';
import ScrollToTop from './components/page/ScrollToTop/ScrollToTop';

import NumberEditableForm from './components/editable/NumberEditableForm/NumberEditableForm';
import EditableActions from './components/editable/EditableActions/EditableActions';
import NumberEditable from './components/editable/NumberEditable/NumberEditable';
import TextareaEditable from './components/editable/TextareaEditable/TextareaEditable';

import TableActionButtons from './components/table/tools/actions/TableActionButtons/TableActionButtons';
import DatePickerTableFilter from './components/table/tools/filter/DatePickerTableFilter/DatePickerTableFilter';
import InputTableFilter from './components/table/tools/filter/InputTableFilter/InputTableFilter';
import SelectTableFilter from './components/table/tools/filter/SelectTableFilter/SelectTableFilter';
import PaginationRow from './components/table/tools/pagination/PaginationRow/PaginationRow';
import Table from './components/table/Table/Table';
import ProfileTable from './components/table/ProfileTable/ProfileTable';
import CoordinateTable from './components/table/CoordinateTable/CoordinateTable';

import Tabs from './components/tabs/Tabs/Tabs';

import TimeLineContainer from './components/timeline/TimeLineContainer/TimeLineContainer';
import TimeLineListContainer from './components/timeline/TimeLineListContainer/TimeLineListContainer';

import Widget from './components/widget/Widget/Widget';
/** ------------------------------------------------------------------------------------------------ */
/**
 * -------------------------------------------------------------------------------------------------
 * CSS
 * ------------------------------------------------------------------------------------------------- */
import './vendor/styles/vendor.css';
import './vendor/styles/react-datetime.css';
import './vendor/styles/react-select.css';
import './assets/css/address.css';
import './assets/css/file-upload.css';
import './assets/css/file-download.css';
import './assets/css/font-vetis.css';
import './assets/css/irena.css';
import './assets/css/common.css';
import './assets/css/toggle-text.css';
import './assets/css/react-checkbox-tree.css';
import useOnClickOutside from './utils/hooks/useOnClickOutside';
import useClose from './utils/hooks/useClose';
import useToggle from './utils/hooks/useToggle';
/** ------------------------------------------------------------------------------------------------ */

// TODO: Доделать всё меню, а потом уже экспортировать
// export { Navbar, NavbarProps };
export { Badge, BadgeProps };
export { Icon, IconProps };
export { Color };
export { Label, LabelProps };
export { LoadingSpinner, LoadingSpinnerProps };
export { Alert, AlertProps };
export { withTooltip, WithTooltipProps };
export { Button, ButtonProps };

/**
 * -------------------------------------------------------------------------------------------------
 * OLD WAY components
 * ------------------------------------------------------------------------------------------------*/
export { ConfirmActionButton, ConfirmActionButtonProps };
export { PromptActionButton };

export { ModalDialog };
export { ItemLinkList };

export { Form };
export { FormActionsPanel };
export { FormAction };

export { ComplexDate };
export { ComplexDateList };
export { DatePicker };
export { DateRange };
export { FileDownload };
export { FileUpload };
export { FileInput };
export { Input };
export { AutocompleteInput };
export { NumberInput };
export { RadioBtn };
export { Select };
export { SimpleSelect };
export { AsyncSelect };
export { Switch };
export { SwitchText };
export { Textarea };

export { AutocompleteInputSearch };
export { CheckboxSearch };
export { InputSearch };
export { InputSelectSearch };
export { SelectSearch };

export { FormGroup };
export { FormBlock };
export { withValidate };
export { AutocompleteFormGroup };
export { CheckboxFormGroup };
export { DateFormGroup };
export { DateRangeFormGroup };
export { ComplexDateListFormGroup };
export { FileFormGroup };
export { InputFormGroup };
export { InputSelectFormGroup };
export { NumberFormGroup };
export { RadioBtnFormGroup };
export { RadioBtnSwitchFormGroup };
export { SelectFormGroup };
export { AsyncSelectFormGroup };
export { SwitchFormGroup };
export { TextareaFormGroup };

export { IkarAddressForeign };
export { IkarAddressRussia };
export { IkarAddress };
export { IkarAddressFormGroup };

export { SubHeader, SubHeaderProps };
export { ScrollToTop };
export { Page, PageProps };

export { NumberEditableForm };
export { EditableActions };
export { NumberEditable };
export { TextareaEditable };

export { TableActionButtons };
export { DatePickerTableFilter };
export { InputTableFilter };
export { SelectTableFilter };
export { PaginationRow };
export { Table };
export { ProfileTable };
export { CoordinateTable };

export { Tabs };

export { TimeLineContainer };
export { TimeLineListContainer };

export { Widget };

export { default as setIn } from './utils/function/setIn';
export { default as deleteIn } from './utils/function/deleteIn';

export { useOnClickOutside };
export { useClose };
export { useToggle };
/** ------------------------------------------------------------------------------------------------ */
