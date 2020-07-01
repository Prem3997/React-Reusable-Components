import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MaterialTableIndex from './DemoComponents/Material-Table/MaterialTableIndex'
import PickTableIndex from './DemoComponents/Pick-Table/PickTableIndex'
import CarouselIndex from './DemoComponents/Carousel/CarouselIndex'
import CustomDialogIndex from './DemoComponents/Custom-Dialog/CustomDialogIndex'
import NumberFormatIndex from './DemoComponents/Number-Format/NumberFormatIndex'
import DynamicTabHorizontal from './DemoComponents/DynamicTab-Horizontal/DynamicTabHorizontal'
import DynamicMenuHorizontal from './DemoComponents/DynamicMenu-Horizontal/DynamicMenuHorizontal'
import BreadCrumbIndex from './DemoComponents/Bread-Crumb/BreadCrumbIndex'
import TagsInput from './DemoComponents/Tags-Input/TagsInputComponent'
import  UploadFileMain  from './DemoComponents/File-Upload/UploadFileMain'
import SelectAndListIndex from './DemoComponents/Select-And-List/SelectAndListIndex'
import AxiosInterceptorIndex from './DemoComponents/Axios-Interceptor/AxiosInterceptorIndex'
import ReactTable from './DemoComponents/React-Table/ReactTable'
import MultiSelect from './DemoComponents/Multi-Select/MultiSelect'
import DynamicForm from './DemoComponents/Dynamic-Form/DynamicForm'
import { TreeView } from './DemoComponents/Tree-View/TreeView'
import { DynamicTabVertical } from './DemoComponents/DynamicTab-Vertical/DynamicTabVertical'
import { CustomCalander } from './DemoComponents/Custom-Calander/CustomCalander'
import { CustomTimePicker } from './DemoComponents/Custom-TimePicker/CustomTimePicker'
import { SpeechToText } from './DemoComponents/SpeechToText/SpeechToText'
import RatingComponents from './DemoComponents/Ratings/RatingComponents'
import SpinnerComponent from './DemoComponents/Spinner/SpinnerComponent'
import SummaryDashboard from './DemoComponents/Dashboard/SummaryDashboard'
import ScrollComponent from './DemoComponents/Scroll-Top-Bottom/ScrollComponent'
import DownloadFileIndex from './DemoComponents/Download-File/DownloadFileIndex'
import DynamicWidgetIndex from './DemoComponents/Dynamic-Widget/DynamicWidgetIndex'
import PushNotificationDemo from './DemoComponents/Push-Notification-Demo/PushNotificationDemo'
import { ModalLoader } from './DemoComponents/Modal-Loader/ModalLoader'
import StickyHeader from './DemoComponents/StickyHeader/StickyHeader'
import SnackBar from './DemoComponents/SnackBar/SnackBar'
import { ButtonDemo } from './DemoComponents/Button/ButtonDemo'
import DragDrop from './DemoComponents/DragAndDrop/DragDrop'
import TaskAssigner from './DemoComponents/Task-Assigner/TaskAssigner'
import { LocalizationDemo } from './DemoComponents/Localization/LocalizationDemo'
import AppMain from './DemoComponents/Dynamic-Route-Guards/AppMain'
import PrivateRoutes from './SharedComponents/Dtc-Dynamic-Route-Guards/PrivateRoutes'
import PublicRoutes from './DemoComponents/Dynamic-Route-Guards/PublicRoutes'

const Routes = () => (
        <Switch>
            <Route exact path='/' component={SummaryDashboard}></Route>
            <Route exact path='/modal-charts' component={SummaryDashboard}></Route>
            <Route exact path='/material-table' component={MaterialTableIndex}></Route>
            <Route exact path='/react-table' component={ReactTable}></Route>
            <Route exact path='/multi-select' component={MultiSelect}></Route>
            <Route exact path='/pick-table' component={PickTableIndex}></Route>
            <Route exact path='/ratings' component={RatingComponents}></Route>
            <Route exact path='/dynamic-form' component={DynamicForm}></Route>
            <Route exact path='/carousel' component={CarouselIndex}></Route>
            <Route exact path='/tree-view' component={TreeView}></Route>
            <Route exact path='/custom-dialogue' component={CustomDialogIndex}></Route>
            <Route path='/dynamictab-vertical' render={() => <DynamicTabVertical />}></Route>
            <Route exact path='/custom-calander' component={CustomCalander}></Route>
            <Route exact path='/number-format' component={NumberFormatIndex}></Route>
            <Route path='/dynamictab-horizontal' render={() => <DynamicTabHorizontal />}></Route>
            <Route path='/dynamicmenu-horizontal' render={() => <DynamicMenuHorizontal />}></Route>
            <Route path='/bread-crumb' render={()=><BreadCrumbIndex></BreadCrumbIndex>}></Route> 
            <Route exact path='/snackbar' component={SnackBar}></Route>
            <Route path='/custom-timepicker' component={CustomTimePicker}></Route>
            <Route path='/tags-input' component={TagsInput}></Route>
            <Route exact path='/upload-file' component={UploadFileMain}></Route>
            <Route exact path='/speech-text' component={SpeechToText}></Route>
            <Route exact path='/select-and-list' component={SelectAndListIndex}></Route>
            <Route exact path='/axios-interceptor' component={AxiosInterceptorIndex}></Route>
            <Route exact path='/dynamic-widget' component={DynamicWidgetIndex}></Route>
            <Route exact path='/spinner' component={SpinnerComponent}></Route>
            <Route exact path='/sticky-header' component={StickyHeader}></Route>
            <Route exact path='/scroll' component={ScrollComponent}></Route>
            <Route exact path='/download-file' component={DownloadFileIndex}></Route> 
            <Route exact path='/Push-notification' component={PushNotificationDemo}></Route>
            <Route exact path='/modal-loader' component={ModalLoader}></Route>
            <Route exact path='/button' component={ButtonDemo}></Route>
            <Route exact path='/drag-drop' component={DragDrop}></Route>
            <Route exact path='/task-assigner' component={TaskAssigner}></Route>
            <Route exact path='/localization' component={LocalizationDemo}></Route>
            <Route exact path='/route-guards-dynamic' component={AppMain}></Route>
            <Route path='/route-guards-dynamic/app' component={PrivateRoutes}></Route>
            <Route path='/route-guards-dynamic/*' component={PublicRoutes}></Route>
        </Switch>
)
export default Routes
