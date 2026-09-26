import { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const {_id} = useLoaderData();
  const bidModalRef = useRef(null);

  const { user } = use(AuthContext);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();

    const name=e.target.name.value 
    const email=e.target.email.value 
    const bid=e.target.bid.value
    console.log(_id,name,email,bid)
  };
  return (
    <div>
      {/* product info */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Add bid of this product
        </button>
        <dialog ref={bidModalRef} id="my_modal_4" className="modal">
          <div className="modal-box w-11/12">
            <form onSubmit={handleBidSubmit} className="fieldset">
              <label className="label">Name</label>
              <input type="text" defaultValue={user.displayName} readOnly name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" defaultValue={user.email} readOnly name="email" className="input" placeholder="Email" />
              <label className="label">Bid</label>
              <input type="text" className="input" name="bid" placeholder="Bid" />
              <button className="btn btn-neutral mt-4">Place Your Bid</button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* bids for product */}
    </div>
  );
};

export default ProductDetails;
