import React from 'react';

export const OrdersScreen = (props) => {
  console.log("props.orders========", props.orders);

  // Separate state variables for each checkbox
  const [packedChecked, setPackedChecked] = React.useState(true);
  const [inTransitChecked, setInTransitChecked] = React.useState(true);
  const [deliveredChecked, setDeliveredChecked] = React.useState(true);




  // Assuming you have an array of orders in the props
  const packedCount = props.orders.filter(order => order.orderStatus === 'Packed').length;
  const inTransitCount = props.orders.filter(order => order.orderStatus === 'InTransit').length;
  const deliveredCount = props.orders.filter(order => order.orderStatus === 'Delivered').length;
  console.log("packedCount============---0",packedCount)
  
  const totalCount = (
    (packedChecked ? packedCount : 0) +
    (inTransitChecked ? inTransitCount : 0) +
    (deliveredChecked ? deliveredCount : 0)
  );


  return (
    <div className='ordersScreen'>
      <div className='ordersInsideOrdersScreen'>
        <div className='label'>
          <h1>Orders</h1>
          <h4>Filters</h4>
          <p>Count:
      <span>
           {totalCount}
      </span>
    </p>


          <div className='insideLabel'>
            <label>
              <input
                type="checkbox"
                checked={packedChecked}
                onChange={() => setPackedChecked(!packedChecked)}
              />
              Packed
            </label>
            <label>
              <input
                type="checkbox"
                checked={inTransitChecked}
                onChange={() => setInTransitChecked(!inTransitChecked)}
              />
              InTransit
            </label>
            <label>
              <input
                type="checkbox"
                checked={deliveredChecked}
                onChange={() => setDeliveredChecked(!deliveredChecked)}
              />
              Delivered
            </label>
          </div>
        </div>
        <div className='orders'>
          <div className='myclassForHeading'>
            <div className='id'><h4>ID</h4></div>
            <div className='customer'><h4>Customer</h4></div>
            <div className='date'><h4>Date</h4></div>
            <div className='amount'><h4>Amount</h4></div>
            <div className='status'><h4>Status</h4></div>
          </div>
          {props.orders.map((order) => {


            const shouldDisplay =
    (!packedChecked && !inTransitChecked && !deliveredChecked) ||
    (packedChecked && order.orderStatus === 'Packed') ||
    (inTransitChecked && order.orderStatus === 'InTransit') ||
    (deliveredChecked && order.orderStatus === 'Delivered');
  if (!shouldDisplay) {
    return null;
  }


            return (
              <div key={order.id} className="myclass">
               
                     
               <div className='id'>
            <h4 >{order.id}</h4>
                </div>
            
            <div className='customer'>
            <h4>{order.customerName}</h4>
            </div>
            
            <div className='order-date'>
            <h4 className='orderdate'>{order.orderDate}</h4>
            <h4 className='time'>{order.orderTime}</h4>
            </div>
            
            <div className='amount'>
            <h4>{order.amount}</h4>
            </div>
           
            <div className='status'>
            <h4>{order.orderStatus}</h4>
            </div>
            
         </div>



              
            );
          })}
        </div>
      </div>
    </div>
  );
};
