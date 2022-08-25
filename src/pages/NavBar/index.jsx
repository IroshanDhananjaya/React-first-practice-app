import React, {Component, Fragment} from "react";
import {AppBar, Button, Tabs, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <Fragment>
                <AppBar sx={{backgroundColor: '#ab0b0b', position: "static", boxShadow: 'none'}}>
                    <Toolbar>
                        <Link  to="/" style={{textDecoration: 'none'}}>
                            <Button style={{
                                color: 'white',
                                background: 'blue',
                                borderRadius: '15px',
                                marginLeft: '5px',
                                fontSize: 'medium'
                            }}>Dashboard</Button> </Link>
                        <Tabs sx={{margin: 'auto', mr: 5, display: 'flex', alignItems: "center"}}>

                            <Link to={"/product"} style={{textDecoration: 'none'}}>
                                <Button style={{
                                    color: 'white',
                                    background: 'black',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Product</Button>
                            </Link>
                            <Link to="/"  style={{textDecoration: 'none'}}>
                                <Button style={{
                                    color: 'white',
                                    background: 'black',
                                    borderRadius: '15px',
                                    marginLeft: '5px',
                                    fontSize: 'medium'
                                }}>Customer</Button>
                            </Link>

                        </Tabs>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }

}

export default NavBar
