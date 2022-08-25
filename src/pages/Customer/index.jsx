import {Fragment, Component} from "react";
import "../Product/style.css";
import {
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper, Tooltip,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NavBar from "../NavBar";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerForm: {
                customer_name: '',
                gender:'',
                nic:'',
                email:'',
            },
            gender:["male","female"],
            btnStatus:"save",
            index:"",
            customers: [],
        }
    }

    saveCustomer = () => {
        if (this.state.btnStatus==="save"){
            let customerForm = this.state.customerForm;
            let customers = this.state.customers;
            customers.push(customerForm);
            this.setState({customers})
        }else{
            let customers = this.state.customers;
            customers.pop(this.state.index)
            let customerForm = this.state.customerForm;
            customers.push(customerForm);
            this.setState({customers:customers,btnStatus:"save"})
        }
        this.clearFields()

    }

    updateCustomer(row,index) {
        console.log(row)
        this.setState({  customerForm: {
                customer_name: row.customer_name,
                gender:row.gender,
                nic:row.nic,
                email:row.email,
            },
            btnStatus:"update",index:index})
    }
    deleteCustomer(index) {
        let customers = this.state.customers;
        customers.pop(index)
        this.setState({customers})

    }

    clearFields = () => {
        this.setState({
            customerForm: {
                customer_name: '',
                gender:'',
                nic:'',
                email:'',
            }
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <div className="manage-sub-container">
                        <div className="manage-form-title">
                            <h1>Customer Manage</h1>
                        </div>
                        <div className="manage-form-detail" >
                            <div className="manage-form-detail-col1">
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Customer Name"
                                        variant="outlined"
                                        value={this.state.customerForm.customer_name}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.customer_name = e.target.value
                                            this.setState({customerForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="NIC"
                                        variant="outlined"
                                        value={this.state.customerForm.nic}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.nic = e.target.value
                                            this.setState({customerForm})
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="manage-form-detail-col1">
                                <FormControl fullWidth style={{marginTop:"30px"}}>
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="User Name"
                                        value={this.state.customerForm.gender}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.gender = e.target.value;
                                            this.setState({customerForm})
                                        }}
                                    >
                                        <MenuItem value={0}>male</MenuItem>
                                        <MenuItem value={1}>Female</MenuItem>
                                    </Select>
                                </FormControl>

                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        value={this.state.customerForm.email}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.email = e.target.value
                                            this.setState({customerForm})
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="manage-form-btn">
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                sx={{marginRight: "10px"}}
                                onClick={() => {
                                    this.clearFields()
                                }}
                            >
                                Clear
                            </Button>
                            <Button variant="outlined" size="large" type="button" onClick={this.saveCustomer}>
                                {this.state.btnStatus}
                            </Button>
                        </div>
                    </div>

                    <div className="user-sub-table-container">
                        <div className="user-form-title">
                            <h1>All Customers</h1>
                        </div>
                        <div style={{overflow: 'auto'}} className={"user-from-detail"}>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                                <Table aria-label="user table">
                                    <TableHead style={{background: '#141212'}}>
                                        <TableRow>
                                            <TableCell style={{color: 'white', fontSize: '15px'}} align="center">Customer Name</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Gender</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">NIC</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Email</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                            {
                                        this.state.customers.map((row,index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.customer_name}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{this.state.gender[row.gender]}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.nic}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.email}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateCustomer(row,index);
                                                            }}
                                                        >
                                                            <EditIcon color="primary"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                console.log("hre")
                                                                this.deleteCustomer(index)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error"/>
                                                        </IconButton>
                                                    </Tooltip></TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Customer;
