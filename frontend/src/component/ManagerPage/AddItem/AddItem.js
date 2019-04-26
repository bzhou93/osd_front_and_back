import React from 'react';
import './AddItem.css';
import UserStoreService from "../../../common/services/User/UserStoreService";
import userService from "../../../common/services/User/UserService";

const AddItem = (props) => {

    const handleSubmit = (event) => {
        let body = {
            authorization: UserStoreService.getToken(),
            warehouseid: event.target.wareNum.value,
            quantity: event.target.itemQuantity.value,
            price: event.target.price.value,
            name: event.target.itemName.value,
            weight: event.target.itemWeight.value,
            description: event.target.itemDescription.value,
            category: event.target.itemCategory.value,
            url: event.target.itemPicture.value
        };

        let newItem = [{"name" : event.target.itemName.value, "url" : event.target.itemPicture.value}];
        UserStoreService.addAllItem(newItem);

        userService.addItem(JSON.stringify(body)).then((data) => {
             console.log(data);

            alert('Add Item Successfully!');

            props.closeModal();
       //     props.history.push('/manager')
        }).catch((error) => {
           alert(error.message);
        });


        //userService.userLogin(body)
        event.preventDefault();
    };

    return (
        <div>


            <div>
                <h1>Add Item</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="fisrtName">Item ID<span className="text-danger">*</span></label>
                        <input type="number" name="itemId" required
                               placeholder="Enter Item Id" className="form-control" id="itemId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="wareNum">Warehouse #<span className="text-danger">*</span></label>
                        <input type="number" name="wareNum" required
                               placeholder="Enter Warehouse number" className="form-control" id="wareNum"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemQuantity">Quantity<span className="text-danger">*</span></label>
                        <input type="number" name="itemQuantity" required
                               placeholder="Enter Quantity" className="form-control" id="itemQuantity"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price<span className="text-danger">*</span></label>
                        <input type="number" step="0.01" name="price" required
                               placeholder="Enter Price" className="form-control" id="price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemName">Name<span className="text-danger">*</span></label>
                        <input type="text" name="itemName" required
                               placeholder="Enter Item Name" className="form-control" id="itemName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemWeight">Weight<span className="text-danger">*</span></label>
                        <input type="number" step="0.01" name="itemWeight" required
                               placeholder="Enter Item Weight" className="form-control" id="itemWeight"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemDescription">Description<span className="text-danger">*</span></label>
                        <input type="text" name="itemDescription" required
                               placeholder="Enter Item Description" className="form-control" id="itemDescription"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemCategory">Category<span className="text-danger">*</span></label>
                        <input type="text" name="itemCategory" required
                               placeholder="Enter Item Category" className="form-control" id="itemCategory"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemCategory">Picture<span className="text-danger">*</span></label>
                        <input type="text" name="itemPicture" required
                               placeholder="Enter Item Picture Url" className="form-control" id="itemPicture"/>
                    </div>
                    {/*<div>*/}
                        {/*<label htmlFor="itemPicture">Picture<span className="text-danger">*</span></label>*/}
                        {/*<input type="file" accept="image/*" id="itemPicture"/>*/}
                    {/*</div>*/}
                    <div className="btnCenter">
                    <button
                        className="btn btn-danger"
                    >
                        Add Item
                    </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddItem;