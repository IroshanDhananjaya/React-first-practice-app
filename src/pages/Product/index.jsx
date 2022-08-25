import React from "react";
import {Fragment, Component} from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,Tooltip
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import NavBar from '../NavBar'


class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productForm: {
                code: '',
                description:'',
                price:'',
                qty:'',
            },
            btnStatus:"save",
            index:"",
            products: [],
        }
    }

    saveProduct = () => {
        if (this.state.btnStatus==="save"){
            let productForm = this.state.productForm;
            let products = this.state.products;
            products.push(productForm);
            this.setState({products})
        }else {
            let products = this.state.products;
            products.pop(this.state.index)
            let productForm = this.state.productForm;
            products.push(productForm);
            this.setState({products:products,btnStatus:"save"})
        }

        this.clearFields()

    }

    updateProduct(row,index) {
        console.log(row)
        this.setState({  productForm: {
                code: row.code,
                description:row.description,
                price:row.price,
                qty:row.qty,
            },
        btnStatus:"update",index:index})
    }
    deleteProduct=(index)=> {
        let products = this.state.products;
        products.pop(index)
        this.setState({products})

    }


    clearFields = () => {
        this.setState({
            productForm: {
                code: '',
                description:'',
                price:'',
                qty:'',
            },
        })
    }


    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <div className="manage-sub-container">
                        <div className="manage-form-title">
                            <h1>Product Manage</h1>
                        </div>
                        <div className="manage-form-detail" >
                            <div className="manage-form-detail-col1">
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Code"
                                        variant="outlined"
                                        value={this.state.productForm.code}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.code = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="description"
                                        variant="outlined"
                                        value={this.state.productForm.description}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.description = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="manage-form-detail-col1">

                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="price"
                                        variant="outlined"
                                        type="number"
                                        value={this.state.productForm.price}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.price = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="qty"
                                        type="number"
                                        variant="outlined"
                                        value={this.state.productForm.qty}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.qty = e.target.value
                                            this.setState({productForm})
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
                            <Button variant="outlined" size="large" type="button" onClick={this.saveProduct}>
                                {this.state.btnStatus}
                            </Button>
                        </div>
                    </div>

                    <div className="user-sub-table-container">
                        <div className="user-form-title">
                            <h1>All Product</h1>
                        </div>
                        <div style={{overflow: 'auto'}} className={"user-from-detail"}>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                                <Table aria-label="user table">
                                    <TableHead style={{background: '#141212'}}>
                                        <TableRow>
                                            <TableCell style={{color: 'white', fontSize: '15px'}} align="center">Code</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Price</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Description</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Quantity</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                                  {
                                        this.state.products.map((row,index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.code}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.description}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.price}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.qty}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateProduct(row,index);
                                                            }}
                                                        >
                                                            <EditIcon color="primary"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteProduct(index)
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

export default Product;
