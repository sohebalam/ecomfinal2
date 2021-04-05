import initDb from '../../helpers/initDB'
import Order from '../../models/orderModel'
import Authenticated from '../../helpers/Authenticated'

initDb()



export default Authenticated(async (req,res)=>{
  const orders =   await Order.find({user:req.userId})
     .populate("products.product")
  res.status(200).json(orders)
})