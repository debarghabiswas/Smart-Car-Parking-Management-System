import express from 'express';
import AdminParkingLots from '../models/AdminParkingLots.js';


const router = express.Router();

router.post('/registerlot', async (req, res)=>{
    try{
        const {email, parkingLotName, parkingLotLocation, parkingLotAddress, totalLots, rate} = req.body;

        // Validate required fields
        if (!email || !parkingLotName || !parkingLotLocation || !parkingLotAddress || !totalLots || !rate) {
            return res.status(400).json({error: "All fields are required"});
        }

        const newParkingLot = new AdminParkingLots({
            email, 
            parkingLotName, 
            parkingLotLocation, 
            parkingLotAddress, 
            totalLots,
            unreservedLots: totalLots, 
            reservedLots: 0,
            rate,
        });
        await newParkingLot.save();

        res.status(200).json({
            message: "✅Parking Lot Registered Successfully",
            email: newParkingLot.email,
            lotName: newParkingLot.parkingLotName,
            lotLocation: newParkingLot.parkingLotLocation,
            lotAddress: newParkingLot.parkingLotAddress,
            unreservedLots: newParkingLot.unreservedLots,
            reversedLots: newParkingLot.reversedLots,
        });

    } catch(err){
        res.status(500).json({error: "Error Registering Your Lot", details: err.message});
    }
});


router.post('/getlots', async (req, res)=>{
    try{
        const {email} = req.body;
        const parkingLots = await AdminParkingLots.find({ email: email });
        res.status(200).json({
            message: "Parking lots retrieved successfully",
            lots: parkingLots,
        });

    } catch(err){
        res.status(500).json({error: "Error Finding Lots"});
    }
});

router.post('/search', async (req, res)=>{
    try{
        const {q} = req.body;
        const parkingLots = await AdminParkingLots.find({parkingLotLocation: {$regex: q, $options: "i"}});

        res.status(200).json({
            message: "Successfully Retrieved the Parking Lots", 
            lots: parkingLots,
        })

    } catch(err){
        res.status(500).json({error: "Error Finding Parking Spots"});
    }
});

router.get('/doc3', async (req, res)=>{
    try{
        const results = await AdminParkingLots.aggregate([
            {$sample:{size:3}},
        ]);

        res.status(200).json({
            message: "Successfully Retrieved the 4 Documents",
            lots: results,
        });

    } catch(err){
        res.status(500).json({error: "Error Retrieving Parking Spots"});
    }
});

export default router;