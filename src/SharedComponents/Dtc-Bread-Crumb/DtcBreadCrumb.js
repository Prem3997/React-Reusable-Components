/* eslint-disable no-nested-ternary */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import BreadCrumbNav from './BreadCrumbNav';
import './dtcBreadcrumb.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        borderBottom: '1px solid black'
    },

}));

const DtcBreadCrumb = ({
    breadCrumbNavData,
    breadCrumbNameMap,
    breadCrumbSeperator,
    breadCrumbMaxItemsToDisplay
}) => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Route>
                    {({ location }) => {
                        const pathnames = location.pathname.split('/').filter((x) => x);
                        return (
                            <Breadcrumbs aria-label="breadcrumb" maxItems={breadCrumbMaxItemsToDisplay} separator={breadCrumbSeperator}>
                                {pathnames.map((value, index) => {
                                    const last = index === pathnames.length - 1;
                                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                                    return last ? (
                                        <Typography color="textPrimary" key={to} style={{ color: 'black', fontSize: '1.5rem' }}>
                                            {breadCrumbNameMap[to]}
                                        </Typography>
                                    ) : (
                                            <NavLink color="inherit" to={to} key={to} style={{ color: 'black', fontSize: '1.5rem' }}>
                                                {breadCrumbNameMap[to]}
                                            </NavLink>
                                        );
                                })}
                            </Breadcrumbs>
                        );
                    }}
                </Route>
            </div>
            <div>
                <BreadCrumbNav breadCrumbNavData={breadCrumbNavData}></BreadCrumbNav>
            </div>
        </div>
    );
}
export default DtcBreadCrumb;


