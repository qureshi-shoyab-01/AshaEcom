import React, { useState } from 'react'
import './Checkout.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const total = queryParams.get('total');
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [UserName, setUserName] = useState();
    const [Number, setNumber] = useState();
    const [Email, setEmail] = useState();
    const [Address, setAddress] = useState();
    const [Address_2, setAddress_2] = useState();
    const [Country, setCountry] = useState();
    const [State, setState] = useState();
    const [ZipCode, setZipCode] = useState();



    const CollectAddress = async () => {
        console.warn({ FirstName, LastName, UserName, Number });

        // Collect address
        const userId = JSON.parse(localStorage.getItem('register_users'))._id;
        try {
            let result = await fetch("http://localhost:9000/api/v1/auth/Address", {
                method: "post",
                body: JSON.stringify({ FirstName, LastName, UserName, Number, Email, Address, Address_2, Country, State, ZipCode, userId }),
                headers: { 'Content-Type': 'application/json' }
            });
            result = await result.json();
            console.log(result);
            alert('Submit Addresss');
    
            // Navigate based on total
            if (total) {
                navigate(`/Bankdetails?total=${parseFloat(total).toFixed(2)}`);
            } else {
                navigate(`/Checkout`);
            }
        } catch (error) {
            console.error('Error collecting address:', error);
            // Handle error as needed
        }


    }

    // Call useNavigate to get the navigate function
    const navigate = useNavigate();

 




 
    return (
        <div className='Checkout-Add-box'>
            <div className="container">
                <div className="py-5  text-center">
                    <h2>Checkout form</h2>
                    <p className="lead">
                        Each required form group has a validation state that can be triggered by
                        attempting to submit the form without completing it.
                    </p>
                </div>
                <div className="row">
                    {/* Add additional content or components if needed */}
                </div>
                <div className="col-md-12 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    
                                    value={FirstName}
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={LastName}
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    required

                                />
                                <div className="invalid-feedback">Valid last name is required.</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={UserName}
                                    onChange={(e) => { setUserName(e.target.value) }}
                                    required

                                />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone Number">
                                Phone Number <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="+91"
                                value={Number}
                                onChange={(e) => { setNumber(e.target.value) }}
                                required

                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                Email <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="you@example.com"
                                value={Email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required

                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="1234 Main St"
                                value={Address}
                                onChange={(e) => { setAddress(e.target.value) }}
                                required

                            />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2">
                                Address 2 <span className="text-muted">(City)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apartment or suite"
                                value={Address_2}
                                onChange={(e) => { setAddress_2(e.target.value) }}
                                required

                            />
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    value={Country}
                                    onChange={(e) => { setCountry(e.target.value) }}
                                    required

                                />
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    value={State}
                                    onChange={(e) => { setState(e.target.value) }}
                                    required

                                />

                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    placeholder=""
                                    value={ZipCode}
                                    onChange={(e) => { setZipCode(e.target.value) }}
                                    required

                                />
                                <div className="invalid-feedback">Zip code required.</div>
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <button onClick={CollectAddress} className="btn btn-primary btn-lg btn-block" type="button">
                            Order Now
                        </button>
                        <p>Total: ₨  {total ? total : '0.00'}</p>
                    </form>
                </div>
            </div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2024-2025 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Checkout