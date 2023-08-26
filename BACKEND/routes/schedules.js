const router = require("express").Router();
const Schedule = require("../models/ScheduleManagement");
let ScheduleManagement = require("../models/ScheduleManagement");


router.post("/add", async (req, res)=>{

    const Name = req.body.Name;
    const Address = req.body.Address;
    const OrderType = req.body.OrderType;
    const PhoneNo = Number(req.body.PhoneNo);

    try {
        
          const newSchedule = new Schedule({
            Name,
            Address,
            OrderType,
            PhoneNo,
          });
    
          await newSchedule.save();
          res.status(201).json({ message: "New schedule created" });
        }
       catch (error) {
        return res.status(400).json({ message: error });
      }

});




router.route("/").get((req,res)=>{

    ScheduleManagement.find().then((schedule)=>{
        res.json(schedule)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async (req,res)=>{
    let OrderId = req.params.id;
    const {Name, Address, OrderType, PhoneNo} = req.body;

    const updateScheduleManagement = {
        Name,
        Address,
        OrderType,
        PhoneNo
    }

    const update = await ScheduleManagement.findByIdAndUpdate(OrderId, updateScheduleManagement).then(()=>{
        res.status(200).send({status: "Order updated"})

    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500).send({status: "Error with updating data", error: err.massage});
    })

})



router.route("/delete/:id").delete(async (req,res)=>{
    let OrderId = req.params.id;

    await ScheduleManagement.findByIdAndDelete(OrderId).then(()=>{
        res.status(200).send({ststus: "Order Deleted"});

    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({ststus: "Error with delete order", error: err.massage});
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let OrderId = req.params.id;
    const order = await ScheduleManagement.findById(OrderId).then(()=>{
        res.status(200).send({status: "Order fetched", order: order})
        
    }).catch(()=>{
        console.log(err.massage);
        res.status(500).send({ststus: "Error with get order", error: err.massage});
    })
})



module.exports = router;